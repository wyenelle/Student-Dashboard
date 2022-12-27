import { useEffect } from "react"
import { useState } from "react"
import './RightSide.css'

const RightSide = () => {
  // const [scroll,setScroll] = useState()
  const carousels = document.getElementsByClassName('img')
  let carousel_length = carousels.length
  let count = 0   
 const slide = () =>  setInterval(function(){
console.log(count);
count++
  // carousels[count].classList.remove('show')
  //     count < carousel_length - 1 ? count++ : count = 0
  //       carousels[count].classList.add('show')
  
  // console.log(count);
    },5000)
    
  return (
      <div className="w-full">
        <div className="carousel-list w-full flex">
          <div className="img border-4 h-60 w-full  ">
            carousel-1
          </div>
          <div className="img border-4 h-60  w-full">
            carousel-2
          </div>
          <div className="img border-4 h-60  w-full">
            carousel-3
          </div>
          <div className="img border-4 h-60  w-full">
            carousel-4
          </div>
        </div>
      </div>
  )
}

export default RightSide