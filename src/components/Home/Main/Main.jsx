import React from 'react'
import Header from './Header'
import FirstArticle from './FirstArticle'
import SecondArticle from './SecondArticle'
import Motivation from './Motivation'


const Main = () => {
  return (
    <main >
        <div className="grid grid-cols-2 dark:text-white">
            <div className="col-span-2">
                <Header />
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

           
        </div>
        
    </main>
  )
}

export default Main