import React from 'react'
import invHome from '../../Assets/involved-img.webp'

const GetInvolved = () => {
  return (
    <>
      <div className='w-full md:mt-48'>
        <div className='md:flex block w-full gap-10 px-5 md:px-0'>
          <div className='md:w-1/2 justify-end flex '>
            <img src={invHome} alt="" className='md:w-[490px] md:h-[546px]' />
          </div>
          <div className='md:w-1/2'>
            <div className="md:w-[60%] md:pt-28 pt-5">
              <div className='md:text-[85px] text-[60px] font-serif text-bgblue'>
                <p>Get involved.</p>
              </div>
              <div className='font-fontspar text-xl text-black pt-5'>
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
        <div className='md:mt-24 mt-12 text-2xl font-semibold md:pl-[250px] text-bgblue tracking-wider pl-5'>
          <p>WAYS TO GIVE</p>
        </div>
        <div className='md:flex block md:mt-10 mt-3 md:h-[120px] px-6 md:px-0'>
          <div className='md:w-[30%] flex md:justify-center font-serif'>
            <p className='w-[20px] md:pl-24 text-[17px] pb-4 font-fontthin'>LOREM IPSUM</p>
          </div>
          <div className='md:w-[50%] md:border-l border-gray-500 md:pl-10 font-fontNunito'>
            <p>
              Tell people more about the services you offer. Use this repeating layout to display content. It's an
              easy way to keep your customers up to date with what's happening. Want to make this content
              your own? Simple drag and drop elements like text, images and links, or connect to data from your collection.
            </p>
          </div>
        </div>
        {/*  Get involved down 2 */}
        <div className='md:mt-24 mt-12 text-2xl font-semibold md:pl-[250px] text-bgblue tracking-widest pl-6'>
          <p>VOLUNTEER</p>
        </div>
        <div className='md:flex block md:mt-10 mt-3 md:h-[120px] px-6 md:px-0'>
          <div className='md:w-[30%] flex md:justify-center font-serif'>
            <p className='w-[20px] md:pl-24 pb-4 font-fontthin'>ADNTUN 10</p>
          </div>
          <div className='md:w-[50%] md:border-l border-gray-500 md:pl-10 font-fontNunito'>
            <p>
              Tell people more about the services you offer. Use this repeating layout to display content. It's an
              easy way to keep your customers up to date with what's happening. Want to make this content
              your own? Simple drag and drop elements like text, images and links, or connect to data from your collection.
            </p>
          </div>
        </div>
        {/*  Get involved down 3 */}
        <div className='md:mt-24 mt-12 text-2xl font-semibold md:pl-[250px] text-bgblue tracking-wider pl-6'>
          <p>BE OUR CHEERLEADER</p>
        </div>
        <div className='md:flex block md:mt-10 mt-3 md:h-[120px] px-6 md:px-0'>
          <div className='md:w-[30%] flex md:justify-center font-serif'>
            <p className=' md:pl-[160px] pb-4 font-fontthin'>NDDNFN <br /> 11 PLF</p>
          </div>
          <div className='md:w-[50%] md:border-l border-gray-500 md:pl-10 font-fontNunito'>
            <p>
              Tell people more about the services you offer. Use this repeating layout to display content. It's an
              easy way to keep your customers up to date with what's happening. Want to make this content
              your own? Simple drag and drop elements like text, images and links, or connect to data from your collection.
            </p>
          </div>
        </div>
        {/* DOWN */}
        <div className='h-[400px] bg-bgblue flex mt-14  items-center text-center text-white px-5 md:px-0'>
          <div>
            <p className='md:text-4xl text-[22px]  font-serif'>I'M AN ORIGINAL CATCHPHRASE</p>
            <p className='border-b-[3px] md:my-8 my-2 md:mx-[48.5%] mx-[43%]'></p>
            <p className='md:px-[30%]'>
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