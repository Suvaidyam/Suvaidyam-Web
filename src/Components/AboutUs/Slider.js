import React from 'react'
import computer from '../../Assets/computer.webp'
import office from '../../Assets/office.webp'
import laptop from '../../Assets/laptop.webp'
import {AiOutlineHeart} from 'react-icons/ai' ;


export const Slider = () => {
    return (
        <>
            {/* Image */}
            <div className='w-full lg:flex mt-5'>
                <div className='group'>
                    <div>
                        <img src={computer} alt="Computer" className='  group-hover:block  ' />
                        <p className='group-hover:block hidden absolute'><AiOutlineHeart/></p>
                    </div>
                </div>
                <div>
                    <img src={office} alt="Office" className='w-full px-2 h-full' />
                </div>
                <div>
                    <img src={laptop} alt="Laptop" className='w-full' />
                </div>
            </div>
        </>
    )
}
