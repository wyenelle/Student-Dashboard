import React from 'react'
import { useEffect } from 'react'
import NewsDetails from './NewsDetails'

const News = ({news,isLoading}) => {
    // useEffect(()=>{

    // },[])
    console.log(news,isLoading);
  return (
    <div className='w-full overflow-hidden border-4 border-red-500 px-3'>
        {
          !isLoading ?  news.map((obj,idx) => <NewsDetails key={idx} obj={obj} isLoading={isLoading} />) : 'loading false'
        } 
    </div>
  )
}

export default News