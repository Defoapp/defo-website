import React, { useRef, useState, useEffect, useCallback } from "react";

// Import arrow images using require
import rightarrow from "../image/topics/Frame.svg";

// Import images using require
import subtopic1Image from "../image/topics/Rectangle 112.svg";
import subtopic2Image from "../image/topics/Rectangle 112.svg";

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
        ];
      case "Editing":
        return [
          {
            name: "Subtopic A",
            description: "Description for Subtopic A",
            imageUrl:  subtopic2Image,
          },
          {
            name: "Subtopic B",
            description: "Description for Subtopic B",
            imageUrl:  subtopic2Image,
          },
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
      }
    },
    [selectedTitle]
  );

  useEffect(() => {
    // Set the first title as selected and show its subtopics initially
    handleTitleClick(selectedTitle);
  }, [handleTitleClick, selectedTitle]);

  const handleSubtopicClick = (subtopic) => {
    setSelectedSubtopic(subtopic);
  };



  return (
    <div className="relative overflow-hidden">
      <style>
        {`
          .scroll-container::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <div className="w-4/6 mx-auto flex items-center justify-between mb-4 ">
        {/* left arrow */}
        <button
          onClick={scrollLeft}
          className="bg-gray-400 text-white  rounded-full"
        >
          <img src={rightarrow} alt="loading" />
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
          <img src={rightarrow} alt="loading" />
        </button>
      </div>

      {selectedTitle && (
        <div className="w-4/6 mx-auto mt-4 p-2 ">
          <p className="text-lg font-semibold">
             {selectedTitle}
          </p>
          {subTopics[selectedTitle]?.map((subTopic, index) => (
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
        </div>
      )}
    </div>
  );
};

export default ScrollContainer;
