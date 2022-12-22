import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#ECF0F1] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/8d6e0c89-dee2-4f2a-9f13-4dec0a7b7a8a" className='flex flex-col max-w-[600px] w-full'>
        <input className='bg-[#89d5d2] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#89d5d2] p-2' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#89d5d2] p-2' type="message" rows="10" placeholder='Message'></textarea>
        <button className='text-black border-2 hover:bg-gray-400 hover:border-gray-300 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
