"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const page = () => {
  return (
    <div>
      <div className="md:px-20 px-4 bg-white/10 py-10 pb-20">
        <p className="md:text-7xl text-5xl py-4 linear-text2  font-silkscreen">
          <TypeAnimation
            sequence={["Welcome to Degencode's Incubation Support"]}
            repeat={"infinity"}
          />
           
        </p>
        <p className="text-white mt-4 md:text-xl text-lg max-w-5xl">
          the secret sauce that transforms startups into titans! Here&apos;s the
          lowdown: beyond the cutting-edge tech, strategic marketing, and
          market-making wizardry we&apos;re already bringing to the table, our
          incubation support adds a sprinkle of pure magic.
          <br />
          <br />
          We don&apos;t babysit startups; we catapult them into the stratosphere.
          Imagine a space that&apos;s not just an incubator but a wild mix of
          creative chaos, killer mentorship, and vibes that scream success. Our
          incubation program isn&apos;t for the faint-hearted; it&apos;s for those ready
          to ride the degen wave to startup stardom. 
        </p>
      </div>
      <div className="my-10">
        <p className="text-5xl text-white text-center font-silkscreen">Our Support</p>
        <div className="flex justify-center sm:flex-nowrap flex-wrap p-6 items-center max-w-6xl mx-auto my-20 gap-x-20">
            <img src="/fund.png" alt="" srcset="" />
            <div>
                <p className="md:text-5xl text-3xl py-4 text-white mt-4 font-silkscreen">Fundraising</p>
                <div className="grid grid-cols-2 my-10 md:gap-10 gap-6">
                    <div>
                    <p className="text-lg text-white">Mad Connections</p>
                    <p className="text-gray-700">Turbocharge your network for epic fundraising collabs.</p>
                    </div>
                    <div>
                    <p className="text-lg text-white">Mad Connections</p>
                    <p className="text-gray-700">Turbocharge your network for epic fundraising collabs.</p>
                    </div>
                    <div>
                    <p className="text-lg text-white">Mad Connections</p>
                    <p className="text-gray-700">Turbocharge your network for epic fundraising collabs.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center sm:flex-nowrap flex-wrap p-6 items-center max-w-6xl mx-auto my-20 gap-x-20">
            <div>
                <p className="md:text-5xl text-3xl py-4 text-white mt-4 font-silkscreen">Fundraising</p>
                <div className="grid grid-cols-2 my-10 md:gap-10 gap-6">
                    <div>
                    <p className="text-lg text-white">Mad Connections</p>
                    <p className="text-gray-700">Turbocharge your network for epic fundraising collabs.</p>
                    </div>
                    <div>
                    <p className="text-lg text-white">Mad Connections</p>
                    <p className="text-gray-700">Turbocharge your network for epic fundraising collabs.</p>
                    </div>
                    <div>
                    <p className="text-lg text-white">Mad Connections</p>
                    <p className="text-gray-700">Turbocharge your network for epic fundraising collabs.</p>
                    </div>
                </div>
            </div>
            <img src="/fund.png" alt="" srcset="" />

        </div>
      </div>
    </div>
  );
};

export default page;
