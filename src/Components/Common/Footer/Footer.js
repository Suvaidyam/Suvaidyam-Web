import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="w-full">
      {/* footer */}
       <div className="w-full h-auto md:h-96 px-12 md:px-4 lg:px-24 xl:px-48 ">
          <div className="w-full h-full py-12">
            <div className="w-full h-auto md:h-1/2 flex flex-col gap-4 justify-between">
             <div className="">
             <h1 className='text-[40px] md:text-[46px] font-playfire '>SUPPORT US</h1>
              <div className=" relative w-[268px] flex justify-end items-center">
                <span className='h-[1px] bg-blue-700 w-[40px] absolute left-0'></span>
                 <span className='text-right h-6 z-50 font-light text-[16px]'>
                  Your support means saved lives</span>
              </div>
             </div>
             <button className='bg-bgblue text-white text-[10px] tracking-widest border-[1.5px] border-bgblue
             w-48 md:w-28 h-9 font-extrabold hover:bg-white hover:text-bgblue duration-500'>DONATE</button>
            </div>
            {/* bottom */}
            <div className="w-full h-auto md:h-1/2 flex flex-col md:flex-row gap-8 lg:gap-24  ">
               <div className="h-full flex flex-col gap-3 justify-end">
                  <div className="md:mt-auto mt-8">
                    <p className='text-fsm font-light'>Address</p>
                    <p className='text-fsm font-light'>City, State, Zip Code</p>
                  </div>
                  <div className="">
                    <p className='text-fsm font-light'>(XXX) XXX-XXXX</p>
                    <a href="#" className='text-fsm font-light'>sampleemail@sample.com</a>
                  </div>
               </div>
               <div className="h-full flex flex-col justify-end gap-3 md:gap-9">
                  <p className='font-semibold text-fsm'>GET INVOLVED</p>
                  <p className='font-light text-fsm'>Let's combine forces to make a <br />
                    difference together</p>
               </div>
               <div className="h-full flex flex-col justify-end gap-3 md:gap-9">
                 <p className='font-semibold text-fsm'>JOIN THE EMAIL LIST</p>
                 <div className='flex gap-3'>
                    <input type="email" placeholder='Enter email address' className='border-2
                    w-36 px-3 py-1.5 border-bgblue placeholder:text-sm placeholder:font-light outline-none
                    text-sm font-light'/>
                    <button className='w-24 border-[1.5px] border-bgblue hover:bg-bgblue hover:text-white
                    duration-500 text-[9px] font-extrabold 
                    tracking-widest'>JOIN</button>
                 </div>
               </div>
            </div>
          </div>
       </div>
       {/* Copyright */}
       <div className="w-full h-16 bg-bgfooter"></div>
     </div>
    </>
  )
}

export default Footer