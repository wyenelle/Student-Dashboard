import React from 'react'
import './BlogAbout.css'
import AltGirl from '../../assets/alt-girl.jpeg'
import {FaAngleDoubleRight} from 'react-icons/fa'
const BlogAbout = () => {

  return (
    <section  className="w-full">
      <div className='w-full'>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 ">
        <div className="col-span-1 h-full">
         <img src={AltGirl} alt='piture of a girl studying' className='h-full w-full'/>
        </div>
        <div className="col-span-1 py-3 pl-5 md:py-8 md:pl-8 w-10/12">
          <h1 className="font-extrabold capitalize my-2 text-3xl">
              Shaping the future of work
          </h1>
        <p className="my-2 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores fuga id provident totam. Sit ratione dolorum provident quo tenetur quos!zz
        </p>

        <p className="my-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores fuga id provident totam. Sit ratione dolorum provident quo tenetur quos!zz
        </p>


        <button className='bg-black h-10 text-white w-4/5 py-6 px-2 my-5 text-xl font-extrabold rounded shadow-md flex justify-start gap-2 items-center '> Find out more
        <FaAngleDoubleRight size={20} className='text-white arrow-right'/>
        </button>
        </div>
      </div>
    </div>
    </section>
  )
}

export default BlogAbout