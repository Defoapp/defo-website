import React, { useState } from "react";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/footer/Footer";
import { creator } from "../constants/map";

const OurCreators = () => {
  const [noOfElement, setnoOfElement] = useState(5);
  const loadMore = () => {
    setnoOfElement(noOfElement + noOfElement);
  };

  const slice = creator.cardData.slice(0, noOfElement);
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="w-full h-full">
        <h1 className="text-4xl font-bold text-center my-10">OurCreators</h1>

        <div className="w-5/6 h-full mx-auto my-10">
          <p className="text-black text-xl font-bold text-left">Hair Style</p>
          <div className="flex gap-2 px-2 py-2 flex-wrap my-10 bg-gradient-to-r from-defoGreen from-[-58.97%]  to-defoBlue to-50%  rounded-xl">
            {slice.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-62 h-full mx-auto  my-2 "
                >
                  <div className="w-60 px-4 py-4 backdrop-blur-3xl rounded-xl bg-white/30 ">
                    <img
                      className="w-60  mx-auto rounded-xl"
                      src={item.creatorimage}
                      alt="loading"
                    />
                    <h1 className="text-center text-white font-medium text-2xl bottom-6">
                      {item.name}
                    </h1>
                    <div className="w-fit mx-auto my-2">
                      
                        <div className=" w-24  p-1 flex justify-center gap-5 ">
                        <a href={item.instalink}>
                          <img
                            className=" w-full"
                            src={item.instagram}
                            alt="loading"
                          /></a>
                          <a href={item.youtubelink}>
                          <img
                            className=" w-full "
                            src={item.youtube}
                            alt="loading"
                          />
                          </a>
                        </div>
                      
                    </div>
                  </div>
                </div>
              );
            })}
            
          </div>
          <div className="ml-auto">
            <button
              onClick={() => loadMore()}
              className="w-30 bg-gray-500  flex rounded-full p-2  text-white"
            >
              Show more
              <span className=" my-auto bg-blue-900 mx-1 text-white  rounded-full transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </button>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurCreators;
