import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

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
    <header className=' text-start p-3' data-aos='zoom-in' data-aos-once='true' data-aos-delay='100' data-aos-duration='600'>
        <h1 className='text-2xl md:text-3xl font-extrabold'>{greetings}, Favour!! </h1>
        <p className='text-gray-400 font-bold italic'> {`${month_date}, ${result}  ${list_of_month[month]}`}</p>
    </header>
  )
}

export default Header