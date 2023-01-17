import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiBars3 } from 'react-icons/hi2'
import { IoMdClose } from 'react-icons/io'

const Navbar = () => {

    const [openNav, setOpenNav] = useState(false)
    return (
        <>
            <div className="hidden lg:block">
                <div className="flex gap-8 items-center">
                    <div className='flex gap-6'>
                        <NavLink to='/' className='font-semibold text-[15px] hover:text-slate-500
                          text-[#0C1D39]'>Home</NavLink>
                        <NavLink to='/about' className='font-semibold text-[15px] hover:text-slate-500
                          text-[#0C1D39]'>About Us</NavLink>
                        <NavLink to='/teams' className='font-semibold text-[15px] hover:text-slate-500
                          text-[#0C1D39]'>The Team</NavLink>
                        <NavLink to='/contact' className='font-semibold text-[15px] hover:text-slate-500
                          text-[#0C1D39]'>Contact Us</NavLink>
                    </div>
                    <Link to='/involved'>
                        <button className='w-48 h-10 text-[10px] font-bold border-[1.5px] border-[#0C1D39]
                hover:bg-[#0C1D39] hover:text-white tracking-widest duration-500'>GET INVOLVED</button>
                    </Link>
                </div>
            </div>
            {/* mobile */}
            <div className="block lg:hidden ">
                {openNav === false ? <HiBars3 className='text-4xl cursor-pointer' onClick={() => setOpenNav(!openNav)} /> :
                    <IoMdClose className='text-4xl cursor-pointer' onClick={() => setOpenNav(!openNav)} />}
                {openNav === true ?
                    <div className="w-3/5 h-screen bg-[#0C1D39] absolute left-0 top-0">
                        <div className='w-full flex flex-col gap-1 pt-20 px-8'>
                            <NavLink to='/' className='font-light tracking-widest text-[20px] hover:text-red-600
                             text-white border-b w-4/5 h-12'>Home</NavLink>
                            <NavLink to='/about' className='font-light tracking-widest text-[20px] hover:text-red-600
                             text-white border-b w-4/5 h-12'>About Us</NavLink>
                            <NavLink to='/teams' className='font-light tracking-widest text-[20px] hover:text-red-600
                             text-white border-b w-4/5 h-12'>The Team</NavLink>
                            <NavLink to='/contact' className='font-light tracking-widest text-[20px] hover:text-red-600
                             text-white border-b w-4/5 h-12'>Contact Us</NavLink>
                        </div>
                    </div> : null}

            </div>
        </>
    )
}

export default Navbar