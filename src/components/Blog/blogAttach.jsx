import React, { useReducer, useState } from "react";
import { useEffect } from "react";
import "./BlogAttach.css";
import { testimonies } from "./data";


const reducer = (tracker,action) => {
  switch (action.type) {
    case 'disappear':
      return {...tracker, count:tracker.count === testimonies.length - 1 ? tracker.count = 0 : tracker.count + 1, secondCount:tracker.secondCount === testimonies.length - 1 ? tracker.secondCount = 0 : tracker.secondCount + 1}
    default:
      break;
  }
}
let initialState = {
  count: 0, secondCount: 2
}
const blogAttach = () => {
  const [tracker, dispatch] = useReducer(reducer,initialState);

  useEffect(() => {
    const interval  = setInterval(() => {
      dispatch({type: 'disappear'})    
    },12000)
    return () => clearInterval(interval)
  },[])

  return (
    <section className="attach">
      <div className="attachment-bg  h-full">
        <div className="bg-black/70 h-full flex justify-center items-center">
          <div className="attach-info  h-full w-11/12 flex flex-col items-center justify-center gap-5 text-center text-white">
          <h1 className="font-bold text-2xl mb-5 md:hidden capitalize">
              what our alumnis have to say
            </h1>
          <div className="flex  p-2 md:h-full justify-center gap-5 items-center">
          <div className="w-9/12 hidden md:block  h-40" >
          <h1 className="font-bold  text-3xl w-4/12 mx-auto  h-40 py-3 capitalize">
              what our alumnis have to say about us
            </h1>
          </div>
            <div className=" md:w-7/12 px-3 py-4 h-40 bg-black/50 border border-slate-200/60 rounded-lg mx-auto ">
                <p className="my-2 testimonial">{testimonies[tracker.count].msg}</p>
                <h2 className="mt-1 testimonial">{testimonies[tracker.count].name} </h2>
              </div>
              <div className="hidden md:block  md:w-7/12 px-3 py-4 bg-black/50 h-40 border border-slate-200/60 rounded-lg mx-auto ">
                <blockquote className="my-2 testimonial">{testimonies[tracker.secondCount].msg}</blockquote>
                <h2 className="mt-1 testimonial">{testimonies[tracker.secondCount].name} </h2>
              </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default blogAttach;
