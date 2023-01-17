import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="md:text-center md:h-[650px] bg-[#FAFAFA] md:px-0 px-7">
        <div className="md:pt-32 pt-5 items-center">
          <p className=" md:text-4xl text-3xl font-thin md:tracking-widest">
            HAVE QUESTIONS?
          </p>
          <p className="border-bgblue w-11 md:mx-[48.3%] border-t-[3px] mt-2"></p>
          <p className="pt-5 tracking-[2px] text-[14px]">
            We have answers. Feel free to leave a message, and we will get back
            to you as soon as possible.
          </p>
        </div>
        {/* <div> */}
        <div className="pt-20">
          <label
            htmlFor="name"
            className=" text-gray-400 tracking-wider absolute z-40 text-[14px] -mt-5 md:-mt-1"
          >
            NAME
          </label>
          <input
            type="text"
            className="border-b border-gray-500 outline-none w-[310px] md:w-[40%] bg-transparent md:pl-14"
            id="name"
          />
        </div>
        <div className="md:pt-5 pt-8">
          <label
            htmlFor="email"
            className=" text-gray-400 text-base tracking-wider absolute text-[14px] -mt-5 md:-mt-1"
          >
            EMAIL
          </label>
          <input
            type="text"
            className="border-b border-gray-500 outline-none w-[310px] md:w-[40%] bg-transparent md:pl-14"
            id="email"
          />
        </div>
        <div className="pt-16 ">
          <label
            htmlFor="message"
            className=" text-gray-400 text-base tracking-wider absolute text-[14px] -mt-6 md:-mt-1"
          >
            MESSAGE
          </label>
          <input
            type="text"
            className="border-b border-gray-500 outline-none w-[310px] md:w-[40%] bg-transparent md:pl-20"
            id="message"
          />
        </div>
        <div>
          <button
            className="md:w-24  w-36 md:h-10 h-11 md:text-[11px] text-[20px] mt-8 md:mt-16 font-bold md:font-extrabold border-[2px]
           border-[#0C1D39] bg-[#0C1D39] hover:bg-white hover:duration-700 text-white hover:text-bgblue tracking-[2px]"
          >
            SEND
          </button>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default ContactUs;
