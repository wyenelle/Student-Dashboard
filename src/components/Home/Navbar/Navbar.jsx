import React from 'react'
import {Link, } from 'react-router-dom'
import {FaMoon,FaSun} from 'react-icons/fa'

const Navbar = ({darkMode,toggleDarkMode}) => {

  return (
   <div className="flex w-11/12 justify-between text-white dark:bg-gray-800 dark:text-white align-center mx-auto py-3 items-center my-0 px-4">
     <div className="school-name flex flex-col">
     <div className="alt">
        <h1 className='font-extrabold text-4xl'>Alt ____</h1>
        
     </div>
     <h2 className="font-bold text-white text-4xl tracking-wider"> School</h2>
     </div>

      <div className="flex justify-between gap-4 align-center">

      <button className='md:hidden' onClick={toggleDarkMode}>{
        darkMode ? <FaSun size={30} /> : <FaMoon size={30} className=' text-yellow-400' />
      }</button>

      <Link to='/login' className='border-2 font-bold hidden sm:block text-red-500 border-red-500 p-1 w-24 text-center rounded-md shadow-md'> 
      Logout</Link>
   </div>
</div>
  )
}

export default Navbar