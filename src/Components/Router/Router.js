import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Home/Home'
import AboutUs from '../AboutUs/AboutUs'
// import Teams from '../Teams/Teams'
import ContactUs from '../ContactUs/ContactUs'
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';
import GetInvolved from '../GetInvolved/GetInvolved';
import Work from '../WeWork/Work'
const Router = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <BrowserRouter>
      <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/work" element={<Work />} />
            {/* <Route path="/teams" element={<Teams />} /> */}
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/involved" element={<GetInvolved />} />
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default Router