import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import imgg from "../../Assets/computer.webp";
import office from "../../Assets/office.webp";
import laptop from "../../Assets/laptop.webp";
import nsplsh from "../../Assets/nsplsh.webp";
import { RxCross1 } from 'react-icons/rx'
import { BsArrowsAngleExpand } from 'react-icons/bs'
import { VscArrowLeft } from 'react-icons/vsc'
import { BsHeart } from 'react-icons/bs'
import { FaHeart } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'

const CardSlider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const fullscreenimg = [
    {
      url: imgg,
      id_: 1
    },
    {
      url: office,
      id_: 2
    },
    {
      url: laptop,
      id_: 3
    }, {
      url: nsplsh,
      id_: 4
    }
  ]
  const [showPopup, setShowPopup] = useState(false)
  const [heart, setheart] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = () => {
    setheart(!heart)
    console.log(heart)
  }
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>

      {/* slider */}
      <div className="w-full h-full relative ">

        <div className="hidden sm:block">
          <button
            className=" text-white font-bold py-2 px-4 rounded lg:block"
            onClick={() => setShowPopup(true)}
          >
            <div className="w-full sm:flex">

              <div className=" relative group">
                <div>
                  <img src={imgg} alt="" className=" group-hover:block" />
                </div>
                <div className="flex justify-center">
                  <p className=" group-hover:block hidden absolute top-0 text-white lg:mt-40 md:mt-32 sm:mt-20 text-[17px]">
                    {heart === true ? <FaHeart onClick={toggle} className='text-red-500' /> : <BsHeart onClick={toggle} />}
                  </p>
                  <p className="bg-blue-400 opacity-30 group-hover:block hidden  top-0 absolute w-full h-full"></p>
                </div>
              </div>
              <div className=" mx-3 relative group">
                <img src={office} alt="" className=" group-hover:block" />
                <div className=" flex justify-center">
                  <p className=" group-hover:block hidden absolute top-0 text-white lg:mt-40 md:mt-32 sm:mt-20 text-[17px]"><BsHeart /></p>
                  <p className="bg-blue-400 opacity-30 group-hover:block hidden  top-0 absolute w-full h-full"></p>
                </div>
              </div>
              <div className=" relative group">
                <img src={laptop} alt="" className=" group-hover:block" />
                <div className=" flex justify-center">
                  <p className=" group-hover:block hidden absolute top-0 text-white lg:mt-40 md:mt-32 sm:mt-20 text-[17px]"><BsHeart /></p>
                  <p className="bg-blue-400 opacity-30 group-hover:block hidden  top-0 absolute w-full h-full"></p>
                </div>
              </div>

            </div>
          </button>
        </div>

        <div className="block sm:hidden">
          <div>
            <Carousel responsive={responsive} className='z-[500]'>
              {fullscreenimg.map(e => (
                <div className="w-full flex justify-center">
                  <img src={e.url} alt="" className="  h-60" onClick={() => setShowPopup(true)} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        {showPopup && (
          <div className="w-full h-full fixed top-0 left-0  right-0 bg-white p-8 z-[500] ">
            <div className=" mt-10 ">
              <div className="flex justify-between">
                <div className="flex gap-10 ">
                  <h3 className="text-3xl font-medium mt-8 cursor-pointer hidden sm:block"><BsArrowsAngleExpand onClick={handleClick} title='FullScreen' /></h3>
                  <p className="mt-8 text-xl hidden sm:block">
                    {heart === true ? <AiFillHeart onClick={toggle} className='text-red-500 cursor-pointer text-2xl' title="Heart" /> : <AiOutlineHeart onClick={toggle} className='text-2xl cursor-pointer' title="Heart" />}
                  </p>

                </div>
                <div>
                  <button
                    className=" font-bold py-2 px-4 text-3xl mt-4 flex justify-end " title="Close"
                    onClick={() => setShowPopup(false)}
                  >
                    <RxCross1 className="hidden sm:block" />
                  </button>
                </div>
              </div>

              {/* mobile */}
              <div className="w-full flex justify-between">
                <button
                  className=" font-bold py-2  text-3xl mt-4 flex justify-end " title="Close"
                  onClick={() => setShowPopup(false)}
                >
                  <VscArrowLeft className=" block sm:hidden" title="Back" />
                </button>
                <div>
                  <p className="mt-6 text-2xl text-slate-600 block sm:hidden">
                    {heart === true ? <AiFillHeart onClick={toggle} className='text-red-500 cursor-pointer' title="Heart" /> : <AiOutlineHeart onClick={toggle} className='cursor-pointer' title="Heart" />}
                  </p>
                </div>
              </div>
              {/* mobile */}

              <div className="w-full h-full">
                <Carousel responsive={responsive} className='z-999' >
                  {
                    fullscreenimg.map((e) => {
                      return (
                        <>
                          <div className="flex justify-center mx-2">
                            <div>
                              {isExpanded === true ?
                                <div>
                                  <img
                                    src={e.url}
                                    alt='img'
                                    style={{
                                      width: isExpanded ? '1600px' : '100%',
                                      height: isExpanded ? '500px' : 'auto',
                                      marginTop: isExpanded ? -50 : 0,
                                      padding: isExpanded ? '10px' : 'auto',
                                      // zIndex: isExpanded ? 999 : 'auto'
                                    }}
                                  />
                                </div> : <>
                                  <div >
                                    <img
                                      src={e.url}
                                      className='sm:h-auto  h-[200px] mt-7 sm:-mt-10'
                                      alt="img"
                                    />
                                  </div> </>}
                            </div>
                          </div>
                        </>
                      )
                    })
                  }
                </Carousel>
              </div>
            </div>
          </div>
        )}
      </div>
      {/*  */}
    </>
  );
};

export default CardSlider;
