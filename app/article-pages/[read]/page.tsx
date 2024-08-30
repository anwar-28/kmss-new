"use client";
import { appwriteConfig, databases } from "@/appwrite/config";
import { CircleX, LoaderCircle } from "lucide-react";
import { Lora, Playfair_Display } from "next/font/google";
import React, { useEffect, useState } from "react";

const playfairDisplayFont = Playfair_Display({ subsets: ["latin"] });
const loraFont = Lora({ subsets: ["latin"] });

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

const ArticleHeader = ({ article }: { article: Article }) => (
  <header className="bg-cyan-400 text-white h-fit w-full pt-20 lg:pt-20 p-10 text-2xl lg:text-3xl">
    <b className="text-sm">FIRST TERM 2024</b>
    <h1 className={playfairDisplayFont.className}>
      <b>{article.title_article}</b>
    </h1>
    <p className="text-lg pt-2 lg:text-sm">By {article.author}</p>
    <p className="text-lg lg:text-sm">{article.desgn}</p>
  </header>
);

const ArticleContent = ({ article }: { article: Article }) => (
  <div className="py-10 p-10 lg:pt-20 lg:p-40 flex gap-4">
    <aside className="text-center lg:block hidden">
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
    </aside>
    <section className="flex flex-col items-center">
      <div className="lg:m-12 text-center lg:mt-0">
        <img
          src="/people-sample/pic2.png"
          alt="subject_image"
          className="rounded-lg"
        />
      </div>
      <div
        className={`lg:w-[880px] md:text-lg md:p-20 md:pt-10 md:leading-9 leading-[25px] pt-1 drop-cap ${loraFont.className}`}
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
      <p className="text-slate-500">END OF ARTICLE</p>
    </section>
  </div>
);

const LoadingIndicator = () => (
  <main className="flex justify-center items-center mt-20 text-center w-full">
    <p className="text-center flex gap-4 font-bold">
      <LoaderCircle className="animate-spin" />
      Loading up writer's article...
    </p>
  </main>
);

const Page = ({ params }: { params: { read: string } }) => {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      setError(null); // Reset error state before fetching
      try {
        const response = await databases.getDocument(
          appwriteConfig.databaseId,
          appwriteConfig.articlesCollection,
          params.read
        );

        const article = mapDocumentToArticle(response);
        setArticle(article);
      } catch (err) {
        console.error("Error fetching document:", err);
        setError("Failed to load the article. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [params]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return (
      <main className="flex flex-col justify-center items-center text-center w-full">
        <div className="flex justify-center items-center mt-20 text-center w-full">
          <p className="text-center flex gap-4 font-bold">
            <CircleX className="bg-red-400 rounded-full" />
            {error}
          </p>
        </div>
        <p className="text-slate-400 mt-4">
          {params.read} Kawempe Muslim Spy News
        </p>
      </main>
    );
  }

  if (!article) {
    return (
      <main className="flex flex-col justify-center items-center text-center w-full">
        <div className="flex justify-center items-center mt-20 text-center w-full">
          <p className="text-center flex gap-4 font-bold">
            <CircleX className="bg-red-400 rounded-full" />
            No such article found.
          </p>
        </div>
        <p className="text-slate-400 mt-4">
          {params.read} Kawempe Muslim Spy News
        </p>
      </main>
    );
  }

  return (
    <article className="bg-slate-50">
      <ArticleHeader article={article} />
      <ArticleContent article={article} />
    </article>
  );
};

export default Page;
