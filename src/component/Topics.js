import React, { useState } from 'react';
import Navbar from "./Navbar/Navbar"
import Footer from "./footer/Footer"

const HorizontalScrollList = () => {
  const items = ['Cooking', 'Editing', 'Hairstyle', 'Crafts','Photography', 'Travel', 'Design', 'Item4','Item1', 'Item2', 'Item3', 'Item4','Item1', 'Item2', 'Item3', 'Item4',];

  // Define sub-items with descriptions for each item
  const subItemsMap = {
    'Cooking': [
      { name: 'Chicken', description: 'Quick and Easy Recipe for Beginners' },
      { name: 'Biriyani', description: 'Quick and Easy Recipe for Beginners' },
      { name: 'Grevey', description: 'Quick and Easy Recipe for Beginners' },
    ],
    'Editing': [
      { name: 'Chicken', description: 'Quick and Easy Recipe for Beginners' },
      { name: 'Biriyani', description: 'Quick and Easy Recipe for Beginners' },
      { name: 'Grevey', description: 'Quick and Easy Recipe for Beginners' },
    ],
    'Hairstyle': [
      { name: 'Chicken', description: 'Quick and Easy Recipe for Beginners' },
      { name: 'Biriyani', description: 'Quick and Easy Recipe for Beginners' },
      { name: 'Grevey', description: 'Quick and Easy Recipe for Beginners' },
    ],
    'Crafts': [
      { name: 'Chicken', description: 'Quick and Easy Recipe for Beginners' },
      { name: 'Biriyani', description: 'Quick and Easy Recipe for Beginners' },
      { name: 'Grevey', description: 'Quick and Easy Recipe for Beginners' },
    ],
    'Photography': [
      { name: 'Chicken', description: 'Quick and Easy Recipe for Beginners' },
      { name: 'Biriyani', description: 'Quick and Easy Recipe for Beginners' },
      { name: 'Grevey', description: 'Quick and Easy Recipe for Beginners' },
    ],
    'Travel': [
      { name: 'Chicken', description: 'Quick and Easy Recipe for Beginners' },
      { name: 'Biriyani', description: 'Quick and Easy Recipe for Beginners' },
      { name: 'Grevey', description: 'Quick and Easy Recipe for Beginners' },
    ],
    'Design': [
      { name: 'Chicken', description: 'Quick and Easy Recipe for Beginners' },
      { name: 'Biriyani', description: 'Quick and Easy Recipe for Beginners' },
      { name: 'Grevey', description: 'Quick and Easy Recipe for Beginners' },
    ],
    // 'Item 5': [
    //     { name: 'Sub-item 1A', description: 'Description for Sub-item 1A' },
    //     { name: 'Sub-item 1B', description: 'Description for Sub-item 1B' },
    //     { name: 'Sub-item 1C', description: 'Description for Sub-item 1C' },
    //   ],
    //   'Item 6': [
    //     { name: 'Sub-item 2A', description: 'Description for Sub-item 2A' },
    //     { name: 'Sub-item 2B', description: 'Description for Sub-item 2B' },
    //     { name: 'Sub-item 2C', description: 'Description for Sub-item 2C' },
    //   ],
    //   'Item 7': [
    //     { name: 'Sub-item 3A', description: 'Description for Sub-item 3A' },
    //     { name: 'Sub-item 3B', description: 'Description for Sub-item 3B' },
    //     { name: 'Sub-item 3C', description: 'Description for Sub-item 3C' },
    //   ],
    //   'Item 8': [
    //     { name: 'Sub-item 4A', description: 'Description for Sub-item 4A' },
    //     { name: 'Sub-item 4B', description: 'Description for Sub-item 4B' },
    //     { name: 'Sub-item 4C', description: 'Description for Sub-item 4C' },
    //   ],
  };

  // Initialize selected item with the first item
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <Navbar/>
    <div className="flex flex-col items-center">
      <div  className="overflow-x-scroll scrollbar-thin  scrollbar-thumb-blue-950 scrollbar-track-gray-300 w-4/6  p-4 mb-4">
        <ul className="flex ">
          {items.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer w-fit mx-3 px-3 py-1 text-xl font-semibold text-center border bg-gray-200 rounded-lg ${selectedItem === item ? 'bg-green-500  text-white' : ''}`}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {selectedItem && (
        <div className="my-4 w-4/6 h-full flex  ">
          
          <div className="flex flex-col w-4/6 ">
          <h3 className="text-2xl  font-bold mb-2 ">{selectedItem}</h3>
            {subItemsMap[selectedItem].map((subItem, index) => (
              <div key={index} className=''>
                
                <h4 className="text-2xl font-medium mb-2">{subItem.name}</h4>
                <p className='text-xl'>{subItem.description}</p>
                <hr className='border-black'/>
              </div>
              
            ))}
          </div>
          <div className='w-2/6 h-full '>

          </div>
        </div>
      )}
    </div>
    <Footer/>
    </div>
  );
};

export default HorizontalScrollList;
