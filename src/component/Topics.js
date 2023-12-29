import React, { useRef, useState, useCallback } from "react";

// Import arrow images using require
import rightarrow from "../image/topics/Frame.svg";
import leftarrow from "../image/topics/Vector.svg";

// Import images using require
import subtopic1Image from "../image/topics/Rectangle 112.svg";
import subtopic2Image from "../image/topics/Rectangle 112.svg";

import Navbar from "../component/Navbar/Navbar"
import Footer from "../component/footer/Footer"

const ScrollContainer = () => {
  const scrollContainerRef = useRef(null);
  const titleWidth = 48; // Adjust the width based on your title card width
  const titlesPerPage = 8; // Number of titles to move per click

  const topics = [
    "Cooking",
    "Editing",
    "Hairstyle",
    "Crafts",
    "Photography",
    "Travel",
    "Adibe Tools",
    "UI/UX Design Tools",
    "Paper Craft",
    "Cardboard Craft",
    "Sports",
    "Languages",
    "Decorations",
    "Kids",
    "Women's Style",
  ];

  const getSubTopicsForTitle = (title) => {
    // Mock function to get subtopics for a given title
    // You may replace this with actual logic or API calls
    switch (title) {
      case "Cooking":
        return [
          {
            name: "Chicken",
            description: "Quick and Easy Recipe for Beginners",
            imageUrl: subtopic1Image, // Use the imported image
          },
          {
            name: "Gravy",
            description: "Quick and Easy Recipe for Beginners",
            imageUrl: subtopic2Image, // Use the imported image
          },
          {
            name: "Rice",
            description: "Quick and Easy Recipe for Beginners",
            imageUrl: subtopic2Image, // Use the imported image
          },
          {
            name: "Pasta",
            description: "Quick and Easy Recipe for Beginners",
            imageUrl: subtopic2Image, // Use the imported image
          },
          {
            name: "Noodle",
            description: "Quick and Easy Recipe for Beginners",
            imageUrl: subtopic2Image, // Use the imported image
          },
          {
            name: "Milk Sweet",
            description: "Quick and Easy Recipe for Beginners",
            imageUrl: subtopic2Image, // Use the imported image
          },
          {
            name: "Sharma",
            description: "Quick and Easy Recipe for Beginners",
            imageUrl: subtopic2Image, // Use the imported image
          },
          {
            name: "Pulao",
            description: "Quick and Easy Recipe for Beginners",
            imageUrl: subtopic2Image, // Use the imported image
          },
          
          //... (more subtopics)
        ];
      case "Editing":
        return [
          {
            name: "Subtopic A",
            description: "Description for Subtopic A",
            imageUrl: subtopic2Image,
          },
          {
            name: "Subtopic B",
            description: "Description for Subtopic B",
            imageUrl: subtopic2Image,
          },
          //... (more subtopics)
        ];
      // Add more cases for other titles
      default:
        return [];
    }
  };

  // Initialize selectedTitle and subTopics with the data for the first title
  const [selectedTitle, setSelectedTitle] = useState("Cooking");
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const [subTopics, setSubTopics] = useState({
    Cooking: getSubTopicsForTitle("Cooking"),
  });
  const [visibleSubtopics, setVisibleSubtopics] = useState(3); // Initial number of visible subtopics
  const [showAllSubtopics, setShowAllSubtopics] = useState(false);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollLeft -= titleWidth * titlesPerPage;
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollLeft += titleWidth * titlesPerPage;
  };

  const handleTitleClick = useCallback(
    (title) => {
      // Only update the selected title if it's different from the current one
      if (selectedTitle !== title) {
        setSelectedTitle(title);

        // Fetch and set subtopics for the selected title (you may fetch this data from an API)
        const fetchedSubTopics = getSubTopicsForTitle(title);
        setSubTopics((prevSubTopics) => ({
          ...prevSubTopics,
          [title]: fetchedSubTopics,
        }));

        // Reset selected subtopic when a new title is clicked
        setSelectedSubtopic(null);
        // Reset visible subtopics when a new title is clicked
        setVisibleSubtopics(3);
        setShowAllSubtopics(false);
      }
    },
    [selectedTitle]
  );

  const handleSubtopicClick = (subtopic) => {
    setSelectedSubtopic(subtopic);
  };

  const handleShowMore = () => {
    setVisibleSubtopics((prev) => prev + 4); // Increase the number of visible subtopics
    setShowAllSubtopics(true);
  };

  const handleShowLess = () => {
    setVisibleSubtopics(3); // Reset the number of visible subtopics
    setShowAllSubtopics(false);
  };

  return (
    <div>
      <Navbar/>
    <div className="relative overflow-hidden">
      <h1 className="text-4xl font-bold text-center my-10" >Topics</h1>
      <style>
        {`
          .scroll-container::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <div className="w-5/6 lg:w-4/6 mx-auto flex items-center justify-between mb-4 ">
        {/* left arrow */}
        <button
          onClick={scrollLeft}
          
          className="bg-gray-400 text-white px-2 py-2  rounded-full"
        >
          <img src={leftarrow} alt="loading" className="w-5 pr-1" />
        </button>
        {/* scroll bar */}
        <div
          ref={scrollContainerRef}
          className="w-full scroll-container flex gap-x-4 py-1  mx-2 overflow-x-auto"
          style={{ scrollBehavior: "smooth" }}
        >
          {/* scroll bar titles */}
          {topics.map((color, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-fit h-fit py-1 px-4 text-xl font-medium text-white bg-blue-900 rounded-lg flex items-center justify-center cursor-pointer ${
                selectedTitle === color ? "border border-blue-500" : ""
              }`}
              onClick={() => handleTitleClick(color)}
            >
              {color}
            </div>
          ))}
        </div>
        {/* right arrow */}
        <button
          onClick={scrollRight}
          className="bg-gray-400 text-white  rounded-full"
        >
          <img src={rightarrow} alt="loading" className="w-10 pl-1"  />
        </button>
      </div>

      {selectedTitle && (
        <div className="w-5/6 lg:w-4/6 mx-auto my-10 p-2 ">
          <p className="text-2xl font-bold">{selectedTitle}</p>
          {subTopics[selectedTitle]?.slice(0, showAllSubtopics ? subTopics[selectedTitle].length : visibleSubtopics).map((subTopic, index) => (
            <div
              key={index}
              className={`cursor-pointer ${
                selectedSubtopic === subTopic.name ? "font-bold" : ""
              }`}
              onClick={() => handleSubtopicClick(subTopic.name)}
            >
              <div className="flex items-center my-5">
                <img
                  src={subTopic.imageUrl}
                  alt="loading"
                  className="w-10 h-10 mr-2"
                />
                <div>
                  <p className="text-xl font-medium ">{subTopic.name}</p>
                  <p className="text-xl font-medium ">{subTopic.description}</p>
                  <hr className="border-black " />
                </div>
                
              </div>
              
            </div>
          ))}
          {subTopics[selectedTitle]?.length > visibleSubtopics && (
            <div className="flex justify-center border border-black rounded-lg  py-1">
              {showAllSubtopics ? (
                <button onClick={handleShowLess} className= "w-full text-black font-medium  cursor-pointer">
                  Show Less
                </button>
              ) : (
                <button onClick={handleShowMore} className="w-full text-black font-medium cursor-pointer">
                  Show More
                </button>
              )}
            </div>
          )}
        </div>
      )}

      <Footer/>
    </div>
    
    </div>
  );
};

export default ScrollContainer;
