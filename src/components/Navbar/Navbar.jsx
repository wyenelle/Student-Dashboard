import React from 'react'

const Navbar = ({darkMode,toggleDarkMode}) => {
  return (
   <div className="flex w-11/12 justify-between dark:bg-gray-800 dark:text-white align-center mx-auto py-3 items-center my-0 px-4">
     <h2>AltSchool</h2>


     <button className='' onClick={toggleDarkMode}>{
        darkMode ? 'Day' : 'Night'
      }</button>
   </div>
  )
}

export default Navbar