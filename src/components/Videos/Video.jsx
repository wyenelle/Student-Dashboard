import React from 'react'
import './Video.css'
import {Link} from 'react-router-dom'

const Video = () => {
  return (
    <section className='mb-3'>
        <h1 className="text-2xl mb-6 font-extrabold dark:text-white">
            Videos
        </h1>
        <div className="grid grid-cols-3">
            <Link to='/' className="col-span-3 h-40 my-3 md:my-0 md:col-span-1 mx-1 shadow-md rounded-md">
                <img src='' alt='photo' className='w-full h-full'/>
            </Link >
            <Link to='/' className="col-span-3 h-40 my-3 md:my-0 md:col-span-1 mx-1 shadow-md rounded-md">
                <img src='' alt='photo' className='w-full h-full'/>
            </Link>
            <Link to='/' className="col-span-3 h-40 my-3 md:my-0 md:col-span-1 mx-1 shadow-md rounded-md">
                <img src='' alt='photo' className='w-full h-full'/>
            </Link>
        </div>
    </section>
  )
}

export default Video