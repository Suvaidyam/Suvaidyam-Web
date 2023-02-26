import React from 'react'
import invHome from '../../Assets/involved-img.webp'

const GetInvolved = () => {
  return (
    <>
      <div className='w-full md:mt-[180px]'>
        <div className='md:flex md:px-0 block w-full gap-10 px-5'>
          <div className='md:w-1/2 justify-end md:flex '>
            <img src={invHome} alt="" className='lg:w-[450px] lg:h-[546px] h-[450px]' />
          </div>
          <div className='md:w-1/2'>
            <div className="lg:w-[60%] lg:pt-28 pt-5">
              <div className='lg:text-[85px] w-20 md:text-[67px] text-[60px] font-serif text-bgblue'>
                <p>Get involved.</p>
              </div>
              <div className='md:text-lg md:pr-2  font-fontspar text-xl text-black pt-2'>
                <p>
                  I’m a paragraph. Double click me or click Edit Text, it's easy.
                  I’m a paragraph. Double click me or click Edit Text. I’m a paragraph.
                  Double click me or click Edit Text, it's easy.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Get involved down */}
        <div className='lg:pl-[19%] md:mt-24 md:pl-4 mt-12 text-2xl font-semibold text-bgblue tracking-wider pl-5'>
          <p>WAYS TO GIVE</p>
        </div>
        <div className='md:flex md:px-5 md:h-[120px]  block md:mt-10 mt-3 px-6 '>
          <div className='lg:w-[30%]  flex md:justify-center font-serif'>
            <p className='lg:pl-24 md:w-[110px] w-[98px] text-[17px] pb-4 font-fontthin'>LOREM IPSUM</p>
          </div>
          <div className='lg:w-[700px] md:pl-10 md:border-l border-gray-500  font-fontNunito'>
            <p>
              Tell people more about the services you offer. Use this repeating layout to display content. It's an
              easy way to keep your customers up to date with what's happening. Want to make this content
              your own? Simple drag and drop elements like text, images and links, or connect to data from your collection.
            </p>
          </div>
        </div>
        {/*  Get involved down 2 */}
        <div className='lg:pl-[19%] md:mt-24 md:pl-4 mt-12 text-2xl font-semibold text-bgblue tracking-wider pl-5'>
          <p>VOLUNTEER</p>
        </div>
        <div className='md:flex md:px-5 md:h-[120px]  block md:mt-10 mt-3 px-6'>
          <div className='lg:w-[30%]  flex md:justify-center font-serif'>
            <p className='lg:pl-24 md:w-[110px] w-[80px] text-[17px] pb-4 font-fontthin'>ADNTUN 10</p>
          </div>
          <div className='lg:w-[700px] md:pl-10 md:border-l border-gray-500  font-fontNunito'>
            <p>
              Tell people more about the services you offer. Use this repeating layout to display content. It's an
              easy way to keep your customers up to date with what's happening. Want to make this content your own? .
            </p>
          </div>
        </div>
        {/*  Get involved down 3 */}
        <div className='lg:pl-[18%] md:mt-24 md:pl-4 mt-12 text-2xl font-semibold text-bgblue tracking-wider pl-5'>
          <p>BE OUR CHEERLEADER</p>
        </div>
        <div className='md:flex md:px-5 md:h-[120px]  block md:mt-10 mt-3 px-6'>
          <div className='lg:w-[30%]  flex md:justify-center font-serif'>
            <p className=' lg:pl-24 md:w-[138px]  text-[17px] pb-4 font-fontthin'>NDDNFN 11 PLF</p>
          </div>
          <div className='lg:w-[700px] md:pl-10 md:border-l border-gray-500  font-fontNunito'>
            <p>
              Tell people more about the services you offer. Use this repeating layout to display content. It's an easy
              way to keep your customers up to date with what's happening.
            </p>
          </div>
        </div>
        {/* DOWN */}
        <div className='h-[400px] bg-bgblue flex mt-14 justify-center  items-center text-center text-white px-5 md:px-0'>
          <div>
            <p className='md:text-[40px] text-[22px]  font-fontgetDown'>I'M AN ORIGINAL CATCHPHRASE</p>
            <p className='border-b-[3px] md:my-8 my-2 md:mx-[48.5%] mx-[43%]'></p>
            <p className='lg:px-[30%] md:px-[15%] font-fontNunito'>
              I’m a paragraph. Double click here or click Edit Text to add some text of your own
              or to change the font. This is the place for you to tell your site visitors a little bit
              about you and your services.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default GetInvolved;