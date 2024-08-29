"use client";
import { appwriteConfig, databases } from "@/appwrite/config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Query } from "appwrite";

import {
  BookKey,
  Contact,
  Eye,
  Frown,
  GalleryHorizontal,
  Gem,
  HomeIcon,
  Link2Off,
  LoaderCircle,
  LocateFixedIcon,
  Mail,
  Newspaper,
  Notebook,
  QuoteIcon,
  Send,
  ShieldQuestion,
  Target,
} from "lucide-react";
import {
  DM_Serif_Display,
  Inter,
  Lora,
  Playfair_Display,
} from "next/font/google";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const inter = Lora({
  subsets: ["latin"],
});
type Article = {
  $id: string;
  title_article: string;
  author_image: string;
  author: string;
  desgn: string;
  content: string;
};
const Home = () => {
  const [articles, setArticles] = useState<Article[]>([]); // Specify the type of articles
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await databases.listDocuments(
          appwriteConfig.databaseId, // Replace with your Appwrite database ID
          appwriteConfig.articlesCollection,
          [
            Query.select([
              "author",
              "author_image",
              "title_article",
              "desgn",
              "$id",
              "content",
            ]),
          ] // Replace with your Appwrite collection ID
        );

        // Map documents to Article type
        const fetchedArticles: Article[] = response.documents.map(
          (doc: any) => ({
            $id: doc.$id,
            title_article: doc.title_article,
            author_image: doc.author_image,
            author: doc.author,
            desgn: doc.desgn,
            content: doc.content,
          })
        );

        setArticles(fetchedArticles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center  items-center mt-20 text-center w-full">
        <p className="text-center flex gap-4 font-bold">
          <LoaderCircle className="animate-spin" />
          Loading up writers' work...
        </p>
      </div>
    );
  }
  return (
    <div>
      <div className="w-full backdrop-opacity-[.25] bg-custom-image-2 bg-no-repeat bg-cover h-[88vh] lg:h-[88vh] pt-40 p-2 flex justify-center items-start  flex-col ">
        <div className="bg-gradient-to-r from-amber-600 bg-opacity-100 p-10 rounded-lg mt-[50px]    w-[300px] lg:w-[550px]">
          <h1 className="font-bold text-white text-2xl lg:text-4xl">
            <span className={inter.className}>THE FUTURE IS BRIGHT </span>
          </h1>
          <p>
            <span className={inter.className}>
              <i className="mt-4 italic line-clamp-3 lg:line-clamp-2 text-black w-[200px] lg:w-[300px] text-sm">
                Normally in life, we as people tend to be rigid to changes. We
                are so comfortable with the conventional way of life and look at
                changes as disruptive and a disturbance.
              </i>
            </span>
          </p>
          <br />
          <p className="text-[12px] uppercase text-white">
            By Nakyejjwe Zahara Ramdhan Chief Editor, S.6. Sciences
          </p>
          <br />
          <Link href="/articles/read">
            <Button className="flex gap-2 w-22">
              <Notebook className="h-4 w-4" />
              Read Article
            </Button>
          </Link>
        </div>
      </div>

      {/*Section 2*/}
      <div className="p-10 border-t-8 border-amber-200">
        <h1 className="text-xl uppercase font-bold justify-center text-center">
          More from the Writers
        </h1>
        <p className="justify-center text-center ">Writers' Club </p>
        <div className="w-full">
          {articles.length === 0 ? (
            <div className="text-center flex flex-col justify-center items-center m-10">
              <Link2Off className="w-10 h-10 bg-blue-400 rounded-full" />
              <br />
              <h1 className="text-lg font-bold">Bad luck these days...</h1>
              <p className="text-sm text-slate-500">
                Crap!!. No articles were found.
                <br /> Check your connection and refresh page.
              </p>
            </div>
          ) : (
            <div className="hero2 gap-10 grid grid-cols-1 lg:grid-flow-row lg:grid-cols-3 p-1">
              {articles.map((article) => (
                <div
                  key={article.$id}
                  className="flex w-[300px] lg:w-[400px] lg:gap-6 gap-4 px-6 py-6 border-b-2 border-slate-200"
                >
                  <div className="w-fit">
                    <br />
                    <h2 className="font-black text-xl uppercase line-clamp-2 mb-2">
                      {article.title_article}
                    </h2>

                    <div className={inter.className}>
                      <p
                        className="text-slate-500 text-[12px] line-clamp-3 lg:line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                      />
                    </div>
                    <br />
                    <div>
                      <h2 className="text-sm text-slate-400">
                        Author:{" "}
                        <span className="text-sm text-slate-800">
                          {article.author}
                        </span>
                      </h2>
                    </div>

                    <br />
                    <Link href={`/articles/${article.$id}`}>
                      <Button className="flex gap-2 ">
                        <Newspaper className="w-4 h-4" /> Read More
                      </Button>
                    </Link>
                  </div>{" "}
                  <img
                    src={article.author_image}
                    className="w-[100px] hidden lg:block rounded-lg h-24"
                    alt="picture"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/*Footer*/}
      <div className="p-10 border-t-8 border-amber-200">
        <h1 className="text-xl font-bold justify-start text-start">
          Kawempe Muslim SS
        </h1>
        <ul className="text-slate-400">
          <h2>4 km along Kampala</h2>
          <h2>Bombo road on Kyadondo hill</h2>
        </ul>
        <br />
        <div className="flex flex-col lg:flex-row gap-8">
          <ul className="flex flex-col gap-2">
            <Link href="/">
              <li className="hover:underline cursor-pointer flex gap-1">
                <HomeIcon className="w-4 h-4 bg-amber-200 rounded-lg m-1" />
                Home
              </li>
            </Link>
            <Link href="#contact-us">
              <li className="hover:underline cursor-pointer flex gap-1">
                <Contact className="w-4 h-4 bg-amber-200 rounded-lg m-1" />
                Contact Us
              </li>
            </Link>
            <Link href="/about">
              <li className="hover:underline cursor-pointer flex gap-1">
                <ShieldQuestion className="w-4 h-4 bg-amber-200 rounded-lg m-1" />
                About Us
              </li>
            </Link>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="hover:underline cursor-pointer flex gap-1">
              <Newspaper className="w-4 h-4 bg-amber-200 rounded-lg m-1" /> News
            </li>
            <li className="hover:underline cursor-pointer  flex gap-1 ">
              <GalleryHorizontal className="w-4 h-4 bg-amber-200 rounded-lg m-1" />
              Posts
            </li>
            <li className="hover:underline cursor-pointer flex gap-1">
              <BookKey className="w-4 h-4 bg-amber-200 rounded-lg m-1" />
              Academics
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
