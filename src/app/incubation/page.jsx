"use client";
import Spline from "@splinetool/react-spline";
import Footer from "../../components/Footer";
import CalendlyWidget from "../../components/Calendly";

import React from "react";
import { TypeAnimation } from "react-type-animation";

const page = () => {
  return (
    <div>
      <div className="md:px-20 px-4 bg-white/10 py-10 pb-20">
        <p className="md:text-6xl text-5xl py-4 linear-text2 leading-10  font-silkscreen">
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
          We don&apos;t babysit startups; we catapult them into the
          stratosphere. Imagine a space that&apos;s not just an incubator but a
          wild mix of creative chaos, killer mentorship, and vibes that scream
          success. Our incubation program isn&apos;t for the faint-hearted;
          it&apos;s for those ready to ride the degen wave to startup stardom. 
        </p>
      </div>
      <div className="my-10">
        <p className="text-5xl text-white text-center font-silkscreen">
          Our Support
        </p>
        <div class="relative py-16 pt-36 pb-0">
          <div class="sticky top-0 border-t  -mt-48 mb-48 rounded-t-[46px]  border-white bg-[#0a0a0b] px-5 py-10 sm:px-20">
            <div className="flex justify-center sm:flex-nowrap flex-wrap-reverse	 p-6 items-center max-w-6xl mx-auto my-20 gap-x-20">
              <div>
                <p className="md:text-5xl text-center text-3xl py-4 text-white mt-4 font-silkscreen">
                  Fundraising
                </p>
                <div className="grid grid-cols-2 my-10 md:gap-10 gap-6">
                  <div>
                    <p className="text-lg text-white">Mad Connections</p>
                    <p className="text-gray-200">
                      Turbocharge your network for epic fundraising collabs.
                    </p>
                  </div>
                  <div>
                    <p className="text-lg text-white">Custom Hacks</p>
                    <p className="text-gray-200">
                      No cookie-cutter crap. Tailored strategies for your
                      project to slay.
                    </p>
                  </div>
                  <div>
                    <p className="text-lg text-white">Insider Scoops</p>
                    <p className="text-gray-200">
                      Ride the trend wave with our market insights. Stay ahead,
                      stay degen.
                    </p>
                  </div>
                  <div>
                    <p className="text-lg text-white">Total Takeoff Support</p>
                    <p className="text-gray-200">
                      {" "}
                      From pitch to deal, we&apos;ve got your back. Your success
                      is our degen mission.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:h-[600px] w-full">
              <Spline
                scene="https://prod.spline.design/0pVJ2zTkPv1aJ9gH/scene.splinecode"
                className="md:h-[600px] w-full"
              />
              </div>
            </div>
          </div>
          <div class="sticky top-0 right-0 md:w-1/2 border-t  -mt-48 mb-48 rounded-t-[46px]  border-white bg-[#0a0a0b] px-5 py-10 sm:px-20">
            <div className="flex justify-end sm:flex-nowrap flex-wrap p-6 items-center max-w-6xl mx-auto my-20 gap-x-20">
              <div className="">
                <p className="md:text-5xl text-center text-3xl py-4 text-white mt-4 font-silkscreen">
                  Tech Sorcery
                </p>
                <div className="grid grid-cols-2 my-10 md:gap-10 gap-6">
                  <div>
                    <p className="text-lg text-white">Pixel Precision MVPs</p>
                    <p className="text-gray-200">
                      MVPs so sharp, they cut through the noise like a tech
                      ninja.
                    </p>
                  </div>
                  <div>
                    <p className="text-lg text-white">Full-Stack Brilliance</p>
                    <p className="text-gray-200">
                      Gandalf-level full-stack wizardry for a robust tech
                      foundation.
                    </p>
                  </div>
                  <div>
                    <p className="text-lg text-white">Strategic Code Jitsu</p>
                    <p className="text-gray-200">
                      We&apos;re not just coding; we&apos;re architecting a tech
                      revolution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="sticky right-0 top-0 md:w-1/2 border-t  -mt-48 mb-48 rounded-t-[46px]  border-white bg-[#0a0a0b] px-5 py-10 sm:px-20">
            <div className="flex justify-center sm:flex-nowrap flex-wrap p-6 items-center max-w-6xl mx-auto my-20 gap-x-20">
              <div>
                <p className="md:text-5xl text-center text-3xl py-4 text-white mt-4 font-silkscreen">
                  Marketing and Public Raise
                </p>
                <div className="grid grid-cols-2 my-10 md:gap-10 gap-6">
                  <div>
                    <p className="text-lg text-white">
                      Targeted Public Raise Campaigns
                    </p>
                    <p className="text-gray-200">
                      targeted campaigns that hit hard, driving contributions
                      like a degen force.
                    </p>
                  </div>
                  <div>
                    <p className="text-lg text-white">Community Cult Vibes</p>
                    <p className="text-gray-200">
                      We&apos;re tribe architects. Fostering communities that
                      rally hard behind your project – expect nothing less.
                    </p>
                  </div>
                  <div>
                    <p className="text-lg text-white">Influencer Overdrive</p>
                    <p className="text-gray-200">
                      Turning influencers into your project&apos;s hype squad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="sticky right-0 top-0 md:w-1/2 border-t  -mt-48 mb-48 rounded-t-[46px]  border-white bg-[#0a0a0b] px-5 py-10 sm:px-20">
            <div className="flex justify-center sm:flex-nowrap flex-wrap p-6 items-center max-w-6xl mx-auto my-20 gap-x-20">
              <div>
                <p className="md:text-5xl text-center text-3xl py-4 text-white mt-4 font-silkscreen">
                  Market Making
                </p>
                <div className="grid grid-cols-2 my-10 md:gap-10 gap-6">
                  <div>
                    <p className="text-lg text-white">Liquidity Lightning</p>
                    <p className="text-gray-200">
                      Craft liquidity experiences that turn heads. Our token
                      management ensures seamless trading and vibrant markets.
                    </p>
                  </div>
                  <div>
                    <p className="text-lg text-white">
                      Dynamic Token Valuation
                    </p>
                    <p className="text-gray-200">
                      We sculpt dynamic valuations that reflect your
                      project&apos;s true potential.
                    </p>
                  </div>
                  <div>
                    <p className="text-lg text-white">Market Insight Mastery</p>
                    <p className="text-gray-200">
                      Numbers talk, trends walk. Dive into market insights that
                      steer your strategy in the right direction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <CalendlyWidget />
      <Footer />
    </div>
  );
};

export default page;
