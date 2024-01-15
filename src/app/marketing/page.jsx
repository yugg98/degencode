"use client";
import Footer from "../../components/Footer";

import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import CalendlyWidget from "../../components/Calendly";

export default function Home() {
  return (
    <div>
      <div className="md:px-20 px-4 bg-white/10 py-10 pb-20">
        <p className="md:text-7xl text-5xl py-4 linear-text2  font-silkscreen">
          <TypeAnimation
            sequence={["Marketing and Public Raise"]}
            repeat={"infinity"}
          />
           
        </p>
        <p className="text-white mt-4 md:text-2xl text-xl max-w-5xl">
          Web 3.0 meets the wild side of degen growth
        </p>
      </div>
      <div className="my-20 md:px-10 px-6 max-w-5xl mx-auto">
        <div className="flex md:flex-nowrap flex-wrap justify-between items-center  gap-x-20  ">
          <div  className="w-[600px] h-[400px]">
            <Spline
              scene="https://prod.spline.design/84v7sYfVJ7K-X6Ua/scene.splinecode"
              className="w-[600px] h-[400px]"
            />
            </div>
          <div>
            <p className="md:text-7xl font-silkscreen text-3xl md:mt-0 mt-10 text-white">
              Fueling Communities
            </p>
            <p className="text-gray-300 md:text-lg text-sm mt-4">
              We’re chargers, giving projects that much needed jolt of web 3
              power. You’re not just building communities; you’re building a
              cult.
            </p>
            <div className="mt-4">
              <p className="md:text-7xl font-silkscreen text-3xl md:mt-0 mt-10 text-white">
                Influencer Marketing
              </p>
              <p className="text-gray-300 max-w-lg  md:text-lg text-base mt-4">
                We toss influencers and blockchain into a blender and serve it
                to you chilled!
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white/10">
        <div class="mx-auto max-w-7xl  px-5 py-16 md:px-10 md:py-24 ">
          <div class="grid gap-5 sm:grid-cols-2 md:grid-cols-3 ">
            <div class="grid gap-2 border border-solid hover:border-[#F46900] rounded-sm p-8 md:p-10">
              <img src="/icons/set.svg" alt="" class="inline-block h-16" />
              <p class="text-2xl text-white font-semibold">Exposure</p>
              <p class="text-sm text-gray-100">
                Bizarrely cool marketing strategies, imagine blasting off!
              </p>
            </div>
            <div class="grid gap-2 border border-solid hover:border-[#F46900] rounded-sm p-8 md:p-10">
              <img src="/icons/set.svg" alt="" class="inline-block h-16" />
              <p class="text-2xl text-white font-semibold">Innovative</p>
              <p class="text-sm text-gray-100">Crypto meets buzz, that’s us!</p>
            </div>
            <div class="grid gap-2 border border-solid hover:border-[#F46900] rounded-sm p-8 md:p-10">
              <img src="/icons/set.svg" alt="" class="inline-block h-16" />
              <p class="text-2xl text-white font-semibold">Reliable</p>
              <p class="text-sm text-gray-100">
                Our dazzling results will leave you stunned
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto my-20 px-6">
        <p className="md:text-6xl text-4xl font-silkscreen linear-text2 max-w-3xl">
          Our Star Duo at your Service
        </p>
        <p className="text-white text-2xl mt-4">Our Star Duo at your Service</p>
        <div class="mx-auto max-w-7xl  px-5 py-16 md:px-10 md:py-24 ">
          <div class="grid gap-5 sm:grid-cols-2 md:grid-cols-3 ">
            <Link target="_blank" href="https://t.me/Indra6683">
              <div class="flex flex-col justify-center items-center gap-2 border border-solid border-[#F46900] hover:scale-95 rounded-sm p-8 md:p-10">
                <img
                  src="https://framerusercontent.com/images/IsDVm3aRwza3Avbta2V3YqgZXSw.jpg?scale-down-to=512"
                  alt=""
                  class="inline-block rounded-full h-16"
                />
                <p class="text-2xl text-white font-silkscreen font-semibold">
                  Indra
                </p>
                <p class="text-sm text-gray-100">Public raise Ninja</p>
              </div>
            </Link>
            <Link target="_blank" href="https://t.me/ryuk6911">
              <div class="flex flex-col justify-center items-center gap-2 border border-solid border-[#F46900] hover:scale-95 rounded-sm p-8 md:p-10">
                <img
                  src="https://framerusercontent.com/images/Q4nmlWzK3H4v01GmmgiWpHIiIeQ.jpg?scale-down-to=512"
                  alt=""
                  class="inline-block rounded-full h-16"
                />
                <p class="text-2xl text-white font-silkscreen font-semibold">
                  Ryuk
                </p>
                <p class="text-sm text-gray-100">Grwoth Hacker</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="my-10">
          <div className="grid md:grid-cols-2 gap-20">
            <div className="bg-white/10 hover:scale-95 transition-all ease-in-out delay-75 rounded-3xl py-16">
              <p className="text-5xl font-silkscreen text-center linear-text2">
                50+
              </p>
              <p className="text-3xl text-center mt-8 text-white">
                thriving communities we’ve super-charged
              </p>
            </div>
            <div className="bg-white/10 hover:scale-95 transition-all ease-in-out delay-75 rounded-3xl py-16">
              <p className="text-5xl font-silkscreen text-center linear-text2">
                15M+
              </p>
              <p className="text-3xl text-center mt-8 text-white">
                Funds raised
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 my-10 gap-y-8 md:gap-x-8 gap-x-0">
            <div className="bg-white/10 hover:scale-95 transition-all ease-in-out delay-75 rounded-3xl py-16">
              <p className="text-5xl font-silkscreen text-center linear-text2">
                9
              </p>
              <p className="text-3xl text-center mt-8 text-white">
                Launchpad Partners
              </p>
            </div>
            <div className="bg-white/10 hover:scale-95 transition-all ease-in-out delay-75 rounded-3xl col-span-2 py-16">
              <p className="text-5xl font-silkscreen text-center linear-text2">
                1000%
              </p>
              <p className="text-3xl text-center mt-8 text-white">
                average ROI of our growth hacks
              </p>
            </div>
          </div>
        </div>
        <div className="my-10">
          <div className="grid md:grid-cols-2 gap-20">
            <div className="bg-white/10 hover:scale-95 transition-all ease-in-out delay-75 rounded-3xl py-16">
              <p className="text-5xl font-silkscreen text-center linear-text2">
                500k+
              </p>
              <p className="text-3xl text-center mt-8 text-white">
                degens reached
              </p>
            </div>
            <div className="bg-white/10 hover:scale-95 transition-all ease-in-out delay-75 rounded-3xl py-16">
              <p className="text-5xl font-silkscreen text-center linear-text2">
                10+
              </p>
              <p className="text-3xl text-center mt-8 text-white">
                Years of Experience
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 my-10 gap-y-8 md:gap-x-8 gap-x-0">
            <div className="bg-white/10 col-span-1 w-full mx-auto hover:scale-95 transition-all ease-in-out delay-75 rounded-3xl py-16">
              <p className="text-5xl font-silkscreen text-center linear-text2">
                10
              </p>
              <p className="text-3xl text-center mt-8 text-white">
                Team Members
              </p>
            </div>
            <div className="bg-white/10 hover:scale-95 transition-all ease-in-out delay-75 col-span-2 rounded-3xl py-16">
              <p className="text-5xl font-silkscreen text-center linear-text2">
                150+
              </p>
              <p className="text-3xl text-center mt-8 text-white">
                Partnerships Closed
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto my-20 p-6">
        <p className="md:text-6xl text-3xl font-silkscreen linear-text2 max-w-3xl">
          Public Raise Degen Style
        </p>
        <p className="text-white md:text-2xl text-xl max-w-6xl mt-4">
          Public raise? Yeah, we do it, but we do it Degen style. Token
          launches, NFT madness, and blockchain wizardry – we&apos;re the chaos
          architects that&apos;ll make your raise unforgettable.
        </p>
      </div>

      <section>
        <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <h2 class=" md:text-7xl font-silkscreen text-3xl text-white text-center">
            GRAS - Growth As A service
          </h2>

          <p class="mx-auto mb-8 mt-4 max-w-3xl md:text-2xl text-lg text-center text-white md:mb-12 lg:mb-16">
            We&apos;re not serving growth; we&apos;re unleashing a degen
            revolution. Get hyped for a digital thrill ride that&apos;s about to
            turn your brand into the ultimate flex
          </p>
          <ul class="grid w-full grid-cols-1 gap-8 md:grid-cols-3 md:gap-4 ">
            <li class="flex max-w-md flex-col items-start justify-between  p-8">
              <h2 class=" text-[#F46900] font-silkscreen font-semibold text-3xl">
                Gras Starter
              </h2>
              <div className="mt-10">
                <div class="mt-2 flex flex-row items-center gap-x-2 text-left">
                  <CheckCircleIcon className="w-6 h-6 text-white/20" />
                  <p class="text-white font-silkscreen text-lg">
                    Content Curation
                  </p>
                </div>
                <div class="mt-2 flex flex-row items-center gap-x-2 text-left">
                  <CheckCircleIcon className="w-6 h-6 text-white/20" />
                  <p class="text-white font-silkscreen text-lg">TG 10k+</p>
                </div>
                <div class="mt-2 flex flex-row items-center gap-x-2 text-left">
                  <CheckCircleIcon className="w-6 h-6 text-white/20" />
                  <p class="text-white font-silkscreen text-lg">Twitter 5k+</p>
                </div>
                <div class="mt-2 flex flex-row items-center gap-x-2 text-left">
                  <CheckCircleIcon className="w-6 h-6 text-white/20" />
                  <p class="text-white font-silkscreen text-lg">Partnerships</p>
                </div>
                <div class="mt-2 flex flex-row items-center gap-x-2 text-left">
                  <CheckCircleIcon className="w-6 h-6 text-white/20" />
                  <p class="text-white font-silkscreen text-lg">Public Raise</p>
                </div>
                <div class="mt-2 flex flex-row items-center gap-x-2 text-left">
                  <CheckCircleIcon className="w-6 h-6 text-white/20" />
                  <p class="text-white font-silkscreen text-lg">
                    Guaranteed Volume
                  </p>
                </div>
              </div>
              <Link
                target="_blank"
                href="https://t.me/Indra6683"
                className="bg-[#F46900] font-silkscreen p-4 py-3 rounded-xl mt-10"
              >
                LFG!
              </Link>
            </li>
            <li class="flex max-w-md flex-col items-start justify-between  p-8">
              <h2 class=" text-[#F46900] font-silkscreen font-semibold text-3xl">
                GRAS Degen
              </h2>
              <div className="mt-10">
                <div class="mt-2 flex flex-row items-center gap-x-2 text-left">
                  <CheckCircleIcon className="w-6 h-6 text-white/20" />
                  <p class="text-white font-silkscreen text-lg">
                    Content Curation
                  </p>
                </div>
                <div class="mt-2 flex flex-row items-center gap-x-2 text-left">
                  <CheckCircleIcon className="w-6 h-6 text-white/20" />
                  <p class="text-white font-silkscreen text-lg">TG 25k+</p>
                </div>
                <div class="mt-2 flex flex-row items-center gap-x-2 text-left">
                  <CheckCircleIcon className="w-6 h-6 text-white/20" />
                  <p class="text-white font-silkscreen text-lg">Twitter 10k+</p>
                </div>
                <div class="mt-2 flex flex-row items-center gap-x-2 text-left">
                  <CheckCircleIcon className="w-6 h-6 text-white/20" />
                  <p class="text-white font-silkscreen text-lg">Partnerships</p>
                </div>
                <div class="mt-2 flex flex-row items-center gap-x-2 text-left">
                  <CheckCircleIcon className="w-6 h-6 text-white/20" />
                  <p class="text-white font-silkscreen text-lg">Public Raise</p>
                </div>
                <div class="mt-2 flex flex-row items-center gap-x-2 text-left">
                  <CheckCircleIcon className="w-6 h-6 text-white/20" />
                  <p class="text-white font-silkscreen text-lg">
                    Guaranteed Volume
                  </p>
                </div>
              </div>
              <Link
                target="_blank"
                href="https://t.me/Indra6683"
                className="bg-[#F46900] font-silkscreen p-4 py-3 rounded-xl mt-10"
              >
                LFG!
              </Link>
            </li>
            <li class="flex max-w-md flex-col items-start justify-between  p-8">
              <h2 class=" text-[#F46900] font-silkscreen font-semibold text-3xl">
                GRAS WILD
              </h2>
              <div className="mt-10">
                <div class="mt-2 flex flex-row items-center gap-x-2 text-left">
                  <CheckCircleIcon className="w-6 h-6 text-white/60" />
                  <p class="text-white font-silkscreen text-lg">
                    Content Curation
                  </p>
                </div>
                <div class="mt-2 flex flex-row items-center gap-x-2 text-left">
                  <CheckCircleIcon className="w-6 h-6 text-white/20" />
                  <p class="text-white font-silkscreen text-lg">TG 50k+</p>
                </div>
                <div class="mt-2 flex flex-row items-center gap-x-2 text-left">
                  <CheckCircleIcon className="w-6 h-6 text-white/20" />
                  <p class="text-white font-silkscreen text-lg">Twitter 20k+</p>
                </div>
                <div class="mt-2 flex flex-row items-center gap-x-2 text-left">
                  <CheckCircleIcon className="w-6 h-6 text-white/20" />
                  <p class="text-white font-silkscreen text-lg">Partnerships</p>
                </div>
                <div class="mt-2 flex flex-row items-center gap-x-2 text-left">
                  <CheckCircleIcon className="w-6 h-6 text-white/20" />
                  <p class="text-white font-silkscreen text-lg">Public Raise</p>
                </div>
                <div class="mt-2 flex flex-row items-center gap-x-2 text-left">
                  <CheckCircleIcon className="w-6 h-6 text-white/20" />
                  <p class="text-white font-silkscreen text-lg">
                    Guaranteed Volume
                  </p>
                </div>
              </div>
              <Link
                target="_blank"
                href="https://t.me/Indra6683"
                className="bg-[#F46900] font-silkscreen p-4 py-3 rounded-xl mt-10"
              >
                LFG!
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <div className="max-w-6xl mb-10 mx-auto  p-6">
        <p className="md:text-4xl text-2xl text-white max-w-5xl">
          Had enough of ordinary? It’s time for the extraordinary. Join us on
          this wild ride.
        </p>
        <button className=" shadow-lg  hover:bg-white font-semibold my-4 p-4 py-2 gap-x-2  rounded-full bg-transparent border-2 flex border-orange-600 text-orange-600 ">
          HMU!
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.71094 10.8754C1.71094 10.693 1.78337 10.5182 1.9123 10.3892C2.04123 10.2603 2.2161 10.1879 2.39844 10.1879H18.6138L14.2867 5.86213C14.1576 5.73304 14.0851 5.55795 14.0851 5.37538C14.0851 5.19281 14.1576 5.01772 14.2867 4.88863C14.4158 4.75954 14.5909 4.68701 14.7734 4.68701C14.956 4.68701 15.1311 4.75954 15.2602 4.88863L20.7602 10.3886C20.8242 10.4525 20.875 10.5284 20.9097 10.6119C20.9443 10.6954 20.9622 10.7849 20.9622 10.8754C20.9622 10.9658 20.9443 11.0554 20.9097 11.1389C20.875 11.2224 20.8242 11.2983 20.7602 11.3621L15.2602 16.8621C15.1311 16.9912 14.956 17.0637 14.7734 17.0637C14.5909 17.0637 14.4158 16.9912 14.2867 16.8621C14.1576 16.733 14.0851 16.5579 14.0851 16.3754C14.0851 16.1928 14.1576 16.0177 14.2867 15.8886L18.6138 11.5629H2.39844C2.2161 11.5629 2.04123 11.4904 1.9123 11.3615C1.78337 11.2326 1.71094 11.0577 1.71094 10.8754Z"
              fill="url(#paint0_linear_36_4144)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_36_4144"
                x1="-0.525344"
                y1="10.8852"
                x2="20.9622"
                y2="10.8615"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F46900" />
                <stop offset="1" stop-color="#F46900" />
              </linearGradient>
            </defs>
          </svg>{" "}
        </button>
      </div>
      <CalendlyWidget/>
      <Footer />
    </div>
  );
}
