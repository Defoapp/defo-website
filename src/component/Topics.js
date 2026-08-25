import React, { useRef, useState, useCallback } from "react";

// Import arrow images
import rightarrow from "../image/topics/Frame.svg";
import leftarrow from "../image/topics/Vector.svg";

// Import subtopic image
import subtopic1Image from "../image/topics/Rectangle 112.svg";
import subtopic2Image from "../image/topics/Rectangle 112.svg";

import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/footer/Footer";

const ScrollContainer = () => {
  const scrollContainerRef = useRef(null);

  const topics = [
    "Cooking",
    "Editing",
    "Hairstyle",
    "Crafts",
    "Photography",
    "Travel",
    "Adobe Tools",
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
    switch (title) {
      case "Cooking":
        return [
          { name: "Chicken", description: "Quick and Easy Recipe for Beginners", imageUrl: subtopic1Image },
          { name: "Gravy", description: "Rich & Flavorful Homemade Gravies", imageUrl: subtopic2Image },
          { name: "Rice", description: "Perfect Steamed & Flavored Rice Dishes", imageUrl: subtopic2Image },
          { name: "Pasta", description: "Delicious Italian Pasta Recipes", imageUrl: subtopic2Image },
          { name: "Noodle", description: "Stir-fried Noodles & Ramen Guides", imageUrl: subtopic2Image },
          { name: "Milk Sweet", description: "Traditional Sweets & Desserts", imageUrl: subtopic2Image },
          { name: "Shawarma", description: "Juicy Street Style Shawarmas", imageUrl: subtopic2Image },
          { name: "Pulao", description: "Aromatic Spice Pulao Recipes", imageUrl: subtopic2Image },
        ];
      case "Editing":
        return [
          { name: "Video Color Grading", description: "Mastering Cinematic Tones & LUTs", imageUrl: subtopic1Image },
          { name: "Transitions & Effects", description: "Smooth Seamless Video Transitions", imageUrl: subtopic2Image },
          { name: "Audio Mixing", description: "Crisp Audio & Background Score Tips", imageUrl: subtopic2Image },
          { name: "Motion Graphics", description: "2D & 3D Title Animations", imageUrl: subtopic2Image },
        ];
      default:
        return [
          { name: `${title} Basics`, description: `Essential guides and tips for ${title}`, imageUrl: subtopic1Image },
          { name: `Advanced ${title}`, description: `Step-by-step masterclass tutorials`, imageUrl: subtopic2Image },
          { name: `${title} Hacks`, description: `Quick tips and tricks to level up`, imageUrl: subtopic1Image },
          { name: `${title} Ideas`, description: `Creative inspiration for your next project`, imageUrl: subtopic2Image },
        ];
    }
  };

  const [selectedTitle, setSelectedTitle] = useState("Cooking");
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const [subTopics, setSubTopics] = useState({
    Cooking: getSubTopicsForTitle("Cooking"),
  });
  const [visibleSubtopics, setVisibleSubtopics] = useState(3);
  const [showAllSubtopics, setShowAllSubtopics] = useState(false);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const handleTitleClick = useCallback(
    (title) => {
      if (selectedTitle !== title) {
        setSelectedTitle(title);
        const fetchedSubTopics = getSubTopicsForTitle(title);
        setSubTopics((prev) => ({
          ...prev,
          [title]: fetchedSubTopics,
        }));
        setSelectedSubtopic(null);
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
    setVisibleSubtopics((prev) => prev + 4);
    setShowAllSubtopics(true);
  };

  const handleShowLess = () => {
    setVisibleSubtopics(3);
    setShowAllSubtopics(false);
  };

  const activeSubtopics = subTopics[selectedTitle] || [];

  return (
    <div className="w-full h-full min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <div className="relative overflow-hidden py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center my-6 md:my-10 px-4">
            Topics
          </h1>

          <div className="w-11/12 md:w-5/6 lg:w-4/6 mx-auto flex items-center justify-between gap-2 mb-6">
            {/* left arrow */}
            <button
              onClick={scrollLeft}
              className="bg-gray-400 hover:bg-gray-500 text-white p-2 rounded-full flex-shrink-0 transition-colors"
              aria-label="Scroll left"
            >
              <img src={leftarrow} alt="Left arrow" className="w-4 h-4 object-contain" />
            </button>

            {/* scroll bar */}
            <div
              ref={scrollContainerRef}
              className="w-full flex gap-3 py-2 px-1 mx-2 overflow-x-auto scrollbar-none"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {topics.map((topicName, index) => (
                <button
                  key={index}
                  className={`flex-shrink-0 py-2 px-5 text-base md:text-lg font-medium text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-all cursor-pointer ${
                    selectedTitle === topicName ? "ring-2 ring-blue-400 font-bold bg-blue-950" : ""
                  }`}
                  onClick={() => handleTitleClick(topicName)}
                >
                  {topicName}
                </button>
              ))}
            </div>

            {/* right arrow */}
            <button
              onClick={scrollRight}
              className="bg-gray-400 hover:bg-gray-500 text-white p-2 rounded-full flex-shrink-0 transition-colors"
              aria-label="Scroll right"
            >
              <img src={rightarrow} alt="Right arrow" className="w-4 h-4 object-contain" />
            </button>
          </div>

          {selectedTitle && (
            <div className="w-11/12 md:w-5/6 lg:w-4/6 mx-auto my-6 p-4 bg-white rounded-xl shadow-sm border">
              <h2 className="text-2xl font-bold text-gray-900 border-b pb-3 mb-4">
                {selectedTitle}
              </h2>
              <div className="space-y-4">
                {activeSubtopics
                  .slice(0, showAllSubtopics ? activeSubtopics.length : visibleSubtopics)
                  .map((subTopic, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border hover:bg-gray-50 transition-colors cursor-pointer ${
                        selectedSubtopic === subTopic.name ? "border-blue-500 bg-blue-50/50" : "border-gray-200"
                      }`}
                      onClick={() => handleSubtopicClick(subTopic.name)}
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={subTopic.imageUrl}
                          alt={subTopic.name}
                          className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                        />
                        <div>
                          <p className="text-lg font-semibold text-gray-900">{subTopic.name}</p>
                          <p className="text-sm md:text-base text-gray-600">{subTopic.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {activeSubtopics.length > visibleSubtopics && (
                <div className="flex justify-center mt-6">
                  {showAllSubtopics ? (
                    <button
                      onClick={handleShowLess}
                      className="border border-black px-6 py-2 rounded-lg text-black font-medium hover:bg-gray-100 transition-colors"
                    >
                      Show Less
                    </button>
                  ) : (
                    <button
                      onClick={handleShowMore}
                      className="border border-black px-6 py-2 rounded-lg text-black font-medium hover:bg-gray-100 transition-colors"
                    >
                      Show More
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ScrollContainer;
