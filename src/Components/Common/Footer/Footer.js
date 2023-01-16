import React from 'react'

const Footer = () => {
  return (
    <>
      {/* footer */}
      <div className='flex lg:ml-44 mt-14 lg:w-full ml-7'>
        <div className='lg:w-full'>
          <h1 className='lg:text-5xl font-serif text-bgblue font-light my-3 text-3xl'>SUPPORT US</h1>
          <div className='flex items-center gap-4'>
            <p className=' bg-blue-500 w-12 h-[1px]'>
            </p>
            <p>
              Your support means saved lives
            </p>
          </div>
          {/* Button */}
          <div>
            <button className='border-2 border-bgblue w-32 h-10 hover:bg-white hover:text-bgblue font-bold
             text-[11px]  bg-bgblue text-white tracking-[2px] my-8 duration-500
             '>DONATE</button>
          </div>
          {/* Address */}
          <div className='w-full lg:flex'>
            <div className='w-[400px]'>
              <p>Address</p>
              <p>City, State, Zip Code</p>
            </div>
            <div className='w-[300px]'><p className='text-bgblue  font-bold'>GET INVOLVED</p></div>
            <div><p className='text-bgblue  font-bold'>JOIN THE EMAIL LIST</p></div>
          </div>
          <div>
          </div>
          <div className='mt-4 lg:flex  w-full'>
            <div className='w-[395px]'>
              <p>(XXX) XXX-XXXX</p>
              <p>sampleemail@sample.com</p>
            </div>
            <div>
              <p className='w-[290px]'>Let's combine forces to make a  difference together</p>
            </div>
            <div>
              <input type="text" placeholder='Enter email address' className='border-2 text-center border-bgblue lg:mx-3 h-10 p-1 text-[14px]' />
            </div>
            <div>
              <button className='border-2 tracking-[2px] border-bgblue w-24 h-10 p-1 text-bgblue  text-[12.5px]
              hover:bg-bgblue hover:text-white font-bold duration-500 '>JOIN</button>
            </div>
          </div>
        </div>
      </div>
      {/* copywrite 2023 */}
      <div className='w-full bg-bgblue h-[70px] mt-14 opacity-80 top-0  '>
        <div className='lg:w-[350px] flex lg:justify-end items-center h-full'>
          <p className='text-white font-thin text-[13px] lg:ml-0 ml-7'>@ 2023 by Suvaidyam,City,State</p>
        </div>
      </div>

    </>
  )
}

export default Footer