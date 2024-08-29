import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Bird,
  BookKey,
  Contact,
  Eye,
  GalleryHorizontal,
  Gem,
  HomeIcon,
  LocateFixedIcon,
  Mail,
  Newspaper,
  Notebook,
  QuoteIcon,
  Send,
  ShieldQuestion,
  Target,
} from "lucide-react";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import React from "react";
const inter = Playfair_Display({
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <div>
      <div className="w-full backdrop-opacity-[.25] bg-custom-image bg-no-repeat bg-cover h-[88vh] lg:h-[90vh] pt-40 p-2 flex justify-center items-start  flex-col ">
        <div className="bg-gradient-to-r from-cyan-400  bg-opacity-40 lg:ml-10 p-10 rounded-lg mt-[150px] w-[300px] lg:w-[650px]">
          <h1 className="font-bold line-clamp-2 text-white text-2xl lg:text-4xl">
            <span className={inter.className}>
              STAFF MEMBERS ASTONISH STUDENTS ON MDD DAY
            </span>
          </h1>
          <p className="mt-4 italic line-clamp-3 text-slate-600 w-[200px] lg:w-[400px] text-[12px]">
            Members of Staff, led by <br className="lg:hidden" />
            the deputy headteacher Mr. Sengoba Ahmed mime “Super Hero” by J.
            Babirye during the MDD final 2024.
          </p>
          <br />
          <Link href="/articles">
            <Button className="flex gap-2 w-22">
              <Notebook className="h-4 w-4" />
              Read more
            </Button>
          </Link>
        </div>
      </div>
      {/*Section 1*/}
      <div className="lg:p-20 p-10 lg:flex gap-2 bg-white">
        <div>
          <div className={inter.className}>
            <h1 className="lg:text-5xl text-2xl font-bold justify-start text-start text-cyan-400">
              Celebrating 40yrs
              <span className="text-slate-400"> - Since 1984 </span>
            </h1>
          </div>
          <br />
          <p className="justify-start p-1 w-[40vh] lg:mb-4 text-start lg:w-[120vh]">
            Kawempe Muslim Secondary School was established by the government of
            Uganda in 1984 as a
            <span className="font-medium">"special gift"</span> to Kawempe
            Muslim Primary School in 1984 in appreciation of its excellent
            performance for over ten years.
            <span className="block lg:hidden">...</span>
            <br />
            <br />
            <span className="hidden lg:block">
              In 1983, the Ugandan government hatched a policy of establishing a
              secondary school for every constituency country-wide. Kampala
              district had four constituencies namely; Kampala North comprising
              the present Kawempe Division, Kyanja and Ntinda, Kampala East
              comprising present Nakawa Division,Kampala South comprising
              present Makindye Division and Kampala West comprising Rubaga
              Division.
            </span>
            <br />
            <br />
            <span className="hidden lg:block">
              Unfortunately, the Muslim community...
            </span>
          </p>
          <Link href="/about">
            <Button className="flex gap-2 w-22">
              <Notebook className="h-4 w-4" />
              Read more
            </Button>
          </Link>
        </div>
        <div>
          <img
            src="https://tse4.mm.bing.net/th/id/OIG2.t7fm3oP53G7THQT3mVeP?pid=ImgGn"
            className="w-[70vh] lg:block hidden rounded-xl shadow-lg"
            alt="image"
          />
        </div>
      </div>
      {/*Section 5*/}
      <div className="lg:p-20 p-10 lg:flex gap-2 border-t-8 border-amber-200 bg-white">
        <div className="items-center flex flex-col">
          <Bird className="bg-blue-400 w-10 h-10 rounded-full lg:hidden text-center" />
          <br />
          <div className={inter.className}>
            <h1 className="lg:text-6xl text-2xl font-bold justify-start text-center lg:text-start text-cyan-400">
              This year is shouting out Blue
              <span className="text-slate-400"> Kyadondo House!</span>
            </h1>
          </div>
          <br />
          <p className="justify-start p-1 text-center  w-[40vh] lg:mb-4 lg:text-start lg:w-[120vh]">
            <span className="hidden lg:block">
              Kyadondo House emerged as the champions of the 2024 House
              competitions, showcasing exceptional talent and teamwork from Term
              1 to Term 2.
            </span>
            <span className="hidden lg:block">
              Their dedication and hard work paid off as they excelled in
              various events, earning them the top spot.
            </span>
            Congratulations to all the members of Kyadondo House for their
            outstanding performance and spirit! 🎉🏆
          </p>
          <br />
          <Link href="/about">
            <Button className="flex gap-2 w-22">
              <GalleryHorizontal className="h-4 w-4" />
              View Gallery
            </Button>
          </Link>
        </div>
        <div>
          <img
            src="https://tse4.mm.bing.net/th/id/OIG2.t7fm3oP53G7THQT3mVeP?pid=ImgGn"
            className="w-[70vh] lg:block hidden rounded-xl shadow-lg"
            alt="image"
          />
        </div>
      </div>
      {/*Section 2*/}
      <div className="p-10 bg-blue-200 border-t-8 border-amber-200">
        <h1 className="text-xl font-bold justify-center text-center">
          Theme of the year
        </h1>
        <p className="justify-center text-center ">
          Determination, Deligence, Dedication
        </p>
        <div className="hero2 grid grid-cols-1 lg:grid-flow-row lg:grid-cols-4 p-4">
          <div className="p-6 m-4 bg-blue-100 hover:bg-amber-200 transition-all rounded-lg text-center flex justify-center items-center flex-col">
            <div className="bg-white mb-4 rounded-full p-6">
              <QuoteIcon className=" w-6 h-6" />
            </div>
            <h2 className="font-bold">School Motto</h2>
            <p className="text-slate-600">"Go Higher"</p>
          </div>
          <div className="p-6 m-4 bg-blue-100 hover:bg-amber-200 transition-all rounded-lg text-center flex justify-center items-center flex-col">
            <div className="bg-white mb-4 rounded-full p-6">
              <Gem className=" w-6 h-6" />
            </div>
            <h2 className="font-bold">Core Values</h2>
            <p className="text-slate-600">
              Fear Allah, Academic Excellence, Ethics and Integrity & Team work
            </p>
          </div>
          <div className="p-6 m-4 bg-blue-100 hover:bg-amber-200 transition-all rounded-lg text-center flex justify-center items-center flex-col">
            <div className="bg-white mb-4 rounded-full p-6">
              <Eye className=" w-6 h-6" />
            </div>
            <h2 className="font-bold">School Vision</h2>
            <p className="text-slate-600">
              A Fountain of Enlightened and Skilled Young Men and Women Rooted
              in Islamic Values.
            </p>
          </div>
          <div className="p-6 m-4 bg-blue-100 hover:bg-amber-200 transition-all rounded-lg text-center flex justify-center items-center flex-col">
            <div className="bg-white mb-4 rounded-full p-6">
              <Target className=" w-6 h-6" />
            </div>
            <h2 className="font-bold">School Mission</h2>
            <p className="text-slate-600">
              To Produce Versatile Individuals through Quality Education and
              Islamic Values to address Global Challenges.
            </p>
          </div>
        </div>
      </div>
      {/*Contact Us*/}
      <div className="p-16 bg-slate-50" id="contact-us">
        <div className="flex justify-center items-center">
          <Mail className="w-10 bg-yellow-200 rounded-full h-10" />
        </div>
        <br />
        <h1 className="text-2xl font-bold justify-center text-center">
          Contact Us
        </h1>
        <p className="justify-center text-sm lg:text-md text-center text-slate-400 ">
          Have any queries!! Speak to us and will clear the smoke.
        </p>
        <br />
        <div>
          <form action="">
            <Input
              type="text"
              className="bg-white p-6 mb-4"
              name="name"
              placeholder="Enter your name"
            />
            <Input
              type="email"
              className="bg-white p-6 mb-4"
              name="email"
              placeholder="Enter your email address"
            />
            <Input
              type="text"
              className="bg-white p-6 mb-4"
              name="student_name"
              placeholder="Enter student name (optional)"
            />
            <Textarea
              name="content"
              className="bg-white mb-4 p-5 h-40"
              placeholder="Enter query or message"
              id="content"
            />
            <Button className="flex gap-2">
              <Send className="w-4 h-4" />
              Submit Query
            </Button>
          </form>
        </div>
      </div>
      {/*Location Map*/}
      <div className="p-10 bg-slate-200">
        <div className="flex justify-center items-center">
          <LocateFixedIcon className="w-10 bg-yellow-200 rounded-full h-10" />
        </div>
        <h1 className="text-xl font-bold justify-center text-center">
          Visit Premises
        </h1>
        <p className="justify-center text-center text-slate-400 ">
          Come and checkout the school lively.
        </p>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.933267189352!2d32.53970869546668!3d0.3740075439570939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dba97a5826975%3A0x4b84c52dbb9e4ec!2sKawempe%20Muslim%20Secondary%20School!5e0!3m2!1sen!2sug!4v1716027074637!5m2!1sen!2sug"
            className="w-full h-[75vh] rounded-xl  border-4 border-blue-400"
            loading="lazy"
          ></iframe>
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

export default Hero;
