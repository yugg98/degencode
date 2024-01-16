"use client";
import Footer from "../../components/Footer";
import Contactus from "../../components/Contact";
import Services, { OtherSerices } from "../../components/Services";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Spline from "@splinetool/react-spline";
import CalendlyWidget from "../../components/Calendly";

export default function Home() {
  return (
    <div>
      <div className="md:px-20 px-4 bg-white/10 py-10 pb-20">
        <p className="md:text-7xl text-5xl py-4 linear-text  font-silkscreen">
          <TypeAnimation
            sequence={["Strap in, digital dynamos!"]}
            repeat={"infinity"}
          />
        </p>
        <p className="text-white mt-4 md:text-2xl text-xl max-w-5xl">
          At Degencode, we&apos;re slinging blockchain wizardry and crafting
          decentralised coolness that puts the ordinary to shame.
        </p>
        <p className="text-white text-base mt-2 max-w-5xl">
          Buckle up, because at Degencode, we&apos;re not just riding the wave –
          we&apos;re turning it into a party. The future has a front-row seat
          for your fabulousness; are you ready to steal the show?
        </p>
      </div>
      <div className="my-20 md:px-10 px-6 max-w-5xl mx-auto">
        <div className="flex md:flex-nowrap flex-wrap justify-between items-center  gap-x-20  ">
          <div className="md:w-1/2 w-full h-[500px]">
            <Spline
              scene="https://prod.spline.design/7irI3hoitl3wO0AT/scene.splinecode"
              className="w-full  "
            />
          </div>

          <div className="md:w-1/2">
            <p className="md:text-5xl text-3xl md:mt-0 mt-10 text-white">
              Development Services
            </p>
            <p className="text-gray-300 md:text-lg text-sm mt-4">
              At Degencode, we redefine the digital frontier through our
              cutting-edge Web3 Tech Development services. Seamlessly blending
              creativity with technical prowess, we transform visionary concepts
              into tangible digital realities. From pioneering blockchain
              solutions to architecting decentralised platforms, we&apos;re not
              just developers; we&apos;re the architects of the future digital
              landscape..
            </p>
            <p className="text-gray-300 max-w-lg  md:text-lg text-base mt-4">
              With a pulse on the latest technologies, we craft bespoke
              solutions that not only meet but exceed the demands of the Web3
              era. Elevate your digital presence with Degencode – where
              innovation meets execution, and the future is now..
            </p>
          </div>
        </div>
      </div>
      <Services />
      <div className="bg-white/10 py-20 my-20 px-4 ">
        <div className="flex md:flex-nowrap  flex-wrap justify-between items-center max-w-8xl mx-auto  gap-x-20  ">
          <div className="md:w-1/2 overflow-hidden md:block hidden">
            <Spline
              scene="https://prod.spline.design/oTzmRZoXhCHgxNLd/scene.splinecode"
              className="w-full h-full "
            />
          </div>

          <div className="md:w-1/2">
            <p className="md:text-5xl text-3xl md:mt-0 mt-4 text-white">
              Real World Assets (RWA)
            </p>
            <p className="text-gray-300 md:text-lg text-sm mt-4">
              At Degencode, our Web3 RWA Tokenization services are not just
              flipping the script; we&apos;re turning it into a blockbuster. We
              don&apos;t tokenize assets; we transform them into blockchain
              legends.  Transparency, liquidity, accessibility – they&apos;re
              not features; they&apos;re our entourage. Why Degencode? It&apos;s
              where the real world gets a digital makeover.
            </p>
          </div>
        </div>
      </div>
      <div className=" py-20 my-20 px-4">
        <div className="flex md:flex-nowrap flex-wrap justify-between items-center max-w-5xl mx-auto  gap-x-20  ">
          <div className="md:w-1/2 my-6">
            <p className="md:text-5xl text-3xl text-white">
              Advisory and Consultation
            </p>
            <p className="text-gray-300 md:text-lg text-sm mt-4">
              Our advisory services are a strategic fusion of wisdom and
              innovation, providing insights that transcend the ordinary. From
              navigating blockchain landscapes to optimising decentralised
              ecosystems, we&apos;re the captains of your digital voyage. At
              Degencode, we&apos;re not just advisors; we&apos;re your partners
              in pioneering the next era of digital transformation. Elevate your
              strategy with a touch of Web3 brilliance – where every decision is
              a leap into the extraordinary.
            </p>
          </div>

          <div className="md:w-1/2 h-[400px] ">
            <Spline
              scene=" https://prod.spline.design/KXUbox-NAmMQ5sVP/scene.splinecode"
              className="w-full h-[400px] "
            />
          </div>
        </div>
      </div>
      <div className="bg-white/10 py-20 my-20 px-4">
        <div className="flex mb-20 md:flex-nowrap flex-wrap justify-between items-center max-w-5xl mx-auto  gap-x-20  ">
          <div className="md:w-1/2">
            <p className="md:text-5xl text-3xl text-white">
              Token and Smart Contract Services
            </p>
            <p className="text-gray-300 md:text-lg text-sm mt-4">
              At Degencode, our Web3 RWA Tokenization services are not just
              flipping the script; we&apos;re turning it into a blockbuster. We
              don&apos;t tokenize assets; we transform them into blockchain
              legends.  Transparency, liquidity, accessibility – they&apos;re
              not features; they&apos;re our entourage. Why Degencode? It&apos;s
              where the real world gets a digital makeover.
            </p>
          </div>
          <div className="md:w-1/2 mt-4 h-[400px] ">
            <Spline
              scene="https://prod.spline.design/B15h7sCE2b9XR9SL/scene.splinecode"
              className="w-full h-[400px] "
            />
          </div>
        </div>
        <OtherSerices />
      </div>
      <div className="my-20 ">
        <p className="md:text-3xl text-xl md:leading-10 px-5 text-white max-w-6xl text-center mx-auto">
          Ready to turn your digital dreams into reality? Unleash the power of
          innovation with Degencode&apos;s Tech Development Services. Whether
          it&apos;s blockchain brilliance or crafting decentralized wonders,
          we&apos;ve got the tech prowess to make it happen. Let&apos;s redefine
          possibilities together. Reach out to us now and let&apos;s build the
          future you envision! 
        </p>
        <button className="mx-auto shadow-lg  hover:bg-white font-semibold my-4 p-4 py-2 gap-x-2  rounded-full bg-transparent border-2 flex border-purple-700 linear-text ">
          Book an introductory call
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
                <stop stop-color="#4646FB" />
                <stop offset="1" stop-color="#BE4DFF" />
              </linearGradient>
            </defs>
          </svg>{" "}
        </button>
      </div>
      <div className="my-10">
        <Contactus />
      </div>
      <CalendlyWidget />
      <Footer />
    </div>
  );
}
