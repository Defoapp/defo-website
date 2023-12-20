import React, { useState } from "react";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/footer/Footer";

import { faqmap } from "../constants/map";

import searchimg from "../image/majesticons_search-line.svg";

const Faq = () => {
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="w-full h-full">
        {/* Page Heading */}

        <h1 className="text-4xl font-bold text-center my-10">
          Frequently Asked Questions
        </h1>

        {/* Search bar */}

        <div className="bg-gray-300 w-5/6  lg:w-3/6 flex mx-auto py-3 rounded-lg">
          <h1 className="text-2xl font-bold mx-5 my-auto">FAQ</h1>
          <div className="relative w-4/6 mx-auto z-20">
            <input
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search...."
              className="w-full px-5 py-3 rounded-full border-white z-20"
            />
            
            <button className="absolute right-1  top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-400">
              <img className="w-5 ba" src={searchimg} alt="loading" />
            </button>
          </div>
        </div>

        {/* Questions */}

        <div className="w-5/6 md:w-4/6 lg:w-4/6 mx-auto my-10 py-10  rounded-2xl  bg-gradient-to-r from-defoGreen from-[-58.97%]  to-defoBlue to-50%">
          {faqmap
            .filter((faqmap) => {
              return search.toLowerCase() === ""
                ? faqmap
                : faqmap.title.toLowerCase().includes(search.toLowerCase());
            })
            .map((faqmap) => (
              <div
                key={faqmap.id}
                className="w-5/6  mx-auto py-4 my-4  rounded-2xl  bg-white "
              >
                <details className="group mx-4">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>{faqmap.title}</span>
                    <span className="bg-blue-950 text-white  p-1 rounded-full transition group-open:rotate-180">
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
                  </summary>
                  <p className="text-neutral-600 mt-3 text-left group-open:animate-fadeIn">
                    {faqmap.answer}
                  </p>
                </details>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
