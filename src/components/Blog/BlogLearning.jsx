import React from 'react'
import {FaAngleDoubleRight} from 'react-icons/fa'
import Guy from '../../assets/black-student.jpeg'
import './BlogLearning.css'

const BlogLearning = () => {
    const styles = {
        borderRadius: '50%'
    }
  return (
    <section className='w-full bg-black '>
        <div className="w-full  h-80 px-3 py-4 grid grid-cols-2">
            <div className="col-span-1 hidden overflow-hidden sm:block">
                    <div  className="w-full h-full guy  py-2 flex justify-center items-center">
                        <img src={Guy} style={styles} className=' w-60 h-60' alt='student'/>
                    </div>
                </div>
            <div className="col-span-2 md:col-span-1 overflow-scroll text-white py-5 px-7   ">
                <div className="section  mt-3">
                    <h1 className='font-extrabold text-2xl my-3 w-3/5'>Want better work opprotunities ? we're your best bet</h1>
                    <p className='my-3 w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae dicta facere placeat perspiciatis accusamus explicabo aut beatae voluptatibus odit. </p>

                    <button className=' p-3 my-5 bg-indigo-500 rounded font-bold flex justify-center items-center gap-2'>View All Schools
                    <FaAngleDoubleRight size={20} className='text-white arrow-right'/>
                    </button>
                </div>

                 <div className="section my-7 md:my-9">
                    <h1 className='font-extrabold text-2xl my-3 w-4/5'>Need a new career in tech ? we've got you</h1>
                    <p className='my-3 w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae dicta facere placeat perspiciatis accusamus explicabo aut beatae voluptatibus odit. </p>

                    <button className=' p-3 my-5 bg-indigo-500 rounded font-bold flex justify-center items-center gap-2'>View All Schools
                    <FaAngleDoubleRight size={20} className='text-white arrow-right'/>
                    </button>
                </div>

                <div className="section my-7 md:my-9">
                    <h1 className='font-extrabold text-2xl my-3 w-3/5'>Want better work opprotunities ? we're your best bet</h1>
                    <p className='my-3 w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae dicta facere placeat perspiciatis accusamus explicabo aut beatae voluptatibus odit. </p>

                    <button className=' p-3 my-5 bg-indigo-500 rounded font-bold flex justify-center items-center gap-2'>View All Schools
                    <FaAngleDoubleRight size={20} className='text-white arrow-right'/>
                    </button>
                </div> 
            </div>
        </div>
    </section>
  )
}

export default BlogLearning