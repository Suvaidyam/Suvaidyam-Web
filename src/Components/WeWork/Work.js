import React from 'react'
import map from '../../Assets/map.webp'

const Work = () => {
    return (
        <div className='md:mt-48 mt-28'>
            {/* <p className='md:text-[56px] text-[35px] text-center font-playfire tracking-wide'>Where We Work</p> */}
            {/* <div className="flex justify-center">
                <p className='md:mt-10 mt-10 md:w-[750px] text-bgblue md:text-[16px] font-normal text-[16px] w-auto px-6 text-center
                 tracking-widest'>
                    Since its founding in 2020, Suvaidyam has worked predominantly in Bihar, Delhi and Haryana ______. We collaborate with governmental and non-governmental partners to provide training ________
                </p>
            </div> */}
            <div className="flex justify-center">
                <img src={map} alt="" />
            </div>
        </div >

    );
};

export default Work
