import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Info = ({list,icons}) => {
  useEffect(()=>{
    AOS.init()
    AOS.refresh()
  },[])


  return (
    <div className='grid grid-cols-4 gap-4 my-4 text-start my-5' data-aos='zoom-in'>
        <p>{icons}</p>
        <h2 className=' col-span-3 text-start'>{list}</h2>
    </div>
  )
}

export default Info


