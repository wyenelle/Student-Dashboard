import React from 'react'
import './BlogHeader.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const BlogHeader = () => {
useEffect(()=>{
AOS.init()
},[])

  return (
    <section className='w-full h-screen ' >
      <div id='header' className='flex  h-screen justify-center items-center header '>
              
      <header data-aos='zoom-in' data-aos-delay='400' data-aos-duration='700' className='p-4  w-full flex flex-col justify-evenly  h-4/5   '>
<h1 className='text-6xl md:text-6xl font-bold w-3/5'>
Learn highly sought after tech skills 
</h1><p>Earn a Diploma in highly-sought after tech skills</p>
<button className='my-2 w-3/5 md:font-extrabold font-bold border shadow-md p-3 rounded'>Explore All Schools</button>
      </header>
      <div className='w-full hidden md:block '>
        <div className="grid grid-cols-2">
          <div className="col-span-1  w-full h-60 rounded header-1">
            
          </div>
          <div className="col-span-1  w-full h-60 rounded header-2">
            
          </div>
          <div className="col-span-1  w-full h-60 rounded header-3">
            
          </div>
          <div className="col-span-1  w-full h-60 rounded header-4">
            
          </div>
        </div>
      </div>

      </div>
    </section>
  )
}

export default BlogHeader