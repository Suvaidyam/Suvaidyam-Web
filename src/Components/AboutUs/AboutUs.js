import React from "react";
import hand from "../../Assets/hand-img-.webp";
import { Card } from "./Card";
import CardSlider from "./CardSlider";
import founder from "../../Assets/founder.webp";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <>
      <div className="w-full h-full max-w-[1800px] mx-auto">
        {/* our mission */}
        <div className="w-full flex lg:flex-row flex-col mt-20">
          <div className="lg:w-1/2">
            <div>
              <img
                src={hand}
                alt="hand-img"
                className="w-full lg:h-[720px] md:h-[500px]  bg-cover h-[235px]"
              />
            </div>
          </div>
          <div className="lg:w-1/2 lg:h-[720px] bg-bgblue lg:flex lg:justify-center">
            <div className="lg:w-[370px]  mx-6 lg:ml-3 md:mx-14 lg:pt-14 lg:pb-0 pb-5  ">
              <p className="text-white lg:pt-0 pt-5 text-[50px] lg:text-7xl md:text-4xl ">
                OUR
              </p>
              <p className="text-white md:mt-4 text-[50px] lg:text-7xl md:text-4xl lg:mt-5">
                MISSION
              </p>
              <p className="text-white  text-thin lg:text-[16px] text-[17.5px] lg:mt-12 mt-6">
                At Suvaidyam, we are working for a world where the rural youth
                will be able to choose a career in technology and escape menial
                jobs they are forced to pick up because of lack of opportunities
                and exposure in rural India.
              </p>
              <p className="text-white text-thin lg:text-[16px] text-[17.5px] mt-10">
                We are working in regions where most children don't have easy
                access to computer education growing up. Through our digital
                programs, we are providing them the knowledge, practical skills
                and deeper understanding of all aspects of computer technology.
              </p>
              <p className="text-white lg:text-base text-[17.7px] w-full mt-16  md:text-[17.5px]">
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
          <p className=" font-light mt-7 lg:text-center lg:font-fontspar  md:mx-2 text-[17.7px] lg:text-[16px] xl:px-48">
            Our vision is to empower the rural youth and make them reach their
            full potential. We want to uplift rural India by educating its young
            adults in
            computer technology and creating opportunities for them to create and
            define their own success.
          </p>
        </div>
        {/* who we are */}
        <div className="w-full  xl:h-[600px] lg:h-[530px] md:h-auto  h-full lg:pb-0 pb-[40px] md:pb-0 bg-bgblue lg:mt-20 mt-5">
          <div className="w-full flex lg:flex-row flex-col">
            <div className="lg:w-1/2  lg:order-1 order-2 sm:text-start text-center xl:h-96 md:h-72 lg:h-72 text-[#ffff] lg:mt-32 mt-8 font-extralight">
              <div className="xl:ml-52 lg:ml-20  md:mx-10 lg:mx-0 mx-7    md:w-fit sm:w-fit">
                <h1 className="lg:text-4xl lg:block hidden text-3xl  font-semibold tracking-wider text-center lg:text-start">Who We Are</h1>
                <p className="lg:mt-16 font-extralight"><span className="lg:text-2xl lg:ml-0 ml-5 md:ml-0 text-3xl my-2 font-[400]">Amresh Kumar</span> <span className="tracking-[1px] font-[400] lg:text-sm text-[16.5px]">founded Suvaidyam in the summer of 2020 with the aim to unleash the full potential of the young adults born and brought up  in Indian villages.</span> </p>
                <p className="my-5 font-[400] lg:text-sm tracking-wider text-[16.8px]">
                  Together Team Suvaidyam is creating opportunities for the rural youth in  the tech industry.</p>
                <p className="font-[400]  lg:text-sm tracking-wider text-[16.8px]">
                  From teaching them how to write code to providing them hands on practical skills, Team Suvaidyam is making sure that these young adults feel confident and qualified for pursuing a variety of technology-focused careers.</p>
              </div>
            </div>
            <div className="lg:w-1/2  lg:order-2 order-1">
              <h1 className=" lg:hidden block text-white  text-3xl my-5 font-semibold tracking-wider text-center ">Who We Are</h1>
              <div className="lg:w-[60%] lg:h-full lg:bg-white lg:ml-12 lg:mt-16 relative">
                <div className="w-full lg:absolute  lg:ml-12 lg:-mt-10  lg:px-0 px-6">
                  <img
                    data-aos="fade-right"
                    className="w-full h-full md:px-10 lg:px-0"
                    src={founder}
                    alt=""
                  />
                </div>
              </div>
            </div>
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
