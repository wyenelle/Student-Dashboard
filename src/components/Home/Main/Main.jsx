import React from 'react'
import Header from './Header'
import FirstArticle from './FirstArticle'
import SecondArticle from './SecondArticle'
import Motivation from './Motivation'
import Video from '../../Videos/Video'


const Main = ({student_id}) => {
  return (
    <main >
        <div className="grid grid-cols-2 dark:text-white">
            <div className="col-span-2">
                <Header student_id={student_id} />
            </div>

            <div className="col-span-2 md:col-span-1 ">
                <FirstArticle  />
            </div>

            <div className="col-span-2 md:col-span-1 mt-7">
                <Motivation />
            </div> 

            <div className="col-span-2 md:col-span-2 mt-7 ">
                <SecondArticle  />
            </div>

            <div className="col-span-2 md:col-span-2 mt-7 ">
                <Video  />
            </div>
           
        </div>
        
    </main>
  )
}

export default Main