import React, { useState } from "react";
import { useEffect } from "react";
import "./BlogAttach.css";
import { testimonies } from "./data";
const blogAttach = () => {
  const [count, setCount] = useState(0);
  //  const interval  = () => {
  //   setInterval(() => {
  //     setCount(count++)
  //     console.log('hello')
  // },2000)
  
  //  }

  // useEffect(() => {
  //   interval()
  // },[count])
  return (
    <section className="attach">
      <div className="attachment-bg h-full">
        <div className="bg-black/70 h-full flex justify-center items-center">
          <div className="attach-info w-7/12 text-center text-white">
            <h1 className="font-bold text-xl">
              what 
            </h1>

            <div className=" md:w-5/12 border-4 ">
              <p className="my-2">{testimonies[count].msg}</p>
              <h2 className="mt-1">{testimonies[count].name} </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default blogAttach;
