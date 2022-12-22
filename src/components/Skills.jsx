import React from 'react'

import HTML from '../assets/html.png';
import JavaScript from '../assets/javascript.png';
import GitHub from '../assets/github.png';
import Java from '../assets/java.png';
import Python from '../assets/python.png';
import CPlusPlus from '../assets/cplusplus.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#ECF0F1] text-gray-300'>
        {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
            <div className='bg-[#424949] shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4'>
                <img className='w-20 mx-auto' src={CPlusPlus} alt="C++ icon" />
                <p className='my-4'>C++</p>
            </div>
            <div className='bg-[#424949] shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4'>
                <img className='w-20 mx-auto' src={Python} alt="Python icon" />
                <p className='my-4'>PYTHON</p>
            </div>
            <div className='bg-[#424949] shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4'>
                <img className='w-20 mx-auto' src={Java} alt="Java icon" />
                <p className='my-4'>JAVA</p>
            </div>
            <div className='bg-[#424949] shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4'>
                <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                <p className='my-4'>JAVASCRIPT</p>
            </div>
            <div className='bg-[#424949] shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4'>
                <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon" />
                <p className='my-4'>GITHUB</p>
            </div>
            <div className='bg-[#424949] shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4'>
                <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                <p className='my-4'>HTML</p>
            </div>            
        </div>
      </div>
    </div>
  )
}

export default Skills
