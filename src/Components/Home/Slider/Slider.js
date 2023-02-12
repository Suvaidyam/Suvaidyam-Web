import React from 'react'
import slider from '../../../Assets/home-img.jpg'

const Slider = () => {
  const homeSlider = [
    {
      url: slider
    },
  ]
  return (
    <>
      <div className='mt-20'>
        {homeSlider.map(e=>(
          <img src={e.url} alt="img" className='w-full h-[200px] md:h-[460px] ' />
        ))}
      </div>
    </>
  )
}

export default Slider