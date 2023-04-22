import React, { useEffect } from "react";
import founder from "../../Assets/founder.webp";
import Aos from "aos";
import "aos/dist/aos.css";
import rahul from '../../Assets/rahul.jpg'
const Teams = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  const dataimg = [
    {
      img: rahul,
      Name: 'Rahul Kumar',
      id_: 1,
      post: 'Lorem Ipsum',
      description: "I’m a paragraph. Double click me or click Edit Text, it's easy."
    },
    {
      img: 'https://static.wixstatic.com/media/nsplsh_415a324637674ed6b900990f1949a8a7~mv2.jpg/v1/crop/x_1044,y_0,w_2399,h_2408/fill/w_216,h_217,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Vivek%20Kumar.jpg',
      Name: 'Zxydef Wei',
      id_: 2,
      post: 'Lorem Ipsum',
      descriptions: "I’m a paragraph. Double click me or click Edit Text, it's easy."
    },
    {
      img: 'https://static.wixstatic.com/media/nsplsh_c0bc0df9977840899b5538663cfc433c~mv2.jpg/v1/crop/x_0,y_325,w_3000,h_3100/fill/w_210,h_217,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Farhan%20Shaikh.jpg',
      Name: 'Ancwsd Desn',
      id_: 3,
      post: 'Lorem Ipsum',
      description: "I’m a paragraph. Double click me or click Edit Text, it's easy."
    },
  ];

  return (
    <>
      {/* founder */}
      <div className="w-full h-full">
        <div className="w-full lg:h-[756px] h-auto bg-bgblue px-8 lg:px-24 xl:px-56 mt-20 py-12 lg:py-0">
          <div className="w-full h-full  flex lg:flex-row flex-col">
            <div className="w-full lg:w-1/2 h-full flex flex-col justify-center gap-6 lg:gap-12 order-2 lg:order-1">
              <div className="flex flex-col md:gap-4 md:mt-0 mt-2 ">
                <p className="text-white lg:text-[40px] text-[32px] font-normal tracking-[3px] md:text-2xl">
                  Amresh Kumar
                </p>
                <p className="text-white font-fontsans font-semibold text-[18px] lg:text-[13px] tracking-[3px] md:text-2xl">
                  Founder
                </p>
              </div>
              <div className="w-full md:pr-4">
                <p className="text-white lg:text-[18px] md:text-[25px]  text-[21px] w-full font-thin">
                  I’m a paragraph. Use this space to tell people more about what
                  you do and the services you offer. Double click here or click
                  Edit Text to get started. Te about what you do and the
                  services you offer. Double click here or click Edit Text to
                  get started.
                </p>
              </div>
              <div className="w-full md:pr-4">
                <p className="text-white lg:text-[18px] md:text-[25px] text-[21px] w-full font-thin ">
                  I’m a paragraph. Use this space to tell people more about what
                  you do and the services you offer. Double click here or click
                  Edit Text to get started. I’m a para. Use this space to.
                </p>
              </div>
            </div>
            <div className="w-full  lg:w-1/2 h-full flex items-end order-1 lg:order-2">
              <div className="w-full lg:w-[95%] h-[73%] bg-white mb-4 ml-0 lg:ml-8 relative z-10">
                <div className="w-full h-full relative lg:absolute lg:left-14 lg:bottom-14">
                  <img
                    data-aos="fade-right"
                    className="w-full h-full"
                    src={founder}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="w-full text-center mt-16">
          <div className="w-full font-fontNunito text-black font-bold opacity-90 tracking-[2px] text-[40px]">
            <p className="lg:text-[42px] md:text-5xl " >
              TEAM
            </p>
            <p
              className="lg:text-[42px] md:text-5xl md:mt-5 "
            >
              SUVAIDYAM
            </p>
          </div>
          <hr
            className="lg:w-8 m-auto bg-black lg:h-1 md:h-1 md:mt-7 lg:mt-10 md:w-14 w-8 h-1 mt-3 "
          />
        </div>
        {/*bottom rounded image */}
        <div className="w-full h-full lg:flex md:justify-center lg:gap-24">
          {/* map method */}
          {dataimg.map(e => (
            <div>
              <div className="w-full flex justify-center mt-16">
                <img src={e.img} alt="Gyan" className="rounded-full lg:w-[220px] lg:h-[220px] w-[270px] h-[270px] " />
              </div>
              <div className="w-full text-center lg:my-5 my-3 lg:text-[22px] text-[26px] opacity-90 ">
                <p>{e.Name}</p>
              </div>
              <div className="text-center lg:ml-6 font-semibold text-blue-600 tracking-[3px] lg:text-[13px] text-[14px]">
                <p>{e.post}</p>
              </div>
              <div className="w-full lg:mt-12 mt-3 flex justify-center">
                <p className="lg:w-[250px] lg:text-sm text-center md:w-full w-[400px] lg:pl-10 lg:px-0 px-8 font-thin text-xl">{e.descriptions}</p>
              </div>
              <div className="w-full flex justify-center">
                <p className="lg:w-[220px] lg:text-sm w-[400px] md:w-full text-center lg:pl-10 lg:px-0 px-16 font-thin  text-[20px] ">{e.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* team button */}
        <div className="w-full mt-16 flex justify-center">
          <button className="outline-none duration-500  border-2 border-bgblue w-52 lg:w-52 md:w-64 text-bgblue h-10 text-[11.4px] font-bold tracking-[2px] hover:bg-bgblue hover:text-white">
            JOIN THE TEAM
          </button>
        </div>
      </div>
    </>
  );
};

export default Teams;