import React from 'react';
import getin from '../../Assets/involved-img.webp';
import { IoIosArrowBack } from 'react-icons/io'

const GetInvolved = () => {
  return (
    <>
      <div className="w-full h-full mt-20 md:mt-28 lg:mt-44 md:px-0 px-5">
        <div className="md:flex lg:gap-12 md:gap-5">
          <div className='md:w-[55%]'><img src={getin} alt="" className='float-right' /></div>
          <div className="md:w-[45%]">
            <p className='text-[83px] font-playfire w-40 lg:mt-36'>Get involved.</p>
            <p className='md:text-[15px] text-[18px] w-[305px] lg:w-[410px] font-fontNunito mt-3'>Your contribution, no matter how much, helps us to continue empowering rural India through tech.</p>
            <p className='md:text-[15px] text-[18px] w-[287px] lg:w-[400px] font-fontNunito md:mt-6 mt-2'>Discover ways in which you can give and make a meaningful contribution towards our work.</p>
          </div>
        </div>
        {/* Donate */}
        {/* <div className="mt-20">
          <div className="flex justify-center">
            <div className="">
              <h1 className='lg:text-[28px] -ml-5'>DONATE</h1>
              <h1 className='font-fontgetDown text-[18px] mt-5'><b>Ways to give:</b></h1>
              <h1 className='lg:text-[16px] mt-5'>Gift</h1>
              <div className="">
                <p>If you would like to donate items such as laptops and services such as course memberships, please contact:</p>
                <div className="flex items-center">
                  <IoIosArrowBack />
                  <p className='flex justify-center items-center  -mt-1'>add details here, who donor can reach out to for making a wire transfer? </p>
                  <p></p>
                </div>
                <p></p>
                <p></p>
              </div>
            </div>
          </div>
        </div> */}
        {/* Footer site */}
        <div className="w-full h-[400px] bg-bgblue text-white">
          <p>We wish to express our heartfelt gratitude for your support of our efforts. </p>
        </div>
      </div>
    </>
  )
}

export default GetInvolved;