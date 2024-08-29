"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { appwriteConfig, databases, storage } from "@/appwrite/config";
import { ID } from "appwrite";
import { Input } from "@/components/ui/input";
import { Editor } from "@tinymce/tinymce-react"; // Import TinyMCE Editor

export default function Home() {
  const [content, setContent] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string>("");

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
    if (event.target.files && event.target.files[0]) {
      setImageFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      let imageUrl = "";
      if (imageFile) {
        const uploadResponse = await storage.createFile(
          appwriteConfig.bucketId,
          ID.unique(),
          imageFile
        );

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
              placeholder="Enter author designation"
              value={inputs.desgn}
              onChange={(e) =>
                setInputs((inputs) => ({
                  ...inputs,
                  desgn: e.target.value,
                }))
              }
            />
            <Input type="file" accept="image/*" onChange={handleImageChange} />

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
                  "undo redo | formatselect | bold italic backcolor | \
                  alignleft aligncenter alignright alignjustify | \
                  bullist numlist outdent indent | removeformat | help",
              }}
              onChange={(e) => handleEditorChange(e.target.getContent())}
            />
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </main>
  );
}
