import React from "react";
import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("../NavBar"), {
  ssr: false,
});

const Home = dynamic(() => import("./Home"), {
  ssr: false,
});

const Page = () => {
  return (
    <>
      <NavBar />
      <Home />
    </>
  );
};

export default Page;
