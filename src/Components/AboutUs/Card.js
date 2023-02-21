import React from "react";
export const Card = () => {
  const card = [
    {
      img: "https://static.wixstatic.com/media/b279c1_d796e39ee046433484ad9dbfac2cba22~mv2_d_4032_3024_s_4_2.jpg/v1/crop/x_504,y_0,w_3024,h_3024/fill/w_160,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_5619.jpg",
      img_1:"https://static.wixstatic.com/media/11062b_61159504c4b24999b7177c3ed9ddf4dc~mv2.jpg/v1/crop/x_720,y_0,w_2848,h_2848/fill/w_160,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Colorful%20Books.jpg",
      img_2:"https://static.wixstatic.com/media/25d1f48ff8564b40b8f70a56324b696f.jpg/v1/crop/x_1000,y_0,w_4000,h_4000/fill/w_160,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Mac%20Desktop.jpg",
      img_3:"https://static.wixstatic.com/media/b279c1_71b883a644904ca2ae9354da950780e8~mv2_d_3024_4032_s_4_2.jpg/v1/crop/x_0,y_1003,w_3024,h_3029/fill/w_160,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/unnamed%20(2).jpg",
      id_:1
    }
  ];
  return (
    <>
      {/* Empower */}
      <div className=" flex xl:justify-end lg:ml-10 xl:ml-0 ml-7  lg:w-[490px]  lg:mt-16 py-8 text-bgblue">
        <div>
          <h1 className="lg:text-[18px] text-[25px] font-semibold">HOW WE WORK </h1>
          <h1 className="lg:text-5xl text-[40px] lg:mt-4 mt-2 from-neutral-400">
            We EMPOWER
          </h1>
        </div>
      </div>
      {/* card guide */}
      <div className=" w-full lg:flex xl:pl-44 lg:px-10 lg:mt-16 xl:px-0 lg:w-full">
       {
        card.map(e=>(
          <>
           <div key={e.id} className="bg-[#F9F9F9] lg:w-[480px] w-full lg:mx-2 lg:flex pb-7 items-center">
          <img
            src={e.img}
            alt="encourage"
            className="rounded-full lg:w-52  w-[190px]  px-6 py-5"
          />
          <div className="lg:mt-5 lg:mx-0 mx-6">
            <p className="lg:text-2xl text-[27px] tracking-[2px] font-sans">
              WE ENCOURAGE
            </p>
            <p className="mt-3 text-gray-500 text-[17px]  lg:text-[14px] font-playfire lg:w-[260px] lg:mx-0 lg:px-2 xl:px-0 mx-1 ">
              Where a child is born has a huge influence over their education
              and career trajectories. We are brining tech exposure and
              opportunities to areas where even access to stable internet is a
              challenge.
            </p>
          </div>
        </div>
        <div key={e.id} className="bg-gray-50 lg:w-[480px] lg:mx-2 lg:mt-0 mt-4 lg:flex pb-7 items-center">
          <img
            src={e.img_1}
            alt="Books"
            className="rounded-full lg:w-52 w-[190px] px-6 py-5"
          />
          <div className="lg:mt-5  lg:mx-0 mx-6">
            <p className="lg:text-2xl text-[27px]  tracking-[2px] font-sans">
              WE GUIDE
            </p>
            <p className="mt-3 text-gray-500 text-[17px]  lg:text-[14px] font-playfire lg:w-[240px]">
              Along with providing quality computer education in rural areas
              where most don't have access to it growing up, we are imparting
              end-to-end guidance on how to launch successful careers in tech.
            </p>
          </div>
        </div>
          </>
        ))
       }
      </div>
      <div className="lg:flex xl:pl-[176px] lg:px-11 xl:px-0 mt-4">
       {
        card.map(e=>(
          <>
           <div key={e.id} className="bg-gray-50 lg:w-[480px] lg:mx-2 lg:flex pb-7 items-center ">
          <img
            src={e.img_2}
            alt="desktop"
            className="rounded-full lg:w-52 w-[190px] px-6 py-5"
          />
          <div className="lg:mt-0 mt-4 lg:mx-0 mx-6">
            <p className="lg:text-2xl text-[27px] font-sans tracking-[2px]">
              WE INVEST
            </p>
            <p className="mt-3 text-gray-500 text-[17px] lg:mx-0  lg:text-[14px] font-playfire lg:w-[250px]">
              Introduce your team! Click here to add images, text and links, or
              connect data from your collection.
            </p>
          </div>
        </div>
        <div key={e.id} className="bg-gray-50 lg:w-[480px] lg:mt-0 mt-4 lg:mx-2 lg:flex pb-7 items-center">
          <img
            src={e.img_3}
            alt="encourage"
            className="rounded-full lg:w-52 w-[190px] px-6 py-5"
          />
          <div className=" lg:mx-0 mx-6 ">
            <p className="lg:text-2xl text-[27px] font-sans  tracking-[2px]">
              WE FACILITATE
            </p>
            <p className="  mt-3 text-gray-500 lg:text-[14px]  text-[17px] font-playfire lg-mx-0 ">
              Introduce your team! Click here to add images, text and links, or
              connect data from your collection.
            </p>
          </div>
        </div>
          </>
        ))
       }
      </div>
    </>
  );
};
