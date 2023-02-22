import React from "react";
import hand from "../../Assets/hand-img-.webp";
import girl from "../../Assets/girls-img.webp";
import { Card } from "./Card";
import CardSlider from "./CardSlider";

const AboutUs = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className="w-full  lg:flex lg:flex-row flex-col mt-20">
          {/* img */}
          <div>
            <img
              src={hand}
              alt="hand-img"
              className="w-full md:h-[500px] h-[230px]  lg:bg-contain lg:w-[700px] lg:h-[740px] sm:h-96 bg-no-repeat"
            />
          </div>
          {/* our mission */}
          <div className="bg-[#0C1D39] lg:w-[700px] lg:h-[740px] lg:flex  w-full">
            <div className="lg:w-[370px]  mx-6 lg:ml-24 md:mx-14 lg:pt-14 lg:pb-0 pb-5  ">
              <p className="text-white lg:pt-0 pt-5 text-[54px] lg:text-7xl md:text-5xl ">
                OUR
              </p>
              <p className="text-white md:mt-4 text-[54px] lg:text-7xl md:text-5xl lg:mt-5">
                MISSION
              </p>
              <p className="text-white text-thin lg:text-[16px] text-xl lg:mt-12 mt-6">
                At Suvaidyam, we are working for a world where the rural youth
                will be able to choose a career in technology and escape menial
                jobs they are forced to pick up because of lack of opportunities
                and exposure in rural India.
              </p>
              <p className="text-white text-thin lg:text-[16px] text-xl mt-6">
                We are working in regions where most children don't have easy
                access to computer education growing up. Through our digital
                programs, we are providing them the knowledge, practical skills
                and deeper understanding of all aspects of computer technology.
              </p>
              <p className="text-white lg:text-base text-xl w-full mt-16  md:text-2xl">
                - Amresh Kumar, Founder
              </p>
            </div>
          </div>
        </div>

        {/* The vision */}
        <div className="flex justify-center lg:mt-14">
          <div className="lg:mt-0 mt-7">
            <p className="lg:text-4xl text-bgblue font-thin text-3xl">
              THE VISION
            </p>
            <p className="bg-bgblue w-12 h-[3px] m-auto lg:mt-8 font-semibold mt-5"></p>
          </div>
        </div>
        {/* paragraph */}
        <div className="lg:w-full lg:ml-0 ml-7 lg:mx-0 lg:px-7 xl:px-0 mx-7 ">
          <p className=" font-light mt-7 lg:text-center lg:font-fontspar  md:mx-2 text-[19px] lg:text-[17px] xl:px-40">
            Our vision is to empower the rural youth and make them reach their
            full potential. We want to uplift rural India by educating its young
            adults in
            computer technology and creating opportunities for them to create and
            define their own success.
          </p>
        </div>
        {/* who we are */}
        <div className="bg-[#eaf4f6]   lg:mx-0  md:mt-16 lg:flex  mx-7 ">
          <div className="lg:w-1/2 xl:pl-44 my-10 mb-8 lg:mx-10 xl:mx-0 mx-4  ">
            <h1 className="text-2xl text-bgblue  lg:px-0 p-3">WHO WE ARE</h1>
            <div>
              <p className="my-7 font-fontspar lg:text-[18px] text-xl">
                Amresh Kumar founded Suvaidyam in the summer of 2021 with the aim to
                unleash the full potential of the young adults born and brought up
                in Indian villages.
              </p>
            </div>
            <div>
              <p className="font-fontspar lg:text-[17px]  text-xl">
                Together Team Suvaidyam is creating opportunities for the rural
                youth in the tech industry. From teaching them how to write code to
                providing them hands on practical skills, Team Suvaidyam is making
                sure that these young adults feel confident and qualified for
                pursuing a variety of technology-focused careers.
              </p>
            </div>
          </div>
          <div className=" xl:w-1/2 lg:px-5">
            <img
              src={girl}
              alt=""
              className="lg:w-[510px] lg:h-[360px] w-full h-full lg:-mt-4 xl:mx-8  bg-cover" />
          </div>
        </div>
        {/* Card components */}
        <div className="w-full">
          <Card />
        </div>
        {/* Slider Components */}
        <div className="w-full mt-10">
          <CardSlider />
          {/* <MobileCarousel/> */}
        </div>
      </div>
    </>
  );
};
export default AboutUs;
