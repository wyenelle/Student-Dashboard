import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {BiTrendingUp} from 'react-icons/bi'
import {VscBellDot} from 'react-icons/vsc'
import {FaStarHalfAlt,FaClock,FaMoon,FaSun,FaBell,} from 'react-icons/fa'


const Header = () => {
    const list_of_month = ['January','February','March','April','May','June','July','August','September','October','November','December']
    const date = new Date()
    const hour = date.getHours()
    const month = date.getMonth()
    const month_date = date.getDate()
    const day = date.getDay()
    let result = ''
    let greetings = ''
    // determine the day of the week 
    switch (day) {
        case 0 :
           result =  'Sunday' 
            break;
        case 1:
            result = 'Monday'
            break;
        case 2:
            result = 'Tuesday'
            break;
        case 3:
            result = 'Wednesday'
            break;
        case 4 :
            result = 'Thursday'
            break;
        case 5:
            result = 'Friday'
            break;
        case 6:
            result = 'Saturday'
            break;
        default:
            result = 'Not a weekday'
            break;
    }

    // Determine the time of the day
    if(hour < 12){
        greetings = 'Good Morning'
    }
    else if(hour > 12 && hour < 17){
    greetings = 'Good Afternoon'
    }else if ( hour >= 17 && hour < 20){
        greetings = 'Good Evening'
    }else{
        greetings = 'Good night'
    }
useEffect(()=>{
    AOS.init()
},[])

  return (
    <header className=' text-start p-3 flex justify-between' data-aos='zoom-in' data-aos-once='true' data-aos-delay='100' data-aos-duration='600'>
        <div className="header-main">
        <h1 className='text-2xl md:text-3xl font-extrabold'>{greetings}, Favour!! </h1>
        <p className='text-gray-400 font-bold italic'> {`${month_date}, ${result}  ${list_of_month[month]}`}</p>
        </div>

        <div className="notification-bar flex justify-between gap-3 flex=reverse">
             <span className='flex border-2 '>
<span className="animate-ping  absolute right-16 top-3 inline-flex h-5 w-5 rounded-md bg-sky-400 opacity-75 dark:opacity-100"></span>
<BiTrendingUp size={40}  className='relative text-gray-400 dark:text-cyan-500'/>
<span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span> 
            </span>

            <VscBellDot size={40} className='relative text-gray-400 dark:text-cyan-500'/>
        </div>
    </header>
  )
}

export default Header

// yusufabassi1235