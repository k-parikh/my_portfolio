import React from 'react'
import Logo from '../assets/klogo.png'

const Blog = () => {
  return (
    <div name='blog' className='w-full h-screen bg-[#ECF0F1] text-black'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='w-full grid grid-cols-1 sm:grid-cols-1 gap-4 text-left py-8 pt-10'>
            <div className='bg-[#ECF0F1] shadow-md shadow-[#040c16] hover:scale-110 duration-500 pl-4 pb-1'>
                <div className='pr-4'>
                    <img align="right" src={Logo} alt="Image" style={{width: '50px'}}/>
                </div>
                <h2 className='my-2'><small><small><strong>Kunaal Parikh</strong> - December 21, 2022</small></small></h2>
                <h1><strong>Sample Article</strong></h1>
                <h2 className='my-2'><small><small>This is a sample article that does not contain any information.</small></small></h2>
                <button className='text-black border-2 hover:bg-gray-400 hover:border-gray-300 px-2 py-2 my-2 mx-auto flex'><small>Read Full Post</small></button>
            </div>
            <div className='bg-[#ECF0F1] shadow-md shadow-[#040c16] hover:scale-110 duration-500 pl-4 pb-1'>
                <div className='pr-4'>
                    <img align="right" src={Logo} alt="Image" style={{width: '50px'}}/>
                </div>
                <h2 className='my-2'><small><small><strong>Kunaal Parikh</strong> - December 21, 2022</small></small></h2>
                <h1><strong>Sample Article</strong></h1>
                <h2 className='my-2'><small><small>This is a sample article that does not contain any information.</small></small></h2>
                <button className='text-black border-2 hover:bg-gray-400 hover:border-gray-300 px-2 py-2 my-2 mx-auto flex'><small>Read Full Post</small></button>
            </div>
            <div className='bg-[#ECF0F1] shadow-md shadow-[#040c16] hover:scale-110 duration-500 pl-4 pb-1'>
                <div className='pr-4'>
                    <img align="right" src={Logo} alt="Image" style={{width: '50px'}}/>
                </div>
                <h2 className='my-2'><small><small><strong>Kunaal Parikh</strong> - December 21, 2022</small></small></h2>
                <h1><strong>Sample Article</strong></h1>
                <h2 className='my-2'><small><small>This is a sample article that does not contain any information.</small></small></h2>
                <button className='text-black border-2 hover:bg-gray-400 hover:border-gray-300 px-2 py-2 my-2 mx-auto flex'><small>Read Full Post</small></button>
            </div>   
        </div>
      </div>
    </div>
  )
}

export default Blog
