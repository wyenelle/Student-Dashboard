import React, { useEffect } from 'react'
import {Link,useNavigate} from 'react-router-dom'

const ForgotPassword = () => {

const navigate = useNavigate()
const go_to_welcome_page = ()=>(
  navigate('/login')
)
const go_to_confirmation_page =() => (
navigate('/confirmation')
)
  return (
    <div>
        <h1 className='text-3xl font-bold text-center my-5 '>
            Provide the e-mail used in registration and the associated Student ID
        </h1>
        <form className='flex flex-col justify-center items-center gap-4 '>
            <input className='border-2 border-gray-200 p-4 w-10/12 mx-auto outline-none rounded-md ' placeholder='E-mail' type='email' name='email'/>

            <input className='border-2 border-gray-200 p-4 w-10/12 mx-auto outline-none rounded-md ' placeholder='Student ID' type='text' name='ID'/>

            <div className="btn-over mx-auto  w-11/12">
            <div onClick={ go_to_confirmation_page}  className=" w-10/12 button mx-auto bg-black mx-auto text-white text-center p-4 rounded-md font-bold my-3 hover:bg:white hover:text-black">
                Button
               </div>
            </div>
        </form>

         <div onClick={go_to_welcome_page} className="go-home outline-none w-2/4 mx-auto border-2 capitalize border-slate-400/40 shadow-md mt-7 text-center h-auto py-3  font-bold">
         Back to login 
         </div>
    </div>
  )
}

export default ForgotPassword