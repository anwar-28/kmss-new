"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { appwriteConfig, databases, storage } from "@/appwrite/config";
import { ID } from "appwrite";
import { Input } from "@/components/ui/input";
import { Editor } from "@tinymce/tinymce-react"; // Import TinyMCE Editor

export default function ArticleForm() {
  const [content, setContent] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string>("");
  const [inputs, setInputs] = useState({
    author: "",
    article_title: "",
    desgn: "",
  });
  const [error, setError] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
    console.log("Editor content changed:", newContent);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImageFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!inputs.author || !inputs.article_title || !inputs.desgn || !content) {
      setError("Please fill in all required fields.");
      console.error("Please fill in all required fields.");
      return;
    }

    setError(""); // Clear any previous errors

    try {
      let imageUrl = "";
      if (imageFile) {
        const uploadResponse = await storage.createFile(
          appwriteConfig.bucketId,
          ID.unique(),
          imageFile
        );

        // Use Appwrite's getFileView for obtaining a URL
        const fileView = storage.getFileView(
          appwriteConfig.bucketId,
          uploadResponse.$id
        );
        imageUrl = fileView.href;
        setImageURL(imageUrl);
      }

      const response = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.articlesCollection,
        ID.unique(),
        {
          author: inputs.author,
          desgn: inputs.desgn,
          title_article: inputs.article_title,
          content: content,
          author_image: imageUrl,
        }
      );

      console.log("Document created successfully:", response);
      // Optionally, reset the form here
      setInputs({ author: "", article_title: "", desgn: "" });
      setContent("");
      setImageFile(null);
      setImageURL("");
    } catch (error) {
      console.error("Error creating document:", error);
      setError("Error creating document. Please try again.");
    }
  };

  return (
    <main>
      <div className="h-screen w-screen flex items-center flex-col">
        <div className="m-10 flex flex-col items-center"></div>
        <div className="h-full w-[90vw]">
          <form onSubmit={handleSubmit}>
            <h1 className="mb-4 text-2xl font-bold">Add new article</h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <Input
              name="article_title"
              placeholder="Enter article title"
              value={inputs.article_title}
              onChange={handleInputChange}
              className="mb-4"
            />
            <Input
              name="author"
              placeholder="Enter author name"
              value={inputs.author}
              onChange={handleInputChange}
              className="mb-4"
            />
            <Input
              name="desgn"
              placeholder="Enter author designation"
              value={inputs.desgn}
              onChange={handleInputChange}
              className="mb-4"
            />
            <Input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mb-4"
            />

            <Editor
              initialValue={content}
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
              }}
              onEditorChange={handleEditorChange}
            />
            <Button type="submit" className="mt-4">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
