import React from 'react'
import slider from '../../../Assets/home-img.jpg'

const Slider = () => {
  const homeSlider = [
    {
      url: slider,
      id: 1
    },
  ]

  return (
    <>
      <div className='mt-20'>
        {homeSlider.map(e => (
          <div key={e.id}>
            <img src={e.url} alt="img" className='w-full h-[200px] md:h-[460px] lg:h-[515px]' />
          </div>
        ))}
      </div>
    </>
  )
}

export default Slider