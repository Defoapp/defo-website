import React from "react";
import "../App.css";
import {price} from "../constants/map"
import {discover} from "../constants/map"
import Navbar from "../component/Navbar/mainNavbar"
import hero from "../image/startbackground_1.webp"

// ---------------Discover------------------
import playstore from "../image/google-play-badge.svg";
import appstore from "../image/app-store-badge.svg";

// import disc from "../image/adobe.png";

// -----------------------Footer-------------
import Footer from "../component/footer/Footer";


function Home() {
  
  return (
    <div className="relative w-full h-full">
              {/* ------------Navbar------------------ */}
       <div className=" w-full mx-auto">
        
        {/* Hero section */}
        <div className="h-full relative">
        <Navbar/>
          {/* Overlay */}

          <div className="absolute w-full h-full text-white top-60 sm:top-26 md:top-20 lg:top-48  pl-4 md:pl-20 lg:pl-40 ">
            <h1 className=" text-4xl sm:text-5xl md:text-6xl lg:text-7xl
             font-bold font-bubblegum tracking-wide">Information<br/>with<br/>Entertainment</h1>
            <p className="font-bubblegum text-xl sm:text-2xl md:text-2xl lg:text-2xl text-left font-medium">Are you looking to have fun and learn at the same time?</p>
            <div className="flex gap-10 mt-10 flex-col md:flex-row">
              <a href="https://play.google.com/store/apps/details?id=dev.lowpow.defo&pli=1">
              <img className="w-36" src={playstore} alt="loading"/></a>
              <img className="w-36" src={appstore} alt="loading"/>
            </div>
          </div>
          <img className="w-full h-screen object-cover" src={hero} alt="loading"/>
        </div>

        {/* Description lines */}
        <div className=" w-full  flex justify-center bg-blue-400">
          <p className=" relative text-black font-bold bg-gradient-to-r from-3ECF7A to-blue-500 w-4/5 sm:w-2/5 text-xl   m-8">"A short video app with a subscription model can offer high-quality content and attract a loyal audience."</p>
        </div>

        {/* Discover section */}
        <div   className="w-full h-full py-20 ">
          <h1 className="text-center text-2xl sm:text-4xl md:text-4xl font-medium">Discover, Like and Save the useful videos.</h1>
          <p className="text-black text-xl md:text-xl font-medium">Discover a new way to learn and have fun at the same time!</p>
          
          {/* Discover Grid Section */}
          <div  className="place-items-center grid  w-fit gap-24 m-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  py-10 text-center">
          {discover.map((discover) =>(
            <div key={discover.id} className=" w-56 h-full shadow-2xl py-2">
              <img className="mx-auto w-28" src={discover.image} alt="loading"/>
              <h1 className="font-medium lg:text-xl">{discover.title}</h1>
              <p className="text-gray-500 font-medium">{discover.desc}</p>
            </div>
            ))}
          </div>
          

        </div>

        
        {/* Price Section */}
        <div id="pricing" className="w-full bg-green-500 py-5">
          <h1 className="text-2xl sm:text-4xl md:text-4xl font-medium text-center mt-5 ">Ready to get started?</h1>
          <p className="text-xl md:text-2xl font-medium text-black ">The only app you need for a complete Entertainment</p>

          {/* Cards */}

          <div className="flex justify-center gap-10 flex-wrap my-16 ">
            {price.map((price) =>(
            <div key={price.id} className="  rounded-2xl w-80 h-80 text-center shadow-2xl border-2  transition-all hover:scale-95">
              <h1 className="text-gray-500 font-semibold mt-10">{price.title}</h1>
              <h1 className=" mt-5 text-xl sm:text-xl md:text-xl"><span className="font-bold text-xl sm:text-2xl lg:text-4xl">{price.rate}</span>{price.valid}</h1>
              <hr/>
              <div className="flex justify-center mt-5">
              <ul className="text-left">
                <li>{price.spec1}</li>
                <li>{price.spec2}</li>
                <li>{price.spec3}</li>
              </ul>
              </div>
            </div>
            ))}
          </div>

        </div>

       </div>
      
      <Footer />
    </div>
  );
}

export default Home;
