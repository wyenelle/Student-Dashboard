import React from 'react'

const FirstArticle = () => {
  return (
    <div className='mt-7'>
      <div className="grid grid-cols-3" data-aos='zoom-in' data-aos-easing='ease-in-cubic' data-aos-delay='100' data-aos-duration='600' data-aos-once='true'>
        
        <div className="col-span-1 shadow-md border-2 h-40  flex flex-col justify-center items-center mx-1 dark:border-gray-300/30">
          <h3 className='text-3xl font-extrabold text-gray-400  bg-white dark:bg-gray-800 dark:text-cyan-500'>31</h3>
          <p className='text-gray-400 mt-4'>Courses</p>
        </div>
        
        <div className="col-span-1 shadow-md border-2 h-40  flex flex-col justify-center items-center mx-1 dark:border-gray-300/30">
          <h3 className='text-3xl font-extrabold text-gray-400  bg-white dark:bg-gray-800 dark:text-cyan-500'>31</h3>
          <p className='text-gray-400 mt-4'>Completed</p>
        </div>
        <div className="col-span-1 shadow-md border-2 h-40  flex flex-col justify-center items-center mx-1 dark:border-gray-300/30">
          <h3 className='text-3xl font-extrabold text-gray-400  bg-white dark:bg-gray-800 dark:text-cyan-500'>31</h3>
          <p className='text-gray-400 mt-4'>Points</p>
        </div>

        

      </div>
    </div>
  )
}

export default FirstArticle