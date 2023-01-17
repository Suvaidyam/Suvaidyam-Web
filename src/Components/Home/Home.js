import React from 'react'
import Slider from './Slider/Slider'
import girlImg from '../../Assets/girls-img.webp'


const Home = () => {
  return (
    <>
      <div className='w-full h-full'>
        {/* imaze */}
        <div className='w-full'><Slider /></div>
        <div className='pl-6 md:text-center'>
          <p className='  text-bgblue pt-7 font-playfire md:text-[85px] text-[40px] '>SUVAIDYAM</p>
          <p className='text-sm md:text-xl text-bgblue md:-mt-5'>EMPOWERING RURAL INDIA THROUGH TECH</p>
        </div>
        {/* SUVAIDYAM DOWN */}
        <div className='block md:flex w-full md:pb-16 pb-4 pt-10 px-5 md:px-0 md:gap-20'>
          <div className='md:w-1/2 md:flex'>
            <div className='w-[50%] hidden md:block'></div>
            <div className='md:w-[50%]'>
              <div className=' md:flex items-center md:gap-5 '>
                <div><p className='border-t w-20 border-red-500 hidden md:block'></p></div>
                <div><p className='font-thin md:text-xs text-[16px] tracking-widest'>Bridging the technology gap</p></div>
              </div>
              <div className='md:pt-6 pt-2 font-[playfire] text-[27px] md:text-3xl w-full  text-bgblue'>
                <p>
                  Every individual deserves
                  to reach their full
                  potential and we want to
                  make sure that happens
                </p>
              </div>
            </div>
          </div>
          <div className='md:w-1/2 flex'>
            <div className='md:w-[70%] text-[17.5px] font-thin text-bgblue tracking-wide'>
              <p>
                Indian villages have the potential to serve as centres of advanced
                technology and innovation. Our primary objective is to empower rural
                India by revolutionising the way we teach and upskill its youth.
              </p>
              <p className='pt-6'>
                We are working towards removing the barriers that keep rural India out of
                the tech ecosystem. We want its youth to be able to dream big and chase opportunities in tech.
              </p>
              <p className='pt-6'>
                Our goal therefore is to provide easy access to technical infrastructure, education and opportunities
                to rural India and empower individuals, families, and in turn rural communities to thrive and grow.
              </p>
              <p className='underline md:text-xs md:mt-7 mt-2 tracking-widest'><a href="" >MORE ABOUT US</a></p>
            </div>
            <div className='w-[30%] hidden md:block'>
              {/*  */}
            </div>
          </div>
        </div>
        {/* SUVAIDYAM DOWN TO*/}
        <div className="w-full  block md:flex gap-24">
          <div className='md:w-[60%]'>
            <img src={girlImg} alt="girls imaze" />
          </div>
          <div className='md:w-[50%] text-center md:text-start px-4 flex'>
            <div className='md:w-[65%]'>
              <p className='font-extrabold md:text-[55px] text-[45px] tracking-[12px] text-bgblue pt-8'>WHY</p>
              <p className='font-bold text-bgblue pb-8 text-lg tracking-widest'>JOIN HANDS</p>
              <div className="text-[17.5px] font- text-bgblue tracking-wide">
                <p className=''>
                  Barriers such as lack of guidance, exposure,
                  infrastructure and resources prevent the youth
                  of rural India to dream of a career in the
                  technology space. Together we can break down
                  those barriers that are holding them back.
                </p>
                <p className='pt-5'>
                  Help us in bridging the gap that is keeping rural
                  India out of the life-changing tech industry.
                </p>
                <button className='md:w-40 w-44 md:h-12 h-10 text-[11px] md:mt-16 mt-7 font-extrabold border-[3px] border-[#0C1D39]
                hover:bg-[#0C1D39] hover:duration-700 hover:text-white tracking-widest'>GET INVOLVED</button>
              </div>
            </div>
          </div>
        </div>
        {/* SUVAIDYAM DOWN Three*/}
        <div className='md:flex justify-center h-[300px] gap-20 items-center'>
          <div>
            <p className='font-serif text-bgblue text-xl md:text-5xl'>
              Partner Organisations
            </p>
          </div>
          <div className='flex justify-center gap-4'>
            <div className='w-16 mt-4 border-black border-t'></div>
            <div className='font-thin text-xl hidden md:block tracking-wider'>LEADING IN THE INDUSTRY</div>
          </div>
        </div>
        {/* SUVAIDYAM DOWN four*/}
        <div className='h-[480px] w-full justify-center flex items-center bg-bgblue text-white'>
          <div className='text-center'>
            <div>
              <p className='text-[40px] font-thin tracking-wider '>A little guidance goes a long way...</p>
              {/* <p className='border-t-4 w-12 mt-5'></p> */}
            </div>
            <div className='mt-5 font-fontspar text-[17.5px]'>
              <p>We are empowering the youth of rural India to choose careers in the tech domain</p>
              <p>by providing them mentorship every step of the way.</p>
            </div>
            <div className='pt-5 font-fontspar text-[17.5px]'>
              <p>We are bringing technical infrastructure to our villages in order to make them self-</p>
              <p>sustained technology hubs so that our youth is not forced to migrate to cities to</p>
              <p>pursue rewarding careers.</p>
              <p className='mt-12 font-bold'>- Amresh Kumar, Founder</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home