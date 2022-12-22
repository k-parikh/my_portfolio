import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import WorkImg from '../assets/workImg.jpeg'
import back from '../assets/bground.jpg'

const Home = () => {
  return (
    <div name='home' className="h-screen w-full text-center bg-[url('/src/assets/bground.jpg')]">
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h1 className='text-6xl sm:text-7xl font-bold text-gray-100'>
          EMBRACE THE OPPROTUNITY TO LEARN SOMETHING NEW EVERY DAY 
        </h1>
      </div>
    </div>
  )
}

export default Home
