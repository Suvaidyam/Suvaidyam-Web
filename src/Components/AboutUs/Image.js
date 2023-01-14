import React from 'react'
import computer from '../../Assets/computer.webp'
import office from '../../Assets/office.webp'
import laptop from '../../Assets/laptop.webp'


export const Image = () => {
    return (
        <>
            {/* Image */}
            <div className='w-full lg:flex mt-5'>
                <div className=''>
                    <img src={computer} alt="Computer" className='' />
                </div>
                <div>
                    <img src={office} alt="Office" className='px-2 h-full' />
                </div>
                <div>
                    <img src={laptop} alt="Laptop" className='' />
                </div>
            </div>
        </>
    )
}
