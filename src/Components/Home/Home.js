import React from 'react'
import Slider from './Slider/Slider'
import girlImg from '../../Assets/girls-img.webp'


const Home = () => {
  return (
    <>
      <div className='w-full h-full'>
        <div className='w-full'><Slider /></div>
        <div className='text-center'>
          <p className='  text-bgblue pt-7 font-playfire md:text-[85px] text-[40px] '>SUVAIDYAM</p>
          <p className='text-xl text-bgblue -mt-5'>EMPOWERING RURAL INDIA THROUGH TECH</p>
        </div>
        {/* SUVAIDYAM DOWN */}
        <div className='block md:flex w-full pb-16 pt-10'>
          <div className='w-1/2 flex justify-center '>
            <div className=' flex relative pt-3 '>
              <span className='border-t w-20 border-red-500'></span>
              <span className='text-sm w-full font-thin absolute top-[2px] pl-24 tracking-wide'>Bridging the technology gap</span>
            </div>
            <div className='pt-6 font-[playfire] text-3xl  text-bgblue'>
              <p>
                Every individual deserves <br />
                to reach their full <br />
                potential and we want to <br />
                make sure that happens
              </p>
            </div>
          </div>
          <div className='w-1/2 flex'>
            <div className='w-[70%] text-[17.5px] font-thin text-bgblue tracking-wide'>
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
              <p className='underline text-xs mt-7 tracking-widest'><a href="" >MORE ABOUT US</a></p>
            </div>
            <div className='w-[30%]'>
              {/*  */}
            </div>
          </div>
        </div>
        {/* SUVAIDYAM DOWN TO*/}
        <div className="w-full  block md:flex">
          <div className='w-1/2'>
            <img src={girlImg} alt="girls imaze" />
          </div>
          <div className='w-1/2 flex'>
            <div className='w-[18%]'></div>
            <div className='w-[55%]'>
              <p className='font-extrabold text-[55px] tracking-[12px] text-bgblue pt-8'>WHY</p>
              <p className='font-bold text-bgblue tracking-widest'>JOIN HANDS</p>
              <div className="text-[17.5px] font-thin text-bgblue tracking-wide">
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
                <button className='w-40 h-12 text-[11px] mt-20 font-extrabold border-[2px] border-[#0C1D39]
                hover:bg-[#0C1D39] hover:duration-700 hover:text-white tracking-widest'>GET INVOLVED</button>
              </div>
            </div>
          </div>
        </div>
        {/* SUVAIDYAM DOWN Three*/}
        <div className='flex justify-center h-[300px] gap-20 items-center'>
          <div>
            <p className='font-serif text-bgblue text-5xl'>
              Partner Organisations
            </p>
          </div>
          <div className='flex justify-center gap-4'>
            <div className='w-16 mt-4 border-black border-t'></div>
            <div className='font-thin text-xl tracking-wider'>LEADING IN THE INDUSTRY</div>
          </div>
        </div>
        {/* SUVAIDYAM DOWN four*/}
        <div className='h-[480px] w-full justify-center flex items-center bg-bgblue text-white'>
          <div className='text-center'>
            <div>
            <p className='text-[40px] font-thin tracking-wider '>A little guidance goes a long way...</p>
            {/* <p className='border-t-4 w-12 mt-5'></p> */}
            </div>
            <div className='mt-5 font-light'>
                <p>We are empowering the youth of rural India to choose careers in the tech domain</p>
                <p>by providing them mentorship every step of the way.</p>
            </div>
            <div className='pt-5 font-thin'>
              <p>We are bringing technical infrastructure to our villages in order to make them self-</p>
              <p>sustained technology hubs so that our youth is not forced to migrate to cities to</p>
              <p>sustained technology hubs so that our youth is not forced to migrate to cities to</p>
              <p className='mt-12 font-bold'>- Amresh Kumar, Founder</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home