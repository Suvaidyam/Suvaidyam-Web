import React from 'react'
import founder from "../../Assets/founder.webp";
import gyan from "../../Assets/Gyan Shahane.webp";
import vivek from "../../Assets/Vivek Kumar.webp";
import farhan from "../../Assets/Farhan Shaikh.webp";

const Teams = () => {
  return (
    <>
      {/* founder */}
      <div className='bg-bgblue lg:w-full lg:h-[700px] lg:flex lg:gap-20 mt-20 '>
        <div className='lg:w-[640px] md:w-full lg:flex lg:justify-end lg:mt-32 w-full'>
          <div className='lg:w-[395px] lg:mx-0 mx-7'>
            <p className='text-white lg:text-[40px] text-[32px] font-normal tracking-[3px]'>Amresh Kumar</p>
            <p className='text-white font-fontsans font-semibold text-[18px] lg:text-[13px] tracking-[3px] mt-3'>Founder</p>
            <p className='text-white mt-16 lg:text-base text-[22px] w-full'>I’m a paragraph. Use this space to tell people more about what you do and the services
              you offer. Double click here or click Edit Text to get started. Te about what you
              do and the services you offer. Double click here or click Edit Text to get started.</p>
            <p className='text-white mt-12 lg:text-base text-[22px] w-full'>
              I’m a paragraph. Use this space to tell people more about what you do and the services you offer.
              Double click here or click Edit Text to get started. I’m a para. Use this space to.
            </p>
          </div>
        </div>
        <div className='lg:bg-slate-200 lg:w-96 lg:h-[550px] lg:mt-32 lg:mx-0 mx-7 '>
          <div className='lg:w-[500px]'>
            <img src={founder} alt={founder} className='lg:mx-12 lg:-mt-16' />

          </div>
        </div>
      </div>
      {/* Team */}
      <div className='text-center mt-16'>
        <div className='font-fontNunito text-black font-bold opacity-90 tracking-[2px] '>
          <p className='text-[42px]'>TEAM</p>
          <p className='text-[42px] '>SUVAIDYAM</p>
        </div>
        <hr className='w-8 m-auto bg-black h-1 mt-7' />
      </div>
      {/*bottom rounded image */}
      <div className='lg:flex lg:justify-center mt-16'>
        <div className='lg:mx-14 '>
          <div className=''>
            <img src={gyan} alt='' className='rounded-full' />
            <div>
              <p className='text-center text-[21px] opacity-80 mt-4 lg:-ml-5'> Abc Defg</p>
              <p className='text-center text-blue-400 font-sans font-semibold text-[13px] tracking-[3px] mt-4'>Lorem Ipsum</p>
              <p className='lg:w-52 mt-12 font-thin'>I’m a paragraph. Double click me  or click Edit Text, it's easy.</p>
            </div>
          </div>
        </div>
        <div className='lg:mx-14 '>
          <div className='w-full'>
            <img src={vivek} alt='' className='rounded-full ' />
            <p className='text-center text-[21px] opacity-80 mt-4'>Zxydef Wei</p>
            <p className='text-center text-blue-400 font-sans font-semibold text-[13px] tracking-[3px] ml-5 mt-4'>Lorem Ipsum</p>
            <p className='lg:w-[240px] mt-12 font-thin'>I’m a paragraph. Double click me <span className='flex justify-center'> or click Edit Text, it's easy.</span></p>
          </div>
        </div>
        <div className='lg:mx-12 flex justify-center'>
          <div className='w-full'>
            <img src={farhan} alt='' className='rounded-full' />
            <p className='text-center text-[21px] opacity-80 mt-4'> Ancwsd Desn</p>
            <p className='text-center  text-blue-400 font-sans font-semibold text-[13px] tracking-[3px] mt-4'>Lorem Ipsum</p>
            <p className='lg:w-52 mt-12 font-thin'>I’m a paragraph. Double click  me  or click  Edit Text, it's easy.</p>
          </div>
        </div>
      </div>
      {/* team button */}
      <div className='w-full mt-20 flex justify-center'>
        <button className='outline-none  border-2 border-bgblue w-52 text-bgblue h-11 text-[11.3px] font-bold tracking-[2px] hover:bg-bgblue hover:text-white'>JOIN THE TEAM</button>
      </div>
    </>
  )
}

export default Teams