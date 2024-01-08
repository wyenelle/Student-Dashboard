import React from 'react'

const Info = ({list,icons}) => {

  return (
    <div className='grid grid-cols-4 gap-4 text-start my-5' >
        <p>{icons}</p>
        <h2 className=' col-span-3 text-start'>{list}</h2>
    </div>
  )
}

export default Info


