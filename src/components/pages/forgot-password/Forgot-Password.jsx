import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

const ForgotPassword = () => {

const navigate = useNavigate()
const go_to_welcome_page = ()=>(
  navigate('/home')
)
  return (
    <div>
        <h1 className='text-3xl font-bold text-center my-5 '>
            Provide the e-mail used in registration and the associated Student ID
        </h1>
        <form className='flex flex-col justify-center items-center gap-4 '>
            <input className='border-2 border-gray-200 p-4 w-10/12 mx-auto rounded-md ' placeholder='E-mail' type='email' name='email'/>

            <input className='border-2 border-gray-200 p-4 w-10/12 mx-auto rounded-md ' placeholder='Student ID' type='text' name='ID'/>

            <div className="btn-over mx-auto  w-11/12">
            <div onClick={ go_to_welcome_page}  className=" w-10/12 button mx-auto bg-black mx-auto text-white text-center p-4 rounded-md font-bold my-3 hover:bg:white hover:text-black">
                Button
               </div>
            </div>
        </form>
    </div>
  )
}

export default ForgotPassword