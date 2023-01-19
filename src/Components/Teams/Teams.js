import React from 'react'
import founder from "../../Assets/founder.webp";
import gyan from "../../Assets/Gyan Shahane.webp";
import vivek from "../../Assets/Vivek Kumar.webp";
import farhan from "../../Assets/Farhan Shaikh.webp";

const Teams = () => {
  return (
    <>
      {/* founder */}
      <div className="w-full lg:h-[756px] h-auto bg-bgblue px-8 lg:px-24 xl:px-56 mt-20 py-12 lg:py-0">
        <div className="w-full h-full  flex lg:flex-row flex-col">
          <div className="w-full lg:w-1/2 h-full flex flex-col justify-center gap-16 order-2 lg:order-1">
            <div className="flex flex-col gap-4 ">
              <p className='text-white lg:text-[40px] text-[32px] font-normal tracking-[3px] md:text-5xl'>Amresh Kumar</p>
              <p className='text-white font-fontsans font-semibold text-[18px] lg:text-[13px] tracking-[3px] md:text-4xl'>Founder</p>
            </div>
            <div className=" pr-4">
              <p className='text-white lg:text-base md:text-[45px]'>I’m a paragraph. Use this space to tell people more about what you do and the services
                you offer. Double click here or click Edit Text to get started. Te about what you
                do and the services you offer. Double click here or click Edit Text to get started.</p>
            </div>
            <div className="pr-4">
              <p className='text-white lg:text-base md:text-[45px] '>
                I’m a paragraph. Use this space to tell people more about what you do and the services you offer.
                Double click here or click Edit Text to get started. I’m a para. Use this space to.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-full flex items-end order-1 lg:order-2">
            <div className="w-full lg:w-[95%] h-[73%] bg-white mb-4 ml-0 lg:ml-8 relative z-10">
              <div className="w-full h-full relative lg:absolute lg:left-14 lg:bottom-14"><img className='w-full' src={founder} alt="" /></div>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className='text-center mt-16'>
        <div className='font-fontNunito text-black font-bold opacity-90 tracking-[2px] '>
          <p className='lg:text-[42px] md:text-7xl'>TEAM</p>
          <p className='lg:text-[42px] md:text-7xl md:mt-5 '>SUVAIDYAM</p>
        </div>
        <hr className='w-8 m-auto bg-black h-1 mt-7' />
      </div>
      {/*bottom rounded image */}
      <div className='lg:flex lg:justify-center  mt-16'>
        <div className='lg:mx-14  md:mx-8'>
          <div className='flex justify-center md:mt-10 lg:mt-0'>
            <img src={gyan} alt='' className='rounded-full flex justify-center lg:w-full md:w-[500px] bg-cover ' />
          </div>
          <div>
            <p className='text-center lg:text-[21px] opacity-80 mt-4 lg:-ml-5 md:text-6xl text-3xl'> Abc Defg</p>
            <p className='text-center md:text-3xl text-blue-400 font-sans font-semibold text-[16px] lg:text-[13px] tracking-[3px] mt-4'>Lorem Ipsum</p>
            <div className='flex justify-center mt-4'>
              <p className='lg:w-52 w-52 lg:mt-6 font-thin lg:text-base text-[17px] lg:mx-0 md:mx-32 md:w-fit  md:text-4xl'>I’m a paragraph. Double click me  or click Edit Text, it's easy.</p>
            </div>
          </div>
        </div>
        <div className='lg:mx-14 md:mx-8'>
          <div className='w-full'>
            <div className='flex justify-center lg:mt-0 mt-14 '>
              <img src={vivek} alt='' className='rounded-full lg:w-fit md:w-[500px] bg-cover' />
            </div>
            <p className='text-center lg:text-[21px] opacity-80 mt-4 md:text-6xl text-3xl'>Zxydef Wei</p>
            <p className='text-center text-blue-400 font-sans font-semibold text-[13px] tracking-[3px] ml-5 mt-4'>Lorem Ipsum</p>
            <div className='flex justify-center mt-4'>
              <p className='lg:w-[240px] w-[240px]  lg:mx-0 md:mx-32 md:w-fit  md:text-4xl lg:mt-6 font-thin lg:text-base text-[17px]'>I’m a paragraph. Double click me <span className='flex justify-center'> or click Edit Text, it's easy.</span></p>

            </div>
          </div>
        </div>
        <div className='lg:mx-12 md:mx-8 '>
          <div className='w-full'>
            <div className='flex justify-center lg:mt-0 mt-14'>
              <img src={farhan} alt='' className='rounded-full lg:w-full md:w-[500px] bg-cover' />
            </div>
            <p className='text-center lg:text-[21px] opacity-80 mt-4 text-3xl md:text-6xl'> Ancwsd Desn</p>
            <p className='text-center  text-blue-400 font-sans font-semibold text-[13px] tracking-[3px] mt-4'>Lorem Ipsum</p>
            <div className='flex justify-center mt-4'>
              <p className='lg:w-52 w-52  lg:mx-0 md:mx-32 md:w-fit  md:text-4xl lg:mt-6 font-thin lg:text-base text-[17px] '>I’m a paragraph. Double click  me  or click  Edit Text, it's easy.</p>
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