import React from 'react'
import HB from '../assets/HB.jpg'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#ECF0F1] text-black'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <img src={HB} alt="" style={{width:"150px"}}/>
            <h1 className='pt-5'>
                Welcome to my digital portfolio! My name is Kunaal Parikh. I’m from Frisco, Texas, and I am an Sophomore Engineering student at Texas A&M University.
            </h1>
        </div>
    </div>
  )
}

export default About
