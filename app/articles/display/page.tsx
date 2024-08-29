"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { Button } from "@/components/ui/button";
import { appwriteConfig, databases, storage } from "@/appwrite/config"; // Import storage
import { ID } from "appwrite";
import { Input } from "@/components/ui/input";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

export default function Home() {
  const [content, setContent] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null); // State for image file
  const [imageURL, setImageURL] = useState<string>(""); // State for image URL after upload

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ align: [] }],
      [{ color: [] }],
      ["code-block"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "align",
    "color",
    "code-block",
  ];

  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
    console.log("Changed");
  };

  const [inputs, setInputs] = useState({
    author: "",
    article_title: "",
    desgn: "",
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImageFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      let imageUrl = "";
      if (imageFile) {
        // Upload the image file to Appwrite storage
        const uploadResponse = await storage.createFile(
          appwriteConfig.bucketId, // Replace with your Appwrite storage bucket ID
          ID.unique(), // Generates a unique ID for the file
          imageFile
        );

        // Get the image URL
        imageUrl = storage.getFileView(
          appwriteConfig.bucketId,
          uploadResponse.$id
        ).href;
        setImageURL(imageUrl);
      }

      // Create a document in the Appwrite database
      const response = await databases.createDocument(
        appwriteConfig.databaseId, // Replace with your Appwrite database ID
        appwriteConfig.articlesCollection, // Replace with your Appwrite collection ID
        ID.unique(), // Document ID, 'unique()' generates a unique ID
        {
          author: inputs.author,
          desgn: inputs.desgn,
          title_article: inputs.article_title,
          content: content,
          author_image: imageUrl, // Save the image URL in the document
        }
      );

      console.log("Document created successfully:", response);
    } catch (error) {
      console.error("Error creating document:", error);
    }
  };

  return (
    <main>
      <div className="h-screen w-screen flex items-center flex-col">
        <div className="m-10 flex flex-col items-center"></div>
        <div className="h-full w-[90vw]">
          <form onSubmit={handleSubmit}>
            <h1>Add new article</h1>
            <Input
              placeholder="Enter article title"
              value={inputs.article_title}
              onChange={(e) =>
                setInputs((inputs) => ({
                  ...inputs,
                  article_title: e.target.value,
                }))
              }
            />
            <Input
              placeholder="Enter author name"
              value={inputs.author}
              onChange={(e) =>
                setInputs((inputs) => ({
                  ...inputs,
                  author: e.target.value,
                }))
              }
            />
            <Input
              placeholder="Enter author desgn title"
              value={inputs.desgn}
              onChange={(e) =>
                setInputs((inputs) => ({
                  ...inputs,
                  desgn: e.target.value,
                }))
              }
            />
            <Input
              type="file"
              accept="image/*"
              onChange={handleImageChange} // File input for image upload
            />

            <QuillEditor
              value={content}
              onChange={handleEditorChange}
              modules={quillModules}
              formats={quillFormats}
              className="w-full h-[70%] mt-10 bg-white"
            />
            <Button>Submit</Button>
          </form>
        </div>
      </div>
    </main>
  );
}
