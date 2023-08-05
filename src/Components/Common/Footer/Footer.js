import React from 'react'
import { Link } from 'react-router-dom'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { ImLinkedin2 } from 'react-icons/im'
import { VscArrowUp } from 'react-icons/vsc'

const Footer = () => {
  function scrollWin() {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <div className="w-full mt-auto">
        {/* footer */}
        <div className="md:flex justify-center">
          <div className="">
            <div className="lg:ml-6">
              <div className="w-full max-w-[1720px] mx-auto h-auto md:h-96 px-6 md:px-4 lg:px-24 xl:px-48 ">
                <div className="w-full h-full py-12">
                  <div className="w-full h-auto md:h-1/2 flex flex-col gap-4 justify-between">
                    <div className="">
                      <h1 className='text-[40px] md:text-[46px] font-playfire'>SUPPORT US</h1>
                      <div className=" relative w-[268px] flex justify-end items-center">
                        <span className='h-[1px] bg-blue-700 w-[40px] absolute left-0'></span>
                        <span className='text-right h-6 z-50 font-light text-[16px]'>
                          Your support means saved lives</span>
                      </div>
                    </div>
                    <button className='bg-bgblue text-white text-[10px] tracking-widest border-[1.5px]
                     border-bgblue w-48 md:w-28 h-9 font-extrabold hover:bg-white hover:text-bgblue 
                     duration-500'>DONATE</button>
                  </div>
                  {/* bottom */}
                  <div className="w-full h-auto md:h-1/2 flex flex-col md:flex-row gap-8 lg:gap-24  ">
                    <div className="h-full flex flex-col gap-3 justify-end">
                      <div className="md:mt-auto mt-8">
                        <p className='text-fsm font-light'>Address</p>
                        <p className='text-fsm font-light'>Saran(chhapra), Bihar, 841311</p>
                      </div>
                      <div className="">
                        <p className='text-fsm font-light'>+91-8308623995</p>
                        <Link className='text-fsm font-light'>tech@suvaidyam.com</Link>
                      </div>
                    </div>
                    <div className="h-full flex flex-col justify-end gap-3 md:gap-9">
                      <p className='font-semibold text-fsm'>GET INVOLVED</p>
                      <p className='font-light text-fsm'>Let's combine forces to make a <br />
                        difference together</p>
                    </div>
                    <div className="h-full flex flex-col justify-end gap-4 mt-5 ">
                      <p className='font-semibold text-fsm'>JOIN THE EMAIL LIST</p>
                      <div className="flex gap-3 ">
                        <a href='https://www.instagram.com/suvaidyam/' target='_blank'>
                          <div className="w-9 h-9 rounded-full bg-slate-500 flex items-center justify-center text-white instagarm">
                            <BsInstagram className='text-xl' />
                          </div>
                        </a>
                        <a href='https://www.facebook.com/' target='_blank'>
                          <div className="w-9 h-9 rounded-full bg-[#3b5998] flex items-center justify-center text-white"><FaFacebookF className='text-xl' /></div>
                        </a>
                        <a href='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D' target='_blank'>
                          <div className="w-9 h-9 rounded-full bg-sky-400 flex items-center justify-center text-white"><BsTwitter className='text-xl' /></div>
                        </a>
                        <a href='' target='_blank'>
                          <div className="w-9 h-9 rounded-full bg-[#0077b5] flex items-center justify-center text-white "><ImLinkedin2 className='text-xl' /></div>
                        </a>
                      </div>
                      <div className='flex gap-3'>
                        <input type="email" placeholder='Enter email address' className='border-[2.5px]
                    w-36 px-3 py-1.5 border-bgblue placeholder:text-sm placeholder:font-light outline-none
                    text-sm font-light'/>
                        <button className='w-24 border-2 border-bgblue hover:bg-bgblue hover:text-white
                    duration-500 text-[9px] font-extrabold 
                    tracking-widest'>JOIN</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="w-full bg-bgfooter h-16 ">
          <div className="w-full max-w-[1250px] mx-auto h-full px-0 lg:px-[214px] flex items-center
        justify-center lg:justify-start">
            <p className='text-white font-light text-sm'> © 2023 by Suvaidyam, Saran, Bihar</p>
          </div>
        </div>
      </div>
      <div onClick={scrollWin} className="w-10 cursor-pointer flex justify-center items-center text-white text-xl duration-500 h-10 z-50 bg-sky-600 rounded-full fixed right-5  bottom-10"><VscArrowUp /></div>
    </>
  )
}

export default Footer;