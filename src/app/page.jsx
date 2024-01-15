"use client";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const page = () => {
  const logos = [
    {
      name: "",
      logo: "https://pbs.twimg.com/profile_images/1532024598040018945/YwmR8m5s_400x400.jpg",
    },
    {
      name: "",
      logo: "https://pbs.twimg.com/profile_images/1390675212581097473/Zjzkwdqm_400x400.jpg",
    },
    {
      name: "",
      logo: "https://pbs.twimg.com/profile_images/1534237146990759943/FN6pMdA__400x400.png",
    },
    {
      name: "",
      logo: "https://pbs.twimg.com/profile_images/1666332463080300545/ShTbd9G5_400x400.jpg",
    },
    {
      name: "",
      logo: "https://pbs.twimg.com/profile_images/1534390710275014656/u6OEhKy2_400x400.jpg",
    },
    {
      name: "",
      logo: "https://pbs.twimg.com/profile_images/1555927388051374080/uqbZ5P61_400x400.jpg",
    },

    {
      name: "",
      logo: "https://pbs.twimg.com/profile_images/1592476572958744576/lPAlmKQM_400x400.jpg",
    },
    {
      name: "",
      logo: "https://pbs.twimg.com/profile_images/1729593467406295040/j9NjoBKH_400x400.jpg",
    },
    {
      name: "",
      logo: "https://pbs.twimg.com/profile_images/1609906456446504960/gmjKNWHi_400x400.jpg",
    },
  ];
  return (
    <main className="max-h-full bg-[#461E5C]">
      <div className="py-4 flex">
        <p className="font-silkscreen hover:scale-95 transition-all ease-in-out delay-75 md:w-[26%] w-1/2	 md:text-4xl text-2xl mx-4 text-white">
          Degen Code
        </p>

        <Marquee>
          <p className="text-4xl w-full  text-gray-100 font-bold">
            Unleashing Tomorrow, Today – Where Innovation Meets the Digital
            Revolution!
          </p>
        </Marquee>
      </div>
      <div className="flex md:flex-nowrap justify-center items-center flex-wrap gap-x-10 max-w-6xl mx-auto px-6 ">
        <div className="h-full md:w-1/2">
          <Spline
            scene="https://prod.spline.design/66TNjBVF7heMqEoh/scene.splinecode"
            className="h-full w-full"
          />
       
        </div>
        <div className="flex flex-col gap-y-6 md:max-w-[50%] w-full mt-4">
        <Link href="/technology">
            <div className="border-b  hover:scale-95 transition-all ease-in-out delay-75 border-gray-600 pb-6">
              <p className="text-3xl font-silkscreen linear-text2">
                Technology
              </p>
              <p className="text-md mt-2 text-white">
                TechLeap & Innovate: Propelling a Decade&apos;s Breakthroughs,
                One Innovation at a Time!
              </p>
            </div>
          </Link>
          <Link href="/marketing">
            <div className="border-b  hover:scale-95 transition-all ease-in-out delay-75 border-gray-600 pb-6">
              <p className="text-3xl font-silkscreen linear-text2">
                Marketing and Public Raise
              </p>
              <p className="text-md mt-2 text-white">
                Catalyst Community: Igniting Innovation, Fueling Vibrant
                Communities!
              </p>
            </div>
          </Link>
          <Link href="/marketmaking">
            <div className="border-b  hover:scale-95 transition-all ease-in-out delay-75 border-gray-600 pb-6">
              <p className="text-3xl font-silkscreen linear-text2">
                Market Making
              </p>
              <p className="text-md mt-2 text-white">
                Mastering Markets with a Side of Financial and Token Management
                Expertise!
              </p>
            </div>
          </Link>
          <Link href="/incubation">
            <div className="border-b hover:scale-95 transition-all ease-in-out delay-75 border-gray-600 pb-6">
              <p className="text-3xl font-silkscreen linear-text2">
                Incubation
              </p>
              <p className="text-md mt-2 text-white">
                Decade Dive: Incubating and Investing, Capturing a Decade&apos;s
                Innovation in a Single Leap!
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className="py-10 md:flex justify-between items-center max-w-6xl mx-auto">
        <div className=" max-w-3xl overflow-hidden flex justify-between items-center px-6 lg:px-8">
          <div className="w-1/3">
            <p className="text-xl font-silkscreen font-semibold  text-white mb-6">
              Portfolio
            </p>
          </div>
          <div className="flex gap-2 justify-between ml-10">
            <Marquee>
              <div className="flex gap-2 justify-between ml-10">
                {logos.map((item, index) => (
                  <img
                    key={index}
                    className="col-span-2 mx-10 mix-blend max-h-10 w-full object-contain lg:col-span-1"
                    src={item.logo}
                    alt="Transistor"
                  />
                ))}
              </div>
            </Marquee>
          </div>
        </div>
        <div className="flex px-6 lg:px-8 mt-4 gap-x-4">
          <Link href="https://twitter.com/degencodestudio?s=21&t=EtMFy30QIfpLRhxrCCftLg">
            <p className="text-white font-silkscreen">Twitter</p>
          </Link>
          <Link href="https://t.me/Degencodestudio">
            <p className="text-white font-silkscreen">Telegram</p>
          </Link>
          <Link href="">
            <p className="text-white font-silkscreen">Privacy</p>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default page;
