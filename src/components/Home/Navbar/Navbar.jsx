import React from 'react'
import {Link, } from 'react-router-dom'

const Navbar = ({darkMode,toggleDarkMode}) => {

  return (
   <div className="flex w-11/12 justify-between text-white dark:bg-gray-800 dark:text-white align-center mx-auto py-3 items-center my-0 px-4">
     <div className="school-name w-1/4">
     <h2 className='text-4xl font-bold text-white '>Alt ____  </h2>
     <h2 className="font-bold text-white text-4xl"> School</h2>
     </div>

      <div className="flex justify-between gap-4 align-center">

      <button className='md:hidden' onClick={toggleDarkMode}>{
        darkMode ? 'Day' : 'Night'
      }</button>

      <Link to='/' className='border-2 p-1 w-24 text-center rounded-md shadow-md'> 
      log out</Link>
   </div>
</div>
  )
}

export default Navbar