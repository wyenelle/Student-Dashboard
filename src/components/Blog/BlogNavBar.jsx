import React from 'react'
import { Link } from 'react-router-dom'

const BlogNavBar = () => {
  return (
    <nav className=' bg-black border fixed z-10 border-black h-20 p-3 flex text-white items-center  w-full '>
      <div className="flex w-full  justify-between items-center py-3">
        <div className="brand">
        <h1 className='font-extrabold text-3xl'>Alt ____</h1>
        <h2 className="font-bold text-white text-3xl tracking-wider"> School</h2>
        </div>
        <div className="hamburger hidden md:block">
          some text
        </div>
        <div className="nav-buttons ">
          <Link className='border border-gray-300/40 h-10 font-extrabold' to='login'>Log in</Link>
        </div>
      </div>
    </nav>
  )
}

export default BlogNavBar