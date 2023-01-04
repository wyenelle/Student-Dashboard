import React from 'react'
import { Link } from 'react-router-dom'

const Confirmation = () => {
  return (
    <div className='flex flex-col justify-center w-10/12 text-center '>
        <hi className='text-2xl'> Your details have been <b>successfully</b> recieved </hi>
        <p className='my-4'>Check your email for more information </p>
        <Link to='/login' className='border-2 border-black/30 rounded-md font-bold text-blue-500 w-2/4 mx-auto py-3'> Login Instead</Link>
    </div>
  )
}

export default Confirmation