"use client";
import { appwriteConfig, databases } from "@/appwrite/config";
import { CircleX, LoaderCircle } from "lucide-react";
import { Lora, Playfair_Display } from "next/font/google";
import React, { useEffect, useState } from "react";

const inter = Playfair_Display({
  subsets: ["latin"],
});
const inter2 = Lora({
  subsets: ["latin"],
});

type Article = {
  $id: string;
  title_article: string;
  author: string;
  desgn: string;
  content: string;
};

// Helper function to map Document to Article type
const mapDocumentToArticle = (doc: any): Article => ({
  $id: doc.$id,
  title_article: doc.title_article,
  author: doc.author,
  desgn: doc.desgn,
  content: doc.content,
});

const Page = ({ params }: { params: { read: string } }) => {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      try {
        const response = await databases.getDocument(
          appwriteConfig.databaseId, // Replace with your Appwrite database ID
          appwriteConfig.articlesCollection, // Replace with your Appwrite collection ID
          params.read // Updated to use params.read
        );

        // Map the document to the Article type
        const article = mapDocumentToArticle(response);
        setArticle(article);
      } catch (error) {
        console.error("Error fetching document:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [params]);

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-20 text-center w-full">
        <p className="text-center flex gap-4 font-bold">
          <LoaderCircle className="animate-spin" />
          Loading up writer's article...
        </p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="flex flex-col justify-center items-center text-center w-full">
        <div className="flex justify-center items-center mt-20 text-center w-full">
          <p className="text-center flex gap-4 font-bold">
            <CircleX className="bg-red-400 rounded-full" />
            No such article found.
          </p>
          <br />
        </div>
        <br />
        <p className="text-slate-400">{params.read} Kawempe Muslim Spy News</p>
      </div>
    );
  }

  return (
    <div>
      <div key={article.$id} className="bg-slate-50">
        {/* Render your article content here */}
        <div>
          <div key={article.$id} className="bg-slate-50">
            <div className="bg-cyan-400 text-white h-fit w-full pt-20 lg:pt-20 p-10 text-2xl lg:text-3xl ">
              <b className="text-sm">FIRST TERM 2024</b>
              <h1 className={inter.className}>
                <b>{article.title_article}</b>
              </h1>
              <p className="text-lg pt-2 lg:text-sm">By {article.author}</p>
              <p className="text-lg lg:text-sm">{article.desgn}</p>
            </div>
            <div className="py-10 p-10 lg:pt-20 lg:p-40 flex gap-4">
              <div className="text-center lg:block hidden">
                <img
                  src="/people-sample/pic1.png"
                  alt="profile_image"
                  className="w-[280px] h-[260px] rounded-lg"
                />
                <p className="italic text-[11px] text-slate-400 pt-2">
                  By {article.author}
                  <br />
                  {article.desgn}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="lg:m-12 text-center lg:mt-0">
                  <img
                    src="/people-sample/pic2.png"
                    alt="subject_image"
                    className="rounded-lg"
                  />
                </div>
                <p className="lg:w-[880px] md:text-lg md:p-20 md:pt-10 md:leading-9 leading-[25px] pt-1 drop-cap">
                  <div
                    className={inter2.className}
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                </p>
                <p className="text-slate-500">END OF ARTICLE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
