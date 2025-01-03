import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiBars3 } from 'react-icons/hi2'
import { IoMdClose } from 'react-icons/io'

const Navbar = () => {

    // const []=useState()
    const [openNav, setOpenNav] = useState(false)
    function scrollWin() {
        window.scrollTo(0, 0);
    }

    const nav = [
        // { name: 'Home', to: '/', click: false },false
        { name: 'About Us', to: '/about', click: false },
        // { name: 'The Team', to: '/teams', click: false },
        { name: 'Where We Work', to: '/work', click: false },
        { name: 'Contact Us', to: '/contact', click: false },

    ]



    return (
        <>
            <div className="hidden lg:block">
                <div className="flex gap-8 items-center">
                    <div className='flex gap-6'>
                        {nav.map(items => (
                            <NavLink key={items.name} onClick={scrollWin} to={items.to} className='font-semibold text-[15px] hover:text-slate-500
                            text-bgblue'>{items.name}</NavLink>
                        ))}
                    </div>
                    <Link onClick={scrollWin} to='/involved'>
                        <button className='w-48 h-10 text-[10px] font-bold border-[1.5px] border-bgblue
                        hover:bg-bgblue hover:text-white tracking-widest duration-500'>GET INVOLVED</button>
                    </Link>
                </div>
            </div>
            {/* mobile */}
            <div className="block lg:hidden">
                {openNav === false ? <HiBars3 className='text-4xl cursor-pointer' onClick={() => setOpenNav(!openNav)} /> :
                    <IoMdClose className='text-4xl cursor-pointer' onClick={() => setOpenNav(!openNav)} />}
                {openNav === true ?
                    <div className="w-[75%] h-screen bg-bgblue absolute left-0 top-0">
                        <div className='w-full flex flex-col gap-1 pt-20 px-8'>
                            {nav.map(items => (
                                <NavLink key={items.name} to={items.to} className='font-light tracking-widest text-[17px] hover:text-red-600
                            text-white border-b w-4/5 h-10' onClick={() => setOpenNav(items.click)}><p onClick={scrollWin}>{items.name}</p></NavLink>
                            ))}
                            <Link onClick={() => setOpenNav(false)} className='w-[75%]' to='/involved'>
                                <button className='text-white text-start w-full text-[16px] font-normal' onClick={scrollWin}>GET INVOLVED</button>
                            </Link>
                        </div>
                    </div> : null}
            </div>
        </>
    );
};

export default Navbar;