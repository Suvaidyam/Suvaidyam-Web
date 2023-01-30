import React from 'react'

const Slider = () => {
  const homeSlider = [
    {
      url: "https://static.wixstatic.com/media/89ec68_f16e2fa1d2cb4eeba61e49ff0e51a299~mv2.jpg/v1/fill/w_882,h_601,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/89ec68_f16e2fa1d2cb4eeba61e49ff0e51a299~mv2.jpg"
    },
  ]
  return (
    <>
      <div>
        {homeSlider.map(e=>(
          <img src={e.url} alt="img" className='w-full h-[380px] md:h-[600px] ' />
        ))}
      </div>
    </>
  )
}

export default Slider