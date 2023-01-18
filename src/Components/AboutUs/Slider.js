import React from 'react'
import computer from '../../Assets/computer.webp'
import office from '../../Assets/office.webp'
import laptop from '../../Assets/laptop.webp'
import { AiOutlineHeart } from 'react-icons/ai';


export const Slider = () => {
    return (
        <>
            {/* Image */}
            <div className='w-full lg:flex mt-5'>
                <div className='group'>
                    <div className='relative flex justify-center items-center'>
                        <img src={computer} alt="Computer" className=' w-full group-hover:block' />
                        <p className='group-hover:block hidden absolute font-thin text-white text-[23px]'><AiOutlineHeart /></p>
                        <p className='group-hover:block hidden absolute w-full h-full bg-gray-700 bg-opacity-40 '></p>
                    </div>
                </div>
                <div>
                    <img src={office} alt="Office" className='w-full px-2 h-full' />
                </div>
                <div>
                    <img src={laptop} alt="Laptop" className='w-[500px] h-full' />
                </div>
            </div>
        </>
    )
}
