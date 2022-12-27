import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import './BlogCollab.css'
const BlogCollab = () => {
  return (
    <section className='bg-black grid grid-cols-3 w-full h-auto p-5'>
            <div className="collab text-white text-3xl font-bold col-span-3 md:col-span-1 mb-5 md:flex items-center">
<h1 className='capitalize'>Collaborate with us</h1>
            </div>
            <div className="text-white col-span-3 md:pr-7 md:pt-5 md:col-span-2 md:flex items-start font-bold md:flex-col">
Interested in inspiring the next generation of top software engineers ? Collaborte with us. We are committed to helping as many young Africans Kickstart a career in technology by providing them with access to quality technical education by real world expert
<button className='w-8/12 bg-white text-black flex justify-center items-center font-bold uppercase rounded my-9 p-3'>learn more <AiOutlineArrowRight className='ml-5 font-bold arrow' /> </button>
            </div>
    </section>
  )
}

export default BlogCollab