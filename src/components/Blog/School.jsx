import React from 'react'
import './School.css'
import { Link } from 'react-router-dom'

const School = ({school,icon}) => {
  return (
    <div className='col-span-1 mb-3 mt-5 w-10/12 md:w-11/12 mx-auto border border-gray-200/30 rounded shadow-md p-3 school'>
        <div className="image">
            {icon}
        </div>
        <div className="">
            <h1 className='text-2xl font-bold my-3'>{school.name}</h1>
            <p className="desc mb-3">{school.desc} </p>
            <Link to='/' className='text-xl font-extrabold'> Enroll now</Link>
        </div>
    </div>
  )
}

export default School