import React from 'react';
import getin from '../../Assets/involved-img.webp';
import soon from '../../Assets/comming.avif';

const GetInvolved = () => {
  // const insi = [
  //   {
  //     pre: "<add details here, who donor can reach out to for making a wire transfer?",
  //     pre1: ">",
  //     pre2: "Please make your cheque payable to <add cheque receiver name here> and mail to:",
  //     pre3: "<add mailing address here>",
  //     pre4: "working in various domains​. To volunteer at Suvaidyam, reach out to us on <insert email here>.",
  //     id: 1
  //   },
  // ]
  return (
    <>
      <div className="w-full h-full mt-20 md:mt-28 lg:mt-44 md:px-0 px-5">
        <div className="md:flex lg:gap-12 md:gap-5">
          <div className='md:w-[55%]'><img src={getin} alt="" className='float-right' /></div>
          <div className="md:w-[45%]">
            <p className='md:text-[83px] text-[60px] font-playfire w-40 lg:mt-36'>Get involved.</p>
            <p className='md:text-[15px] text-[18px] w-[305px] lg:w-[410px] font-fontNunito mt-3'>
              Your contribution, no matter how much, helps us to continue empowering rural India through tech.</p>
            <p className='md:text-[15px] text-[18px] w-[287px] lg:w-[400px] font-fontNunito md:mt-6 mt-2'>Discover ways in which you can give and make a meaningful contribution towards our work.</p>
          </div>
        </div>
        {/* Donate */}
        <div className="flex justify-start md:ml-64 mt-20">
          {/* {insi.map(e => ( */}
          <div className="md:mx-20">
            <div className="">
              <h1 className='text-[28px] md:-ml-5'>DONATE</h1>
              <img src={soon} alt="" className='w-56' />
            </div>
            {/* Fourth part */}
            {/* <div className="">
              <h1 className='text-[24px] md:-ml-7 mt-10 mb-5 tracking-wider'>VOLUNTEER</h1>
              <div className="font-thin md:text-[14.5px] text-[16px]">
                <p>Volunteering with us allows you to work directly with students giving them the opportunity to learn from individuals</p>
                <p>{e.pre4}</p>
              </div>
            </div> */}
            {/* Fifth part */}
            {/* <div className="">
              <h1 className='md:text-[25px] text-[23px] md:-ml-7 mt-10 mb-5 tracking-wider'>BE OUR CHEERLEADER</h1>
              <div className="font-thin md:text-[14.5px] text-[16px]">
                <p>Help us spread the word.</p>
              </div>
            </div> */}
          </div>
          {/* ))} */}
        </div>
      </div>
      {/* Footer site */}
      <div className="w-full  bg-bgblue text-white mt-20 flex justify-center">
        <div className="">
          <p className='text-[35px] mt-20 font-fontgetDown tracking-[0.5px] px-5 text-center md:max-w-[850px]  '>We wish to express our heartfelt gratitude for your support of our efforts. </p>
          <p className='border-[1.5px] md:mx-[47.5%] mx-[43%] mt-4 mb-20'></p>
        </div>
      </div>
    </>
  )
}

export default GetInvolved;