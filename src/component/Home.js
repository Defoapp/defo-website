import React from "react";
import "../App.css";
import {price} from "../constants/map"
import {discover} from "../constants/map"
import Navbar from "../component/Navbar/mainNavbar"
import hero from "../image/startbackground_1.webp"
import screenshot from "../image/tp201-sasi6-presentation43-02_2.png"

// ---------------Discover------------------
import playstore from "../image/google-play-badge.svg";
import appstore from "../image/app-store-badge.svg";

import GpIcon from "../image/Google_Play-Icon-Logo.wine.svg"

// -----------------------Footer-------------
import Footer from "../component/footer/Footer";


function Home() {
  
  return (
    <div className="relative w-full h-full">
              {/* ------------Navbar------------------ */}
       <div className=" w-full mx-auto">
       <Navbar/>
        {/* Hero section */}
        <div className="h-full ">
        
          {/* Overlay */}

          <div className="absolute w-full h-full text-white top-60 sm:top-26 md:top-20 lg:top-48  pl-4 md:pl-20 lg:pl-40 ">
            <h1 className=" text-4xl sm:text-5xl md:text-6xl lg:text-7xl
             font-bold font-bubblegum tracking-wide">Information<br/>with<br/>Entertainment</h1>
            <p className="font-bubblegum text-xl sm:text-2xl md:text-2xl lg:text-2xl text-left font-medium">Are you looking to have fun and learn at the same time?</p>
            <div className=" w-full flex gap-10 mt-10  flex-col md:flex-row  place-items-center lg:justify-start">
              <a href="https://play.google.com/store/apps/details?id=dev.lowpow.defo&pli=1">
              <img className="w-48 lg:w-40" src={playstore} alt="loading"/></a>
              <img className="w-48 lg:w-40" src={appstore} alt="loading"/>
            </div>
          </div>
          <img className="w-full h-screen object-cover" src={hero} alt="loading"/>
        </div>

        {/* screenshot section */}
        <div className="w-full h-full lg:h-screen py-16 flex justify-center items-center flex-col">
          <img className="w-4.5/5 lg:w-3/5" src={screenshot} alt="loading"/>
          <a href={"https://play.google.com/store/apps/details?id=dev.lowpow.defo&pli=1"}><div className="flex  bg-black w-fit px-5 py-3 mt-10 rounded-full transition-all hover:scale-95 "><img className="w-12" src={GpIcon} alt="loading"/><h1 className="text-white text-xl font-bold"> Download The App</h1></div></a>
        </div>


        {/* Description lines */}
        <div className=" w-full  flex justify-center   bg-gradient-to-r from-defoGreen from-[-58.97%]  to-defoBlue to-50% ">
          
          <p className=" relative text-white font-bold  w-4/5 sm:w-2/5 text-xl  font-poppins m-8">"A short video app with a subscription model can offer high-quality content and attract a loyal audience."</p>
        </div>

        {/* Discover section */}
        <div   className="w-full h-full py-20 ">
          <h1 className="text-center text-2xl md:text-4xl lg:text-4xl font-bold">Discover, Like and Save the useful videos.</h1>
          <p className="text-black text-xl  md:text-2xl font-medium font-poppins">Discover a new way to learn and have fun at the same time!</p>
          
          {/* Discover Grid Section */}
          <div  className="place-items-center grid  w-fit gap-y-10 gap-x-10 m-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  py-10 text-center">
          {discover.map((discover) =>(
            <div key={discover.id} className=" w-56 h-full py-2">
              <img className="mx-auto w-28" src={discover.image} alt="loading"/>
              <h1 className="font-medium lg:text-xl pt-4">{discover.title}</h1>
              <p className="text-gray-500 font-medium font-poppins ">{discover.desc}</p>
            </div>
            ))}
          </div>
          

        </div>

        
        {/* Price Section */}
        <div id="pricing" className="w-full bg-gradient-to-r from-defoGreen from-[-58.97%]  to-defoBlue to-50% py-5">
          <h1 className=" text-white text-2xl sm:text-4xl md:text-4xl font-medium text-center mt-5 ">Ready to get started?</h1>
          <p className="text-xl md:text-2xl font-medium text-gray-500 font-poppins">The only app you need for a complete Entertainment</p>

          {/* Cards */}

          <div className="flex justify-center  gap-10 flex-wrap my-16 ">
            {price.map((price) =>(
            <div key={price.id} className=" bg-white rounded-2xl w-80 h-80 text-center shadow-2xl border-2  transition-all hover:scale-95">
              <h1 className="text-gray-500 font-semibold font-poppins mt-10">{price.title}</h1>
              <h1 className=" mt-5 text-sm  font-poppins"><span className="font-bold text-xl sm:text-2xl lg:text-4xl ">{price.rate}</span>{price.valid}</h1>
              <hr/>
              <div className="flex justify-center mt-5">
              <ul className="text-left font-poppins text-gray-500">
                <li>{price.spec1}</li>
                <li>{price.spec2}</li>
                <li>{price.spec3}</li>
              </ul>
              </div>
            </div>
            ))}
          </div>

        </div>

        {/* store links */}
        <div className="w-full h-fit content-center flex justify-center py-10">
          <div className="m-auto text-center">
            <h1 className="font-bold text-xl md:text-2xl  lg:text-4xl">Get the app now!</h1>
            <div className="flex gap-10 flex-col lg:flex-row my-5">
              <img className="w-40" src={playstore} alt="loading"/>
              <img className="w-40" src={appstore} alt="loading"/>
            </div>
          </div>
        </div>



       </div>
      <Footer />
    </div>
  );
}

export default Home;

