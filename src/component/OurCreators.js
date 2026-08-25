import React, { useState } from "react";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/footer/Footer";
import { sampleData } from "../constants/map";

const OurCreators = () => {
  const [showItems, setShowItems] = useState(6);

  const handleShowMore = () => {
    setShowItems((prev) => prev + 6);
  };

  const handleShowLess = () => {
    setShowItems(6);
  };

  return (
    <div className="w-full h-full min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <div className="w-full h-full pb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center my-8 md:my-10 px-4">
            Our Creators
          </h1>

          <div className="w-11/12 md:w-5/6 max-w-6xl mx-auto mt-6 my-10">
            <div className="p-6 bg-gradient-to-r from-defoGreen from-[-58.97%] to-defoBlue to-50% rounded-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 place-items-center">
                {sampleData.slice(0, showItems).map((item) => (
                  <div key={item.id} className="w-full max-w-xs p-3">
                    <div className="pt-3 pb-4 px-3 backdrop-blur-3xl rounded-2xl bg-white/30 border border-white/20 flex flex-col items-center">
                      <img
                        className="w-full h-56 object-cover rounded-xl shadow-sm mb-3"
                        src={item.creatorimage}
                        alt={item.name}
                      />
                      <h3 className="text-center text-white font-semibold text-xl md:text-2xl mb-2">
                        {item.name}
                      </h3>
                      <div className="flex justify-center items-center gap-4 mt-1">
                        <a href={item.instalink} target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                          <img
                            className="w-7 h-7 object-contain"
                            src={item.instagram}
                            alt={`${item.name} Instagram`}
                          />
                        </a>
                        <a href={item.youtubelink} target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                          <img
                            className="w-8 h-8 object-contain"
                            src={item.youtube}
                            alt={`${item.name} YouTube`}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end mt-6">
              {showItems < sampleData.length ? (
                <button
                  onClick={handleShowMore}
                  className="flex items-center gap-2 bg-slate-700 hover:bg-slate-800 text-white rounded-full px-5 py-2 text-sm font-medium transition-colors focus:outline-none"
                >
                  <span>Show More</span>
                  <span className="bg-blue-950 text-white p-1 rounded-full">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
              ) : (
                showItems > 6 && (
                  <button
                    onClick={handleShowLess}
                    className="flex items-center gap-2 bg-slate-700 hover:bg-slate-800 text-white rounded-full px-5 py-2 text-sm font-medium transition-colors focus:outline-none"
                  >
                    <span>Show Less</span>
                    <span className="bg-blue-950 text-white p-1 rounded-full">
                      <svg
                        className="w-4 h-4 transform rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurCreators;
