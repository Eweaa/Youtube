import React from 'react'

const Navbar: React.FC = () => {
  return (
    <div className='p-8 flex'>
        <button>x</button>
        <div className='flex'>
            <div className='rounded-full p-2 border border-gray-500 mr-2'>
                <input type='text' placeholder='Search' className='bg-transparent outline-none'/>
                <button className='rounded-full'>🔍</button>
            </div>
            <button className='rounded-full bg-black'>🎙️</button>
        </div>
    </div>
  )
}

export default Navbar;