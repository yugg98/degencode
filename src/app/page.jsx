import React from "react";
import Marquee from "react-fast-marquee";

const page = () => {
  return (
    <main>
      <div className="my-10">
        <Marquee>
          <p className="font-silkscreen text-6xl mx-4 text-white">Degen Code</p>
          <p className="text-6xl  text-gray-800 font-bold">
            Unleashing Tomorrow, Today – Where Innovation Meets the Digital
            Revolution!
          </p>
        </Marquee>
      </div>
      <div className="flex flex-wrap gap-x-10 max-w-6xl mx-auto px-6 ">
        <div>
          <img src="/code.png" alt="" srcset="" />
        </div>
        <div className="flex flex-col gap-y-6 md:max-w-[50%] w-full mt-4">
          <div className="border-b border-gray-600 pb-6">
            <p className="text-4xl font-silkscreen linear-text2">Incubation</p>
            <p className="text-md mt-2 text-white">
              Decade Dive: Incubating and Investing, Capturing a Decade&apos;s
              Innovation in a Single Leap!
            </p>
          </div>
          <div className="border-b border-gray-600 pb-6">
            <p className="text-4xl font-silkscreen linear-text2">Technology</p>
            <p className="text-md mt-2 text-white">
            TechLeap & Innovate: Propelling a Decade's Breakthroughs, One Innovation at a Time! 
            </p>
          </div>
          <div className="border-b border-gray-600 pb-6">
            <p className="text-4xl font-silkscreen linear-text2">
              Marketing and Public Raise
            </p>
            <p className="text-md mt-2 text-white">
            Catalyst Community: Igniting Innovation, Fueling Vibrant Communities! 

            </p>
          </div>
          <div className="border-b border-gray-600 pb-6">
            <p className="text-4xl font-silkscreen linear-text2">
              Market Making
            </p>
            <p className="text-md mt-2 text-white">
            Mastering Markets with a Side of Financial and Token Management Expertise! 

            </p>
          </div>
        </div>
      </div>

      <div className="my-10 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xl font-semibold text-center text-white mb-6">
            Our Previous Clients
          </p>
          <div className="mx-auto mt-6 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
