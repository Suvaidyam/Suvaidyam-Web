import React from 'react'
import founder from "../../Assets/founder.webp";
import gyan from "../../Assets/Gyan Shahane.webp";
import vivek from "../../Assets/Vivek Kumar.webp";
import farhan from "../../Assets/Farhan Shaikh.webp";

const Teams = () => {
  return (
    <>
      {/* founder */}
      <div className='bg-bgblue lg:w-full lg:h-[700px]  lg:flex md:flex lg:gap-20  mt-20 '>
        <div className='lg:w-[640px] md:w-full lg:flex lg:justify-end lg:mt-32 md:mt-20 w-full'>
          <div className='lg:w-[395px] md:w-[330px] lg:mx-0 mx-7'>
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
        <div className='lg:bg-slate-200 lg:w-96 lg:h-[550px] md:bg-slate-200 md:w-96 md:h-[550px] lg:mt-32 md:mt-20 lg:mx-0 mx-7 '>
          <div className='lg:w-[500px] md:w-[400px]'>
            <img src={founder} alt={founder} className='lg:mx-12 lg:-mt-16 md:-mt-3' />
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
      <div className='lg:flex lg:justify-center md:flex md:justify-center mt-16'>
        <div className='lg:mx-14  md:mx-8'>
          <div className='flex justify-center md:mt-14 lg:mt-0'>
            <img src={gyan} alt='' className='rounded-full flex justify-center ' />
          </div>
          <div>
            <p className='text-center text-[21px] opacity-80 mt-4 lg:-ml-5'> Abc Defg</p>
            <p className='text-center text-blue-400 font-sans font-semibold text-[13px] tracking-[3px] mt-4'>Lorem Ipsum</p>
            <div className='flex justify-center mt-4'>
            <p className='w-52 lg:mt-12 font-thin'>I’m a paragraph. Double click me  or click Edit Text, it's easy.</p>
            </div>
          </div>
        </div>
        <div className='lg:mx-14 md:mx-8'>
          <div className='w-full'>
            <div className='flex justify-center lg:mt-0 mt-14'>
              <img src={vivek} alt='' className='rounded-full ' />
            </div>
            <p className='text-center text-[21px] opacity-80 mt-4'>Zxydef Wei</p>
            <p className='text-center text-blue-400 font-sans font-semibold text-[13px] tracking-[3px] ml-5 mt-4'>Lorem Ipsum</p>
            <div className='flex justify-center mt-4'>
            <p className='w-[240px] lg:mt-12 font-thin'>I’m a paragraph. Double click me <span className='lg:flex justify-center'> or click Edit Text, it's easy.</span></p>

            </div>
          </div>
        </div>
        <div className='lg:mx-12 md:mx-8 '>
          <div className='w-full'>
            <div className='flex justify-center lg:mt-0 mt-14'>
              <img src={farhan} alt='' className='rounded-full' />
            </div>
            <p className='text-center text-[21px] opacity-80 mt-4'> Ancwsd Desn</p>
            <p className='text-center  text-blue-400 font-sans font-semibold text-[13px] tracking-[3px] mt-4'>Lorem Ipsum</p>
            <div className='flex justify-center mt-4'>
              <p className='w-52 lg:mt-12 font-thin '>I’m a paragraph. Double click  me  or click  Edit Text, it's easy.</p>
            </div>
          </div>
        </div>
      </div>
      {/* team button */}
      <div className='w-full mt-20 flex justify-center'>
        <button className='outline-none duration-500  border-2 border-bgblue w-52 text-bgblue h-10 text-[11.4px] font-bold tracking-[2px] hover:bg-bgblue hover:text-white'>JOIN THE TEAM</button>
      </div>
    </>
  )
}

export default Teams