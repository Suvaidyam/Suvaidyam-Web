import React from 'react'
import hand from '../../Assets/hand-img-.webp'
import girl from '../../Assets/girls-img.webp'
import { Card } from './Card'
import { Image } from './Image'


const AboutUs = () => {
  return (
    <>
      <div className='w-full  lg:flex lg:flex-row flex-col'>
        {/* img */}
        <div><img src={hand} alt="hand-img" className='w-[700px] h-[660px] bg-no-repeat' /></div>
        {/* our mission */}
        <div className='bg-[#0C1D39] w-[700px] h-[660px] lg:flex justify-end items-center'>
          <div className='w-[360px]'>
            <p className='text-white text-7xl '>OUR</p>
            <p className='text-white text-7xl mt-5'>MISSION</p>
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
      <div className='flex justify-center mt-14'>
        <div>
          <p className='text-4xl text-black font-thin'>THE VISION </p>
          <p className='bg-black w-11 h-[3px] m-auto mt-8'></p>
        </div>
      </div>
      {/* paragraph */}
      <div className='w-full'>
        <p className=' text-gray-600 mt-7 text-center font-[sans] text-md'>
          Our vision is to empower the rural youth and make them reach their full potential.
          We want to uplift rural India by educating its young
          adults in <br />
          computer technology and creating opportunities for them to create and define their own success.
        </p>
      </div>
      {/* who we are */}
      <div className='bg-green-100 w-full mt-16 lg:flex justify-end '>
        <div className='lg:w-[460px] my-10 mb-10'>
          <h1 className='text-2xl'>WHO WE ARE</h1>
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
        <div className='w-[700px]'>
          <img src={girl} alt="" className='w-[590px] h-[350px] -mt-6 lg:px-10' />
        </div>
      </div>
      
      {/* Card components */}
      <Card />
      {/* IMAGE Components */}
      <Image/>
    </>

  )
}
export default AboutUs;