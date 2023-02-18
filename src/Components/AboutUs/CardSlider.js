import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import imgg from "../../Assets/computer.webp";
import office from "../../Assets/office.webp";
import laptop from "../../Assets/laptop.webp";
import nsplsh from "../../Assets/nsplsh.webp";
import { RxCross1 } from 'react-icons/rx'
import { BsArrowsAngleExpand } from 'react-icons/bs'
import { BsHeart } from 'react-icons/bs'
import { FaHeart } from 'react-icons/fa'

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

      {/*  */}
      <div className="w-full h-full relative ">

        <button
          className=" text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowPopup(true)}
        >
          <div className=" flex">

            <div className=" relative group">
              <div>
                <img src={imgg} alt="" className=" group-hover:block" />
              </div>
              <div className="flex justify-center">
                <p className=" group-hover:block hidden absolute top-0 text-white lg:mt-40 text-[17px]">
                  {heart === true ? <FaHeart onClick={toggle} className='text-red-500' /> : <BsHeart onClick={toggle} />}
                </p>
                <p className="bg-blue-400 opacity-30 group-hover:block hidden  top-0 absolute w-full h-full"></p>
              </div>
            </div>
            <div className=" mx-3 relative group">
              <img src={office} alt="" className=" group-hover:block" />
              <div className=" flex justify-center">
                <p className=" group-hover:block hidden absolute top-0 text-white lg:mt-40 text-[17px]"><BsHeart /></p>
                <p className="bg-blue-400 opacity-30 group-hover:block hidden  top-0 absolute w-full h-full"></p>
              </div>
            </div>
            <div className=" relative group">
              <img src={laptop} alt="" className=" group-hover:block" />
              <div className=" flex justify-center">
                <p className=" group-hover:block hidden absolute top-0 text-white lg:mt-40 text-[17px]"><BsHeart /></p>
                <p className="bg-blue-400 opacity-30 group-hover:block hidden  top-0 absolute w-full h-full"></p>
              </div>
            </div>

          </div>

        </button>


        {showPopup && (
          <div className="w-full h-full fixed top-0 left-0  right-0 bg-white p-8 z-[500] ">
            <div className=" mt-10">
              <div className="flex justify-between">
                <div className="flex gap-10 ">
                  <h3 className="text-3xl font-medium mt-8 cursor-pointer"><BsArrowsAngleExpand onClick={handleClick} title='FullScreen' /></h3>
                  <p className="mt-8 text-xl">
                    {heart === true ? <FaHeart onClick={toggle} className='text-red-500 cursor-pointer' title="Heart" /> : <BsHeart onClick={toggle} className='cursor-pointer' title="Heart" />}
                  </p>
                </div>
                <div>
                  <button
                    className=" font-bold py-2 px-4 text-3xl mt-4 flex justify-end" title="Close"
                    onClick={() => setShowPopup(false)}
                  >
                    <RxCross1 />
                  </button>
                </div>
              </div>
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
                                    style={{
                                      width: isExpanded ? '1600px' : '100%',
                                      height: isExpanded ? '500px' : 'auto',
                                      // marginTop: isExpanded ? 0 : 0,
                                      // padding: isExpanded ? '10px' : 'auto',
                                      // zIndex: isExpanded ? 999 : 'auto'
                                    }}
                                  />
                                </div> : <>
                                  <div>
                                    <img
                                      src={e.url}
                                      className='md:h-auto  h-[200px] mt-7'
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
