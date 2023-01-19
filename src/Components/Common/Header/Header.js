import React from "react";
import Logo from "../../../Assets/Logo.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <div className="w-full max-w-[1720px] mx-auto h-20 flex px-5 lg:px-20 justify-between fixed top-0 bg-white z-[3000]">
        {/* Logo */}
        <div className=" h-full flex items-center ">
          <img className="w-3/5 lg:w-4/5" src={Logo} alt="Logo" />
        </div>
        <div className=" h-full flex  items-center justify-center">
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default Header;
