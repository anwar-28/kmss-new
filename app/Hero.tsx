"use client";
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
import React, { useEffect, useState } from "react";

const inter = Playfair_Display({
  subsets: ["latin"],
});

const Hero = () => {
  // States for client-side rendered content
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true on the client-side
    setIsClient(true);
  }, []);

  return (
    <main>
      <div className="w-full backdrop-opacity-[.25] bg-custom-image bg-no-repeat bg-cover h-[88vh] lg:h-[90vh] pt-40 p-2 flex justify-center items-start flex-col">
        <div className="bg-gradient-to-r from-cyan-400 bg-opacity-40 lg:ml-10 p-10 rounded-lg mt-[150px] w-[300px] lg:w-[650px]">
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
          <Link href="/article-pages">
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
          <div className="justify-start p-1 w-[40vh] lg:mb-4 text-start lg:w-[120vh]">
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
              comprising present Nakawa Division, Kampala South comprising
              present Makindye Division and Kampala West comprising Rubaga
              Division.
            </span>
            <br />
            <br />
            <span className="hidden lg:block">
              Unfortunately, the Muslim community...
            </span>
          </div>
          <Link href="/about">
            <Button className="flex gap-2 w-22">
              <Notebook className="h-4 w-4" />
              Read more
            </Button>
          </Link>
        </div>
        <div>
          {isClient && (
            <img
              src="https://tse4.mm.bing.net/th/id/OIG2.t7fm3oP53G7THQT3mVeP?pid=ImgGn"
              className="w-[70vh] lg:block hidden rounded-xl shadow-lg"
              alt="Kawempe Muslim Secondary School"
            />
          )}
        </div>
      </div>

      {/*Section 5*/}
      <div className="lg:p-20 p-10 lg:flex gap-2 border-t-8 border-amber-200 bg-white">
        <div className="items-center flex flex-col">
          {isClient && (
            <Bird className="bg-blue-400 w-10 h-10 rounded-full lg:hidden text-center" />
          )}
          <br />
          <div className={inter.className}>
            <h1 className="lg:text-6xl text-2xl font-bold justify-start text-center lg:text-start text-cyan-400">
              This year is shouting out Blue
              <span className="text-slate-400"> Kyadondo House!</span>
            </h1>
          </div>
          <br />
          <p className="justify-start p-1 text-center w-[40vh] lg:mb-4 lg:text-start lg:w-[120vh]">
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
          {isClient && (
            <img
              src="https://tse4.mm.bing.net/th/id/OIG2.t7fm3oP53G7THQT3mVeP?pid=ImgGn"
              className="w-[70vh] lg:block hidden rounded-xl shadow-lg"
              alt="Kyadondo House Celebration"
            />
          )}
        </div>
      </div>

      {/*Section 2*/}
      <div className="p-10 bg-blue-200 border-t-8 border-amber-200">
        <h1 className="text-xl font-bold justify-center text-center">
          Theme of the year
        </h1>
        <p className="justify-center text-center">
          Determination, Diligence, Dedication
        </p>
        <div className="hero2 grid grid-cols-1 lg:grid-flow-row lg:grid-cols-4 p-4">
          <div className="p-6 m-4 bg-blue-100 hover:bg-amber-200 transition-all rounded-lg text-center flex justify-center items-center flex-col">
            <div className="bg-white mb-4 rounded-full p-6">
              <QuoteIcon className="w-6 h-6" />
            </div>
            <h2 className="font-bold">School Motto</h2>
            <p className="text-slate-600">"Go Higher"</p>
          </div>
          <div className="p-6 m-4 bg-blue-100 hover:bg-amber-200 transition-all rounded-lg text-center flex justify-center items-center flex-col">
            <div className="bg-white mb-4 rounded-full p-6">
              <Gem className="w-6 h-6" />
            </div>
            <h2 className="font-bold">Core Values</h2>
            <p className="text-slate-600">
              Fear Allah, Academic Excellence, Ethics and Integrity & Teamwork
            </p>
          </div>
          <div className="p-6 m-4 bg-blue-100 hover:bg-amber-200 transition-all rounded-lg text-center flex justify-center items-center flex-col">
            <div className="bg-white mb-4 rounded-full p-6">
              <Newspaper className="w-6 h-6" />
            </div>
            <h2 className="font-bold">Latest News</h2>
            <p className="text-slate-600">Stay updated with school events</p>
          </div>
          <div className="p-6 m-4 bg-blue-100 hover:bg-amber-200 transition-all rounded-lg text-center flex justify-center items-center flex-col">
            <div className="bg-white mb-4 rounded-full p-6">
              <Contact className="w-6 h-6" />
            </div>
            <h2 className="font-bold">Contact Us</h2>
            <p className="text-slate-600">Get in touch with us</p>
          </div>
        </div>
      </div>

      {/*Section 3*/}
      <div className="p-10 bg-white border-t-8 border-amber-200">
        <h1 className="lg:text-4xl text-2xl font-bold justify-center text-center text-cyan-400">
          Become a part of our learning Community
        </h1>
        <p className="justify-center text-center">
          Admissions open for 2024 intake. Enroll now!
        </p>
        <div className="lg:flex p-4 justify-center">
          <Link href="/admissions">
            <Button className="flex gap-2">
              <BookKey className="h-4 w-4" />
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      {/*Section 4*/}
      <div className="p-10 bg-blue-200 border-t-8 border-amber-200">
        <h1 className="lg:text-4xl text-2xl font-bold justify-center text-center text-cyan-400">
          Our Achievements
        </h1>
        <p className="justify-center text-center">
          Celebrating academic excellence and all-round development
        </p>
        <div className="hero3 grid grid-cols-1 lg:grid-flow-row lg:grid-cols-3 p-4">
          <div className="p-6 m-4 bg-white hover:bg-amber-200 transition-all rounded-lg text-center flex justify-center items-center flex-col">
            <div className="bg-blue-100 mb-4 rounded-full p-6">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="font-bold">Vision</h2>
            <p className="text-slate-600">
              To be a leading provider of quality education in Uganda
            </p>
          </div>
          <div className="p-6 m-4 bg-white hover:bg-amber-200 transition-all rounded-lg text-center flex justify-center items-center flex-col">
            <div className="bg-blue-100 mb-4 rounded-full p-6">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="font-bold">Mission</h2>
            <p className="text-slate-600">
              To provide a conducive learning environment that promotes
              academic, spiritual, and moral growth
            </p>
          </div>
          <div className="p-6 m-4 bg-white hover:bg-amber-200 transition-all rounded-lg text-center flex justify-center items-center flex-col">
            <div className="bg-blue-100 mb-4 rounded-full p-6">
              <ShieldQuestion className="w-6 h-6" />
            </div>
            <h2 className="font-bold">Core Values</h2>
            <p className="text-slate-600">
              Integrity, Respect, Excellence, Teamwork, and Responsibility
            </p>
          </div>
        </div>
      </div>

      {/*Section 6*/}
      <div className="p-10 bg-white border-t-8 border-amber-200">
        <h1 className="lg:text-4xl text-2xl font-bold justify-center text-center text-cyan-400">
          Visit Us
        </h1>
        <p className="justify-center text-center">
          We are located in Kawempe, Kampala, Uganda.
        </p>
        <div className="hero4 lg:flex p-4 justify-center">
          {isClient && (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127687.32704794461!2d32.52978887648656!3d0.33476317281941156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb86ba204c43%3A0xfaf5ddafced2ad4!2sKawempe!5e0!3m2!1sen!2sug!4v1618820268821!5m2!1sen!2sug"
              className="w-full h-[400px] lg:h-[500px] rounded-lg shadow-lg"
              title="Kawempe Muslim Secondary School Location"
              loading="lazy"
            ></iframe>
          )}
        </div>
      </div>

      {/*Footer*/}
      <div className="p-10 bg-blue-200 border-t-8 border-amber-200">
        <h1 className="lg:text-4xl text-2xl font-bold justify-center text-center text-cyan-400">
          Contact Us
        </h1>
        <p className="justify-center text-center">
          Get in touch with us for more information
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
          <div className="flex flex-col justify-center items-center bg-white p-6 rounded-lg">
            <Mail className="w-12 h-12 text-cyan-400" />
            <h2 className="font-bold">Email Us</h2>
            <p className="text-slate-600">info@kawempemuslim.ac.ug</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white p-6 rounded-lg">
            <LocateFixedIcon className="w-12 h-12 text-cyan-400" />
            <h2 className="font-bold">Visit Us</h2>
            <p className="text-slate-600">Kawempe, Kampala, Uganda</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white p-6 rounded-lg">
            <Send className="w-12 h-12 text-cyan-400" />
            <h2 className="font-bold">Follow Us</h2>
            <p className="text-slate-600">Social Media Links</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
