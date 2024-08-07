import React, { useEffect } from "react";
// import Slider from "./Slider/Slider";
import group from "../../Assets/group.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import dhwaniImg from "../../Assets/DhwaniRIS.png"
import Aircom from "../../Assets/capital.jpeg"
import Slider from "./carousel/Salider";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  const PartnerOrg = [
    {
      url: dhwaniImg,
      id: 1,
      link: "https://dhwaniris.com"
    },
    {
      url: Aircom,
      id: 2,
      link: "https://www.capitalaircom.com"
    }
  ]

  return (
    <>
      <div className="w-full h-full max-w-[1800px] mx-auto">
        {/* imaze */}
        <div className="w-full mt-20"><Slider /></div>
        <div className="pl-6 md:text-center">
          <p
            className="  text-bgblue pt-7 font-playfire md:text-[85px] text-[40px] "
          // data-aos="fade-up"
          >
            SUVAIDYAM
          </p>
          <p
            className="text-sm md:text-xl text-bgblue md:-mt-5"
            data-aos="fade-right"
          >
            {/* EMPOWERING RURAL INDIA THROUGH TECH */}
          </p>
        </div>
        {/* SUVAIDYAM DOWN */}
        <div className='block md:flex w-full pb-4 pt-10 px-6 md:pb-16 md:px-5 md:gap-10 lg:gap-24 '>
          <div className='md:w-1/2 md:flex justify-end'>
            <div className='lg:w-[365px]'>
              <div className=' md:flex items-center md:gap-5 '>
                <div><p className='border-t w-20 border-red-500 hidden md:block' data-aos="fade-right"></p></div>
                <div><p className='font-thin md:text-xs text-[16px] tracking-widest'>Bridging the technology gap</p></div>
              </div>
              <div className="md:pt-6 pt-2 font-[playfire] text-[27px] lg:text-[35px] md:text-3xl w-full  text-bgblue">
                <p>
                  Every individual deserves to reach their full potential and we
                  want to make sure that happens
                </p>
              </div>
            </div>
          </div>
          <div className='md:w-1/2 flex'>
            <div className='lg:w-[410px] md:text-[17.5px] text-[20px] font-fontserif text-black tracking-wide'>
              <p>
                Indian villages have the potential to serve as centres of
                advanced technology and innovation. Our primary objective is to
                empower rural India by revolutionising the way we teach and
                upskill its youth.
              </p>
              <p className="pt-6">
                We are working towards removing the barriers that keep rural
                India out of the tech ecosystem. We want its youth to be able to
                dream big and chase opportunities in tech.
              </p>
              <p className="pt-6">
                Our goal therefore is to provide easy access to technical
                infrastructure, education and opportunities to rural India and
                empower individuals, families, and in turn rural communities to
                thrive and grow.
              </p>
              <p className='underline md:text-xs text-[17px] md:text-[14.2px] md:mt-7 mt-2 tracking-widest'><Link to=''>MORE ABOUT US</Link></p>
            </div>
          </div>
        </div>
        {/* SUVAIDYAM DOWN TO*/}
        <div className="w-full  block  lg:flex md:gap-10 lg:gap-6">
          <div className="lg:w-[50%] ld:w-[50%]">
            <img src={group} className='md:h-[580px] w-full' alt="girls imaze" />
          </div>
          <div className='lg:w-[50%] md:text-start text-center px-6'>
            <div className='lg:pl-16 md:text-center lg:text-start'>
              <p className='font-extrabold md:text-[55px] text-[45px] tracking-[12px] text-bgblue pt-8'>WHY</p>
              <p className='font-bold text-bgblue pb-8 text-lg tracking-widest'>JOIN HANDS</p>
              <div className="md:text-[18px] lg:w-[365px] md:px-32 lg:px-0 text-[18px] font-fontserif
              text-bgblue tracking-wide">
                <p>
                  Barriers such as lack of guidance, exposure,
                  infrastructure and resources prevent the youth
                  of rural India to dream of a career in the
                  technology space. Together we can break down
                  those barriers that are holding them back.
                </p>
                <p className="pt-5">
                  Help us in bridging the gap that is keeping rural India out of
                  the life-changing tech industry.
                </p>
              </div>
              <Link to='/involved'>
                <button
                  className="md:w-40 w-48 lg:text-[12px] md:text-[11px] text-[15px] md:h-12 h-12 md:mt-16 mt-7
                  font-bold md:border-[2px] border-[3px] border-bgblue hover:bg-bgblue duration-700 text-bgblue
                      hover:text-white md:tracking-widest tracking-[3px]"
                >
                  GET INVOLVED
                </button>
              </Link>

            </div>
          </div>
        </div>
        {/* SUVAIDYAM DOWN Three*/}
        <div className="flex justify-center">
          <div className="w-full md:flex justify-between px-6 max-w-[1230px]  lg:px-24 xl:px-48 items-center mt-20">
            <div>
              <p className="font-serif text-bgblue text-[29px] lg:text-5xl md:text-[36px]">
                Partner Organizations
              </p>
            </div>
            <div className='flex md:justify-center md:gap-4'>
              <div className='md:w-16 w-9 mt-4 border-gray-500 md:border-t border-t-2'></div>
              <div className='font-thin text-[18px] hidden md:block tracking-wider'>LEADING IN THE INDUSTRY</div>
            </div>
          </div>
        </div>
        {/* svg */}
        <section>
          <div className="w-full h-auto md:h-40 px-6  lg:px-24 xl:px-48 mt-6 md:mt-2 mb-10 flex justify-center">
            <div className="w-full h-full flex gap-8 md:gap-10 max-w-[850px] flex-wrap items-center ">
              {PartnerOrg.map(e => (
                // <div className="w-36 min-w-[128px] aspect-ratio" key={e.id}>
                //   <img src={e.url} alt="Partner Logo" />
                // </div>
                <div className="logo" key={e.id}>
                  <a href={e.link} target="_blank" rel='noreferrer'><img src={e.url} className="w-full h-full" alt="Partner Logo" /></a>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* SUVAIDYAM DOWN four*/}
        <div className='md:h-[480px] w-full py-10  justify-center flex items-center px-6 text-center bg-bgblue text-white'>
          <div>
            <p className='md:text-[38px] text-[29px] font-thin tracking-wider'>A little guidance goes a long way...</p>
            <p className='border-t-4  mt-5 md:mx-[46.5%] mx-[43%]'></p>
            <div className='mt-5 font-fontspar text-[17.5px]'>
              <p>We are empowering the youth of rural India to choose careers in the tech domain</p>
              <p>by providing them mentorship every step of the way.</p>
            </div>
            <div className="pt-5 font-fontspar text-[17.5px]">
              <p>
                We are bringing technical infrastructure to our villages in
                order to make them self-
              </p>
              <p>
                sustained technology hubs so that our youth is not forced to
                migrate to cities to
              </p>
              <p>pursue rewarding careers.</p>
              <p className='mt-12 font-bold tracking-widest'>- Amresh Kumar, Founder</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;