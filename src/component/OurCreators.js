import React, { useState } from "react";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/footer/Footer";
import { creator } from "../constants/map";

const OurCreators = () => {
  const [noOfElement, setnoOfElement] = useState(6);
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
          <div className="flex gap-2 px-2 flex-wrap my-10 bg-gradient-to-r from-defoGreen from-[-58.97%]  to-defoBlue to-50%  ">
            {slice.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-62 h-full mx-auto  my-2 "
                >
                  <div className="w-full px-4 py-2 backdrop-blur-3xl bg-white/30 ">
                    <img
                      className="w-full  mx-auto rounded-full"
                      src={item.creatorimage}
                      alt="loading"
                    />
                    <h1 className="text-center text-white font-medium text-2xl bottom-6">
                      {item.name}
                    </h1>
                    <div className="w-fit mx-auto my-2">
                      <a href={item.instalink}>
                        <div className="bg-black w-10  p-1 rounded-full ">
                          <img
                            className=" w-8"
                            src={item.mediaimg}
                            alt="loading"
                          />
                        </div>
                      </a>
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
