import './Welcome.css'
import Task from '../Task/Task'

import { FaFacebook, FaTwitter } from 'react-icons/fa'
const Welcome = () => {
  return (
    <div className=' w-full overall h-screen border-2    flex items-center welcome md:bg-none '>  

      <div className="w-10/12 md:w-11/12 rounded-md shadow-lg flex justify-center  items-center mx-auto md:grid md:grid-cols-2  md:h-full">

      <div className=" section-1 hidden md:block  h-4/5 col-span-1">
          <div className="h-full w-full section-bg flex flex-col justify-center pl-8">
                <h1 className="text-6xl text-white font-extrabold w-3/5">
                    Welcome Back to <span className="text-black ">AltSchool</span> LMS
                </h1>
                    <div className="font-bold my-4 text-white pl-1">
                        See What's Happening...
                    </div>
                  <div className="connect mt-6 flex justify-around">
                    <a href='https://www.linkedin.com/company/the-alt-school/?originalSubdomain=in' className="connect-btn border border-blue-800 hover:bg-inherit hover:border-white flex justify-center items-center gap-2  bg-blue-800   rounded-full p-4 font-bold">
                        <FaFacebook />    LinkedIn
                    </a>

                    <a href='https://twitter.com/AltSchoolAfrica' className="connect-btn border border-blue-300 hover:bg-inherit hover:border-white bg-blue-300 flex justify-center items-center gap-2   rounded-full p-4 font-bold">
                        <FaTwitter />    Connect on Twitter
                    </a>
                  </div>
          </div>
      </div>
{/* <Form/> */}
      <div className="col-span-1  h-full md:h-4/5  w-full">
        <Task />
      </div>
      </div>
    </div>
  )
}

export default Welcome