import React, { useState } from "react";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/footer/Footer";
// import { creator } from "../constants/map";
import { sampleData } from "../constants/map";

const OurCreators = () => {
  const [showItems, setShowItems] = useState(5); // Initial number of items to show

  const handleShowMore = () => {
    setShowItems((prev) => prev + 5); // Increase the number of items to show
  };

  const handleShowLess = () => {
    setShowItems(5); // Reset the number of items to show
  };

  

  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="w-full h-full">
        <h1 className="text-4xl font-bold text-center my-10">OurCreators</h1>

        <div className="w-5/6 mx-auto mt-8 my-10">
          <div className="flex flex-row flex-wrap   bg-gradient-to-r from-defoGreen from-[-58.97%]  to-defoBlue to-50%  rounded-xl }">
            {sampleData.slice(0, showItems).map((item) => (
              <div key={item.id} className=" w-62 h-full mx-auto   m-2">
                <div className="w-60 pt-2 backdrop-blur-3xl rounded-xl bg-white/30 ">
                  <img
                    className="w-56  mx-auto rounded-xl"
                    src={item.creatorimage}
                    alt="loading"
                  />
                  <h1 className="text-center text-white font-medium text-2xl bottom-6">
                    {item.name}
                  </h1>
                  <div className="w-fit mx-auto my-1">
                    <div className=" w-24  p-1 flex justify-center gap-5 ">
                      <a href={item.instalink}>
                        <img
                          className=" w-8"
                          src={item.instagram}
                          alt="loading"
                        />
                      </a>
                      <a href={item.youtubelink}>
                        <img
                          className=" w-9 "
                          src={item.youtube}
                          alt="loading"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end mt-4">
            {showItems < sampleData.length ? (
              <button
                onClick={handleShowMore}
                className="flex items-center bg-purple-200 rounded-xl px-1 text-blue-500 hover:text-blue-700 focus:outline-none"
              >
                Show More
                <span className="bg-blue-950 text-white mx-1 p-1 rounded-full transition group-open:rotate-180">
                  <svg
                    className="m-1 w-4 h-4"
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
              showItems > 3 && (
                <button
                  onClick={handleShowLess}
                  className="flex items-center bg-purple-200 rounded-xl px-1 text-blue-500 hover:text-blue-700 focus:outline-none"
                >
                  Show Less
                  <span className="bg-blue-950 text-white mx-1 p-1 rounded-full transition group-open:rotate-180">
                    <svg
                      className="m-1 w-4 h-4 transform rotate-180"
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
      <Footer />
    </div>
  );
};

export default OurCreators;
