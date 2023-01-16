import React from 'react'
import hand from '../../Assets/hand-img-.webp'
import girl from '../../Assets/girls-img.webp'
import { Card } from './Card'
import { Image } from './Image'


const AboutUs = () => {
  return (
    <>
      <div className='lg:w-full  lg:flex lg:flex-row flex-col'>
        {/* img */}
        <div><img src={hand} alt="hand-img" className='w-full h-[215px]  bg-contain lg:w-[700px] lg:h-[660px] bg-no-repeat' /></div>
        {/* our mission */}
        <div className='bg-[#0C1D39] lg:w-[700px] lg:h-[660px] lg:flex justify-end w-[360px]'>
          <div className='lg:w-[360px] lg:mx-0 ml-7 w-[250px] pt-7 h-[660px] '>
            <p className='text-white   text-[45px] lg:text-7xl '>OUR</p>
            <p className='text-white  text-5xl lg:text-7xl lg:mt-5'>MISSION</p>
            <p className='text-white mt-12'>At Suvaidyam, we are working for a world where the rural youth will be
              able to choose a career in technology and escape menial
              jobs they are forced to pick up because of lack of opportunities and exposure in rural India.</p>
            <p className='text-white mt-7'>
              We are working in regions where most children don't have easy access to
              computer education growing up. Through our digital programs, we are
              providing them the knowledge, practical skills and deeper understanding
              of all aspects of computer technology.
            </p>
            <p className='text-white mt-8'>- Amresh Kumar, Founder</p>
          </div>
          <div className='w-[220px]'></div>
        </div>
      </div>

      {/* The vision */}
      <div className='flex justify-center lg:mt-14'>
        <div className='lg:mt-0 mt-7'>
          <p className='lg:text-4xl text-bgblue opacity-90 lg:font-thin text-2xl'>THE VISION </p>
          <p className='bg-bgblue w-11 h-[3px] m-auto lg:mt-8 font-semibold mt-5'></p>
        </div>
      </div>
      {/* paragraph */}
      <div className='lg:w-full lg:ml-0 ml-7 w-[300px]'>
        <p className=' text-gray-600 mt-7 text-center  text-md'>
          Our vision is to empower the rural youth and make them reach their full potential.
          We want to uplift rural India by educating its young adults in
          <p></p>
          computer technology and creating opportunities for them to create and define their own success.
        </p>
      </div>
      {/* who we are */}
      <div className='bg-slate-100  lg:w-full w-[308px] lg:mt-16 lg:flex lg:justify-end lg:ml-0 ml-7  '>
        <div className='lg:w-[460px] my-10 mb-10 lg:mx-0 mx-4'>
          <h1 className='text-2xl text-bgblue lg:px-0 p-3'>WHO WE ARE</h1>
          <p className='my-7'>Amresh Kumar founded Suvaidyam in the summer of 20__ with the aim
            to unleash the full potential of the young adults born and brought up in Indian villages.
          </p>
          <p>
            Together Team Suvaidyam is creating opportunities for the rural youth in the tech industry.
            From teaching them how to write code to providing them hands on practical skills,
            Team Suvaidyam is making sure that these young adults feel confident and qualified
            for pursuing a variety of technology-focused careers.
          </p>
        </div>
        <div className='lg:w-[700px]'>
          <img src={girl} alt="" className='lg:w-[590px] lg:h-[350px] lg:-mt-6 lg:px-10' />
        </div>
      </div>

      {/* Card components */}
      <Card />
      {/* IMAGE Components */}
      <Image />
    </>

  )
}
export default AboutUs;