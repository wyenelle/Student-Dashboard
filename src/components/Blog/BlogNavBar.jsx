import React from 'react'
import { Link } from 'react-router-dom'

const BlogNavBar = () => {
  return (
    <nav className=' bg-black border border-black h-20 p-3 flex text-white items-center absolute w-full'>
      <div className="flex w-full  justify-between ">
        <div className="brand">
ALTSCHOOL
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