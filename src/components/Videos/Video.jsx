import React from 'react'
import './video.css'
import {Link} from 'react-router-dom'
import {linkDetails} from './data'


const Video = () => {
    

    
  return (
    <section className='mb-3'>
        <h1 className="text-2xl mb-6 font-extrabold dark:text-white">
            Videos
        </h1>
        <div className="grid grid-cols-3">
            {
                linkDetails.map(link => (
                    <a href={link.src} 
                    key={link.id} 
                    title={link.title}
                    className="col-span-3 h-40 my-3 md:my-0 md:col-span-1 mx-1 shadow-md rounded-md">
                <img src={link.image}  alt='photo' className='w-full h-full'/>
            </a >
                ))
            }
            
        
        </div>
    </section>
  )
}

export default Video