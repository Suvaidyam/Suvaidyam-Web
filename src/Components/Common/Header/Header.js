import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../Assets/Logo.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <div className="w-full  h-20  fixed top-0 bg-white z-[3000] shadow">
        {/* Logo */}
        <div className="w-full h-full max-w-[1720px] mx-auto flex px-5 lg:px-20 justify-between">
          <div className=" h-full flex items-center ">
            <Link to='/'><img className="w-1/2 md:w-1/3 lg:w-1/4" src={Logo} alt="Logo" /></Link>
          </div>
          <div className=" h-full flex  items-center justify-center">
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;