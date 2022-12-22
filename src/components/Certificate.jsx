import React from 'react'
import IBM from '../assets/ibm.png'
import Google from '../assets/google.png'

const Certificate = () => {
  return (
    <div name='certificate' className='w-full h-screen bg-[#ECF0F1] text-gray-300'>
        {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
            <div className='bg-[#424949] shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4'>
                <img className='w-30 h-20 pl-10' src={IBM} alt="IBM icon" />
                <p className='my-4'>IBM Full Stack Software Developer Professional Certificate</p>
            </div>
            <div className='bg-[#424949] shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4'>
                <img className='w-20 mx-auto' src={Google} alt="Google icon" />
                <p className='my-4'>Google Data Analytics Professional Certificate</p>
            </div>            
        </div>
      </div>
    </div>
  )
}

export default Certificate
