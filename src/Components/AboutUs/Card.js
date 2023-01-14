import React from 'react'
import encourage from '../../Assets/IMG_5619.webp'
import books from '../../Assets/colorful books.webp'
import desktop from '../../Assets/Mac Desktop.webp'
import board from '../../Assets/boad.webp'
export const Card = () => {
    return (
        <>
            {/* Empower */}
            <div className=' flex justify-end lg:w-[510px] mt-16'>
                <div>
                    <h1 className='text-xl'>HOW WE WORK </h1>
                    <h1 className='text-5xl mt-4 from-neutral-400'>We EMPOWER</h1>
                </div>
            </div>
            {/* card guide */}
            <div className='lg:flex justify-center mt-16'>
                <div className='bg-gray-50 w-[480px] mx-3 lg:flex pb-7 items-center'>
                    <img src={encourage} alt="encourage" className='rounded-full px-6 py-5' />
                    <div className='mt-5'>
                        <p className='text-2xl'>WE ENCOURAGE</p>
                        <p className='mt-3 text-gray-400  text-[14px] font-thin w-[230px] '>Where a child is born has a huge
                            influence over their education
                            and career trajectories. We are brining tech exposure and opportunities
                            to areas where even access to stable internet is a challenge.
                        </p>
                    </div>
                </div>
                <div className='bg-gray-50 w-[480px] mx-3 lg:flex pb-7 items-center'>
                    <img src={books} alt="Books" className='rounded-full lg:px-6 lg:py-5' />
                    <div className='mt-5'>
                        <p className='text-2xl'>WE GUIDE</p>
                        <p className='mt-3 text-gray-400  text-[14px] font-thin w-[220px]'>Along with providing quality
                            computer education in rural areas
                            where most don't have access to it growing up, we are imparting end-to-end guidance
                            on how to launch successful careers in tech.
                        </p>
                    </div>
                </div>
            </div>
            <div className='lg:flex justify-center mt-4'>
                <div className='bg-gray-50 w-[480px] mx-3 lg:flex pb-7 items-center '>
                    <img src={desktop} alt="encourage" className='rounded-full px-6 py-5 h-[200px]' />
                    <div className=''>
                        <p className='text-2xl'>WE INVEST</p>
                        <p className='mt-3 text-gray-400  text-[14px] font-thin w-[240px]'>Introduce your team! Click here to add images,
                            text and links, or connect data from your collection.
                        </p>
                    </div>
                </div>
                <div className='bg-gray-50 w-[480px] mx-3 lg:flex pb-7 items-center'>
                    <img src={board} alt="encourage" className='rounded-full px-6 py-5 h-[200px]' />
                    <div className=''>
                        <p className='text-2xl'>WE FACILITATE</p>
                        <p className='mt-3 text-gray-400  text-[14px] font-thin w-[240px]'>Introduce your team! Click here to add images,
                            text and links, or connect data from your collection.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
