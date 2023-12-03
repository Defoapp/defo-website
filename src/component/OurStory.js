import React from 'react'
import Navbar from "../component/Navbar/Navbar"
import Footer from "../component/footer/Footer"

import infoGraphics from "../component/About_page_Img/infographics.svg"


const OurStory = () => {
  return (
    <div className='relative w-full h-full'>
      <Navbar/>
      <div className='w-full h-full'>

        {/* hero section */}
        
        <div className="w-full flex flex-wrap my-10 py-10">
            <div className="w-full  my-5 lg:my-0 lg:w-1/2">
              <img
                className="w-4/6 mg:5/6 lg:w-3/6 mx-auto"
                src={infoGraphics}
                alt="loading"
              />
            </div>
            <div className="w-full lg:w-1/2  text-2xl px-5 lg:px-32 ">
              <h1 className="text-4xl font-semibold text-center my-5 lg:my-3">
              OUR STORY
              </h1>
              <h1 className="text-2xl text-center lg:text-left">
              At Defo, we are more than just a brand – we are a journey, a vision, and a passion that has evolved over time. Our story is a testament to our dedication, values, and commitment to making a difference in the world.
              </h1>
              <h1 className='mt-4 text-center lg:text-left'>Our mission is to make learning enjoyable and accessible, fostering a positive attitude towards education. Whether used in classrooms, at home, or on-the-go, these apps have the potential to enrich the learning experience and empower individuals of all ages to acquire new knowledge and skills in a fun and engaging way. This mission is at the core of everything we do and continues to drive us forward.
              </h1>
            </div>
          
        </div>

        {/* desc setion */}
        <div className='w-full h-full text-center bg bg-gradient-to-r from-defoGreen from-[-58.97%]  to-defoBlue to-50% py-16 px-8 md:px-28 lg:px-32'>
          <h1 className='text-white text-xl md:text-2xl lg:text-4xl font-semibold'>The Journey</h1>

          <p className='text-white text-xl md:text-xl lg:text-2xl'>Our journey has been a remarkable one, filled with ups and downs, challenges, and triumphs. We've worked tirelessly to [mention key milestones or achievements, e.g., "develop groundbreaking technologies" or "serve thousands of satisfied customers"]. Along the way, we've learned valuable lessons, forged lasting partnerships, and built a community that shares our passion and values.</p>
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}

export default OurStory