import React from 'react'
import Topic from './Question'
import { lectures } from "./Data";
import { useState } from 'react';

const Lectures = () => {
const [expand,setExpand] = useState(false)
  const expandAll = () => setExpand(!expand)
  
  return (
    <div>
<div className="my-2 p-2  flex justify-between items-center">
<h1 className='text-2xl font-extrabold'>Topics</h1>
<button onClick={expandAll}  className=' border border-slate-300/40 shadow-lg p-3 rounded-md font-bold outline-none'>{expand ? 'Close All' : 'Expand All'}</button>
</div>
      {
        lectures.map(item=>(
          <Topic item={item}
           key={item.id}
           expand = {expand}
            />
        ))
      }
    </div>
  )
}

export default Lectures