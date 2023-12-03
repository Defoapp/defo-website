import React from 'react'
import Navbar from "../component/Navbar/Navbar"
import Footer from "../component/footer/Footer"

// map
import {heads} from "../constants/map"
import {teamsMembers} from "../constants/map"

import team from "../image/ourTeams/teams Illustation.svg"


const OurTeams = () => {
  return (
    <div className='relative w-full h-full'>
      
      <div className='w-full mx-auto'>
      <Navbar/>
        {/* hero section */}
      <div className='relative w-5/6  mx-auto  flex flex-col justify-center items-center h-screen'>
      
        <div>
        <h1 className='mb-12 text-4xl md:text-2xl lg:text-4xl font-bold text-center'>Our Team</h1>
        <img className='w-full  lg:w-3/6 m-auto' src={team} alt='loading'/></div>
        <div>
        <h1 className='text-black text-center w-fit h-fit  text-xl md:text-2xl lg:text-2xl font-semibold mt-9'>Behind every success story, there's a dedicated team of individuals who are passionate about making a difference. Meet the incredible people who make up Defo's team – a diverse group of talents, united by a shared commitment to our mission.</h1>
        </div>
      </div>

      {/* heads section  */}
      <div className='w-full h-full border-green-600 border-2 '>
        <div className=' text-center'>
        <h1 className='text-black text-xl md:text-2xl lg:text-4xl font-bold mt-10'>Meet Our Heads</h1>
        <div className='flex justify-center  gap-10 flex-wrap my-16  '>
        {heads.map((heads) =>(
          <div key={heads.id} className='border-2 border-black p-3  rounded-2xl flex justify-center flex-col transition-all hover:scale-95'>
            <img className='w-3/4 mx-auto' src={heads.image} alt='loading'/>
            <h1 className='text-lg md:text-xl lg:text-2xl font-semibold mt-5'>{heads.name}</h1>
            <h1 className='text-lg md:text-xl lg:text-2xl font-semibold '>{heads.designation}</h1>
            <p className='text-black text-base md:text-lg lg:text-xl font-medium'>{heads.desc1}<br/>{heads.desc2}</p>
            <img className='w-8 mx-auto bg-b mt-2 cursor-pointer' src={heads.linkedin} alt='loading'/>
          </div>
          ))}
        </div>
        </div>
        
      </div>

      {/* Team Members */}
      <div className='w-full h-full pb-16 '>
        <h1 className='my-10 py-5 text-center w-full text-white text-xl md:text-2xl lg:text-4xl bg-gradient-to-r from-defoGreen from-[-58.97%]  to-defoBlue to-50%'>Team Members</h1>

        <div className='place-items-center gap-y-10  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:px-28'>
        {teamsMembers.map((teamsMembers) =>(
          <div key={teamsMembers.id} className=' w-fit text-center'>
            <img className='w-4/6 mx-auto' src={teamsMembers.image} alt='loading'/>
            <h1 className='font-bold text-xl md:text-2xl lg:4xl mt-5  '>{teamsMembers.name}</h1>
            <h1 className='font-bold text-lg md:text-xl lg:text-xl'>{teamsMembers.designation} </h1>
            <img className='w-10 mx-auto mt-5' src={teamsMembers.linkedin} alt='loading'/>
          </div >
          ))}



        </div>
        
      </div>
      <Footer/>
      </div>
    </div>
  )
}

export default OurTeams