import dynamic from "next/dynamic";
import React from "react";

const ArticleForm = dynamic(() => import("./ArticleForm"), {
  ssr: false,
});

const page = () => {
  return (
    <div>
      <ArticleForm />
    </div>
  );
};

export default page;
