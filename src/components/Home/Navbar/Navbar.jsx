import React from 'react'
import {Link, } from 'react-router-dom'

const Navbar = ({darkMode,toggleDarkMode}) => {

  return (
   <div className="flex w-11/12 justify-between dark:bg-gray-800 dark:text-white align-center mx-auto py-3 items-center my-0 px-4">
     <h2>AltSchool</h2>

      <div className="flex justify-between gap-4 align-center">

      <button className='' onClick={toggleDarkMode}>{
        darkMode ? 'Day' : 'Night'
      }</button>

      <Link to='/' className='border-2 p-1 w-24 text-center rounded-md shadow-md'> 
      log out</Link>
   </div>
</div>
  )
}

export default Navbar