import React from 'react';
// import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


import slider1 from '../../../Assets/home-img.jpg';
// import slider2 from '../../../Assets/agriculture.jpg';
import slider3 from '../../../Assets/ new photo.avif';

const Slider = () => {
    const settings = {
        showArrows: true,
        autoPlay: true,
        interval: 3000,
        transitionTime: 1000,
        infiniteLoop: true,
        showThumbs: false,
        showStatus: false,
        dynamicHeight: false,
        swipeable: true,
    };
    let sliderContent = [
        {
            img: slider1,
            // legend: "L1 "
        },
        {
            img: slider3,
            // legend: "L3"
        },
    ]

    return (
        <Carousel {...settings}>
            {sliderContent?.map((slide, index) => (
                <div key={index}>
                    <img src={slide.img} alt="Slider 1" className='w-full h-[200px] md:h-[460px] lg:h-[600px]' />
                    {/* <p className="legend  my-11  ">{slide.legend}</p> */}
                </div>
            ))}
        </Carousel>
    );
};

export default Slider;