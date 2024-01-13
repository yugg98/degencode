import React from "react";

const page = () => {
  return (
    <div>
      <div className="my-20 md:px-10 px-6 max-w-6xl mx-auto">
        <div className="flex md:flex-nowrap flex-wrap justify-between items-center  gap-x-20  ">
          <img src="/code.png" className="md:w-1/2 w-full" alt="" srcset="" />
          <div className="md:w-1/2 w-full">
            <p className="md:text-5xl text-3xl md:mt-0 mt-10 linear-text font-silkscreen">
              Market Making
            </p>
            <p className="text-gray-300 md:text-lg text-sm mt-4">
              Welcome to the heartbeat of market dynamism – Degencode's Market
              Making Services, where we don't just navigate markets; we
              orchestrate their pulse. We're not simply managing tokens; we're
              crafting symphonies of liquidity that set the stage for
              unparalleled trading experiences. With an unrivalled fusion of
              strategic prowess and technical finesse, we redefine market
              dynamics, ensuring your tokens not only stand out but dance
              effortlessly in the liquidity spotlight. At Degencode, we're not
              just market makers; we're the conductors of a liquidity revolution
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white/10 md:px-10 px-6 grid grid-cols-4 py-16 border-2 border-[#FFAD03] rounded-3xl my-10 max-w-7xl mx-auto">
        <div>
            <p className="text-5xl text-white text-center">50M+</p>
            <p className="text-lg text-white text-center">TRADED VOLUME</p>
        </div>
        <div>
            <p className="text-5xl text-white text-center">50M+</p>
            <p className="text-lg text-white text-center">TRADED VOLUME</p>
        </div>
        <div>
            <p className="text-5xl text-white text-center">50M+</p>
            <p className="text-lg text-white text-center">TRADED VOLUME</p>
        </div>
        <div>
            <p className="text-5xl text-white text-center">50M+</p>
            <p className="text-lg text-white text-center">TRADED VOLUME</p>
        </div>
      </div>
      <div className="my-20 md:px-10 px-6 max-w-7xl mx-auto">
        <p className="md:text-3xl text-xl md:leading-10  text-white max-w-6xl  ">
        Ready to revolutionise your market presence? 
        </p>
        <p className="text-white text-xl max-w-4xl mt-4">Elevate your tokens with Degencode's Market Making Services – where liquidity meets innovation. Let's amplify your impact in the digital arena. </p>
        <button className=" shadow-lg  hover:bg-white font-semibold my-4 p-4 py-2 gap-x-2  rounded-full bg-transparent border-2 flex border-purple-700 linear-text ">
          Sign Up Now!
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
    </div>
  );
};

export default page;
