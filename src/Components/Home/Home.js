import React from 'react'
import Slider from './Slider/Slider'


const Home = () => {
  return (
    <>
      <div className='w-full h-full'>
        <div className='w-full'><Slider/></div>
        <div className='text-center'>
          <p className='  text-[#0C1D39] pt-7 font-[playfire] text-[85px]'>SUVAIDYAM</p>
          <p className='text-xl font text-[#0C1D39] -mt-7'>EMPOWERING RURAL INDIA THROUGH TECH</p>
        </div>
        {/* SUVAIDYAM DOWN */}
        <div className='flex w-full pt-10'>
          <div className='w-1/2 pl-[15%]'>
            <div className=' font-thin relative pt-3'>
              <p className='border-t-[1px] w-20 border-red-500'></p>
              <p className='text-sm font-thin absolute top-[2px] pl-24'>Bridging the technology gap</p>
            </div>
            <div className='pt-6 font-[playfire] text-3xl text-[#0C1D39]'>
              <p>
                Every individual deserves <br /> to reach their full <br /> potential and we want to <br /> make sure that happens
              </p>
            </div>
          </div>
          <div className='w-1/2'>
            <p className='text-lg font-thin '>
              Indian villages have the potential to serve as centres of advanced technology and innovation. Our primary objective is to empower rural India by revolutionising the way we teach and upskill its youth.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home