import React from 'react'
import './UserInfo.css'
import Info from './Info'
import Reader from './reader.jpeg'
import { Link } from 'react-router-dom'
import {MdDashboard,MdScore,MdTask,MdNotes,MdVideoLibrary,MdStar} from 'react-icons/md'
import {BsNewspaper} from 'react-icons/bs'
import {FaStar} from 'react-icons/fa'


const UserInfo = ({toggleDarkMode,darkMode}) => {
  const news = <Link to='/news'> news </Link>
  const blog = <Link to='/blog'> Blog </Link>
const list = [
blog,
news,
'Alt-Scores',
'Videos',
'Task',
'Summary'
]
const icons = [
  <MdDashboard/>,
  <BsNewspaper />,
  <MdScore />,
  <MdVideoLibrary />,
  <MdTask />,
  <MdNotes />
]

  return (
    <section>
        <div className="section-list dark:text-gray-300" data-aos='zoom-in'>
          <img src={Reader} alt='reader'  height={100} className="max-w-full rounded-md transition-shadow ease-in-out duration-300 shadow none hover:shadow-xl mb-4" />

              <h1 className='text-xl font-extrabold'>Favour Timothy</h1>

            <div className="performance grid grid-cols-2 gap-1 my-5">
               <div className="star border bg-gray-800 dark:bg-gray-200  dark:border-2 h-40 col-span-1 rounded md " data-aos='fade-right' data-aos-delay='400' data-aos-duration='600'>
                      <FaStar size={40} className='text-white'/>
                </div>
               <div className="star border bg-gray-100 dark:bg-gray-800  dark:border-zinc-100/30 h-40 col-span-1 rounded-md " data-aos='fade-left' data-aos-delay='400' data-aos-duration='600'>
                      <MdStar size={40} />
                </div>
            </div>
              
            <div className="hamburger mt-9">
            {list.map( (item,idx) => (
              <Info key={idx} list={item} icons={icons[idx]} />
            ))}
            </div>

<div className="switch-button my-4 border shadow-md p-3 text-white bg-gray-800 dark:text-gray-800 rounded-md dark:bg-gray-100" onClick={toggleDarkMode}>
<button className=' '>{
        darkMode ? 'Day 💡 ' : 'Night 🌙' 
      }</button>
</div>

<div className="w-full rounded-lg bg-slate-100 h-10 dark:text-gray-700 hover:bg-gray-800 hover:transition-duration-200 hover:text-white dark:hover:text-white flex justify-center items-center">
Log Out
</div> 
        </div>
    </section>
  )
}

export default UserInfo