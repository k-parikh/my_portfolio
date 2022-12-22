import React from 'react'
import WorkImg from '../assets/workImg.jpeg'
import RealEstate from '../assets/realestate.jpg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#ECF0F1]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 pt-9'>
            <div 
                style={{backgroundImage: `url(${WorkImg})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-80'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Grade Calculator
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div 
                style={{backgroundImage: `url(${RealEstate})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-80'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Project 2
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div 
                style={{backgroundImage: `url(${WorkImg})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-80'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Project 3
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div 
                style={{backgroundImage: `url(${RealEstate})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-80'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Project 4
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div 
                style={{backgroundImage: `url(${WorkImg})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-80'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Project 5
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div 
                style={{backgroundImage: `url(${RealEstate})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-80'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Project 6
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Work
