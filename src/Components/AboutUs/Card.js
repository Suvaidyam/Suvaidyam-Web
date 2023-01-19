import React from "react";
import encourage from "../../Assets/IMG_5619.webp";
import books from "../../Assets/colorful books.webp";
import desktop from "../../Assets/Mac Desktop.webp";
import board from "../../Assets/boad.webp";
export const Card = () => {
  return (
    <>
      {/* Empower */}
      <div className=" flex lg:justify-end lg:ml-0 ml-7  lg:w-[510px] lg:mt-16 mt-8 text-bgblue">
        <div>
          <h1 className="lg:text-xl text-[18px] font-semibold">HOW WE WORK </h1>
          <h1 className="lg:text-5xl text-4xl lg:mt-4 mt-2 from-neutral-400">
            We EMPOWER
          </h1>
        </div>
      </div>
      {/* card guide */}
      <div className="lg:flex justify-center mt-16 lg:w-full ">
        <div className="bg-[#F9F9F9] lg:w-[480px] w-full lg:mx-3 lg:flex pb-7 items-center">
          <img
            src={encourage}
            alt="encourage"
            className="rounded-full lg:w-52  w-[190px]  px-6 py-5"
          />
          <div className="lg:mt-5 lg:mx-0 mx-6">
            <p className="lg:text-2xl text-[27px] tracking-[2px] font-sans">
              WE ENCOURAGE
            </p>
            <p className="mt-3 text-gray-500 text-[17px]  lg:text-[14px] font-playfire lg:w-[260px] lg:mx-0 mx-1 ">
              Where a child is born has a huge influence over their education
              and career trajectories. We are brining tech exposure and
              opportunities to areas where even access to stable internet is a
              challenge.
            </p>
          </div>
        </div>
        <div className="bg-gray-50 lg:w-[480px] lg:mx-3 lg:mt-0 mt-4 lg:flex pb-7 items-center">
          <img
            src={books}
            alt="Books"
            className="rounded-full lg:w-52 w-[190px] px-6 py-5"
          />
          <div className="lg:mt-5  lg:mx-0 mx-6">
            <p className="lg:text-2xl text-[27px]  tracking-[2px] font-sans">
              WE GUIDE
            </p>
            <p className="mt-3 text-gray-500 text-[17px]  lg:text-[14px] font-playfire lg:w-[240px]">
              Along with providing quality computer education in rural areas
              where most don't have access to it growing up, we are imparting
              end-to-end guidance on how to launch successful careers in tech.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex justify-center mt-4">
        <div className="bg-gray-50 lg:w-[480px] lg:mx-3 lg:flex pb-7 items-center ">
          <img
            src={desktop}
            alt="desktop"
            className="rounded-full lg:w-52 w-[190px] px-6 py-5"
          />
          <div className="lg:mt-0 mt-4 lg:mx-0 mx-6">
            <p className="lg:text-2xl text-[27px] font-sans tracking-[2px]">
              WE INVEST
            </p>
            <p className="mt-3 text-gray-500 text-[17px] lg:mx-0  lg:text-[14px] font-playfire lg:w-[250px]">
              Introduce your team! Click here to add images, text and links, or
              connect data from your collection.
            </p>
          </div>
        </div>
        <div className="bg-gray-50 lg:w-[480px] lg:mt-0 mt-4 lg:mx-3 lg:flex pb-7 items-center">
          <img
            src={board}
            alt="encourage"
            className="rounded-full lg:w-52 w-[190px] px-6 py-5"
          />
          <div className=" lg:mx-0 mx-6 ">
            <p className="lg:text-2xl text-[27px] font-sans  tracking-[2px]">
              WE FACILITATE
            </p>
            <p className="  mt-3 text-gray-500 lg:text-[14px]  text-[17px] font-playfire lg-mx-0 ">
              Introduce your team! Click here to add images, text and links, or
              connect data from your collection.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
