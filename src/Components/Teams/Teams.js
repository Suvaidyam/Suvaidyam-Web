import React from 'react'

const Teams = () => {
  return (
    <>
      {/* founder */}
      <div className='bg-bgblue w-full h-[610px] flex gap-20 '>
        <div className='w-[640px] flex justify-end mt-24'>
          <div className='w-[395px]'>
            <p className='text-white text-[40px] font-normal tracking-[3px]'>Amresh Kumar</p>
            <p className='text-white font-fontsans font-semibold text-[13px] tracking-[2px] mt-3'>Founder</p>
            <p className='text-white mt-16'>I’m a paragraph. Use this space to tell people more about what you do and the services
              you offer. Double click here or click Edit Text to get started. Te about what you
              do and the services you offer. Double click here or click Edit Text to get started.</p>
            <p className='text-white mt-12'>
              I’m a paragraph. Use this space to tell people more about what you do and the services you offer.
              Double click here or click Edit Text to get started. I’m a para. Use this space to.
            </p>
          </div>
        </div>
        <div className='bg-gray-300 w-96 h-[500px] mt-24 '>
        </div>
      </div>
      {/* Team */}
      <div className='text-center  font-sans mt-16'>
        <div className='opacity-75'>
          <p className='text-[45px]'>TEAM</p>
          <p className='text-5xl'>SUVAIDYAM</p>
        </div>
        <hr className='w-8 m-auto bg-black h-1 mt-7' />
      </div>
    </>
  )
}

export default Teams