"use clien";
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
    <main className="max-h-screen">
      <div className="my-4">
        <Marquee>
          <p className="font-silkscreen text-4xl mx-4 text-white">Degen Code</p>
          <p className="text-4xl  text-gray-800 font-bold">
            Unleashing Tomorrow, Today – Where Innovation Meets the Digital
            Revolution!
          </p>
        </Marquee>
      </div>
      <div className="flex md:flex-nowrap justify-center items-center flex-wrap gap-x-10 max-w-6xl mx-auto px-6 ">
        <div className="md:max-w-[50%]">
        <video src="/video.mp4" autoplay muted  loop alt=""></video>

        </div>
        <div className="flex flex-col gap-y-6 md:max-w-[50%] w-full mt-4">
          <div className="border-b border-gray-600 pb-6">
            <p className="text-3xl font-silkscreen linear-text2">Incubation</p>
            <p className="text-md mt-2 text-white">
              Decade Dive: Incubating and Investing, Capturing a Decade&apos;s
              Innovation in a Single Leap!
            </p>
          </div>
          <div className="border-b border-gray-600 pb-6">
            <p className="text-3xl font-silkscreen linear-text2">Technology</p>
            <p className="text-md mt-2 text-white">
              TechLeap & Innovate: Propelling a Decade&apos;s Breakthroughs, One
              Innovation at a Time!
            </p>
          </div>
          <div className="border-b border-gray-600 pb-6">
            <p className="text-3xl font-silkscreen linear-text2">
              Marketing and Public Raise
            </p>
            <p className="text-md mt-2 text-white">
              Catalyst Community: Igniting Innovation, Fueling Vibrant
              Communities!
            </p>
          </div>
          <div className="border-b border-gray-600 pb-6">
            <p className="text-3xl font-silkscreen linear-text2">
              Market Making
            </p>
            <p className="text-md mt-2 text-white">
              Mastering Markets with a Side of Financial and Token Management
              Expertise!
            </p>
          </div>
        </div>
      </div>

      <div className="my-10 ">
        <div className="mx-auto flex max-w-6xl px-6 lg:px-8">
          <p className="text-xl font-semibold  text-white mb-6">
            Our Previous <br /> Clients
          </p>
          <div className="flex gap-10 justify-between ml-10">
            <Marquee >
              <div className="flex gap-10 justify-between ml-10">
              {logos.map((item, index) => (
                <img
                  key={index}
                  className="col-span-2 mx-10 mix-blend max-h-12 w-full object-contain lg:col-span-1"
                  src={item.logo}
                  alt="Transistor"
                  width={158}
                  height={48}
                />
              ))}
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
