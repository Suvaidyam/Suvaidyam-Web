import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { ImLinkedin2 } from 'react-icons/im'
import { VscArrowUp } from 'react-icons/vsc'
import { emailScema } from '../../../Schema'
import http from '../../../Service/http'


const Footer = () => {
  function scrollWin() {
    window.scrollTo(0, 0);
  }
  const handleSubscribe = (values, action) => {
    try {
      const response = http({
        url: '.subscribe',
        method: 'POST',
        data: values
      })
      if (response) {
        console.log('success', response)
        action.resetForm();
      }
    } catch (error) {
      console.error('error in api', error)
    }
  }

  return (
    <>
      <div className="w-full mt-auto">
        {/* footer */}
        <div className="w-full max-w-[1720px] mx-auto h-auto py-7 px-6 md:px-12 lg:px-24 xl:px-30 ">
          <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-10 lg:gap-24'>
            <div className='flex flex-col gap-9'>
              <div className='flex flex-col gap-3'>
                <h1 className='text-[40px] md:text-[46px] font-playfire'>SUPPORT US</h1>
                <div className=" relative w-[268px] flex justify-end items-center">
                  <span className='h-[1px] bg-blue-700 w-[40px] absolute left-0'></span>
                  <span className='text-right h-6 z-50 font-light text-[16px]'>
                    Your support means saved lives
                  </span>
                </div>
                <button className='bg-bgblue text-white text-[10px] tracking-widest border-[1.5px]
              border-bgblue w-60 md:w-28 h-9 font-extrabold hover:bg-white hover:text-bgblue 
              duration-500'>
                  DONATE
                </button>
              </div>
              <div className=" flex flex-col justify-end gap-2 md:gap-3">
                <p className='font-semibold text-xl'>Registered Office</p>
                <p className='font-light text-fsm'>
                  VILLINTEL SUVAIDYAM PRIVATE LIMITED
                </p>
                <p className='font-light text-sm'>CIN - U62099DL2024PTC436726
                  <br /> PAN - AAKCV4369C
                  <br /> TAN - DELV29114B</p>
              </div>

            </div>
            <div className="flex flex-col gap-3 ">
              <div className="md:mt-auto mt-8">
                <p className='font-semibold text-xl'>Address</p>
                <p className='text-sm font-light pt-2 '> F-374/C GF BLOCK -F, AYA NAGAR EXTN PH-6,<br></br>South Delhi - 110047</p>
              </div>
              <div className="">
                <p className='text-fsm font-light'>+91-8308623995</p>
                <a href='mailto:tech@suvaidyam.com' className='text-fsm font-light'>
                  tech@suvaidyam.com
                </a>
              </div>
            </div>
            <div className=" flex flex-col justify-end gap-3 md:gap-9">
              <p className='font-semibold text-xl'>GET INVOLVED</p>
              <p className='font-light text-fsm'>
                Let's combine forces to make a <br />
                difference together
              </p>
            </div>
            <div className=" flex flex-col justify-end gap-3">
              <p className='font-semibold text-xl'>JOIN US</p>
              <div className="flex gap-4">
                <a href='https://www.instagram.com/suvaidyam/' target='_blank' rel='noreferrer'>
                  <div className="w-9 h-9 rounded-full bg-slate-500 flex items-center justify-center text-white instagarm">
                    <BsInstagram className='text-xl' />
                  </div>
                </a>
                <a href='https://whatsapp.com/channel/0029VaAg20iG3R3rCSYYjL30' target='_blank' rel='noreferrer'>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center">
                    <FaWhatsapp className='text-green-400' size={36} />
                  </div>
                </a>
                <a href='https://www.youtube.com/@suvaidyam/featured' target='_blank' rel='noreferrer'>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center">
                    <FaYoutube className='text-red-500' size={36} />
                  </div>
                </a>
                <a href='https://www.linkedin.com/company/suvaidyam/?originalSubdomain=in' target='_blank' rel='noreferrer'>
                  <div className="w-9 h-9 rounded-full bg-[#0077b5] flex items-center justify-center text-white ">
                    <ImLinkedin2 className='text-xl' />
                  </div>
                </a>
              </div>
              <div className='relative'>
                <Formik
                  initialValues={{ email: "" }}
                  validationSchema={emailScema}
                  onSubmit={handleSubscribe}
                >
                  <Form className='flex gap-3'>
                    <div className="flex flex-col items-start gap-1">
                      <Field type="email" name="email" placeholder='Enter email address' className='border-[2px]
                        w-48 px-3 py-1.5 border-bgblue placeholder:text-sm placeholder:font-light outline-none
                        text-sm font-light'/>
                      <ErrorMessage name='email' component='p' className='text-xs text-red-500 absolute left-0 -bottom-5' />
                    </div>
                    <button type='submit' className='w-24 border-2 border-bgblue hover:bg-bgblue hover:text-white
                      duration-500 text-[9px] font-extrabold 
                      tracking-widest'>
                      JOIN
                    </button>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="w-full bg-bgfooter h-16 ">
          <div className="w-full max-w-[1250px]  h-full lg:px-[185px] flex items-center
         lg:justify-start">
            <p className='text-white font-light text-sm'> © 2023 by Suvaidyam, Saran, Bihar</p>
          </div>
        </div>
      </div>


      <div onClick={scrollWin} className="w-10 cursor-pointer flex justify-center items-center text-white text-xl duration-500 h-10 z-50 bg-sky-600 rounded-full fixed right-5  bottom-10"><VscArrowUp /></div>
    </>
  );
}

export default Footer;
