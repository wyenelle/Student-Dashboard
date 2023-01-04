import React from 'react'
import './BlogAbout.css'
import {FaAngleDoubleRight} from 'react-icons/fa'
const BlogAbout = () => {
const styles = {
  backgroundColor : '#eee'
}
  return (
    <section style={styles} className="w-full">
      <div className='w-full'>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 pl-5">
        <div className="col-span-1">
        <h1 className=" font-extrabold text-xl">Shaping The Future Of Work</h1>
        </div>
        <div className="col-span-1">
        <p className="my-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores fuga id provident totam. Sit ratione dolorum provident quo tenetur quos!zz
        </p>

        <p className="my-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores fuga id provident totam. Sit ratione dolorum provident quo tenetur quos!zz
        </p>


        <button className='bg-black text-white w-2/5 p-2 my-5 font-bold rounded shadow-md flex justify-center gap-2 items-center '> Find out more
        <FaAngleDoubleRight size={20} className='text-white arrow-right'/>
        </button>
        </div>
      </div>
    </div>
    </section>
  )
}

export default BlogAbout