import React from "react";
import { useState } from "react";

import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const Topic = ({item,expand}) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => setShowAnswer(!showAnswer)

  const styles = {
    height: 50,
    overflow: "hidden",
  };

  return (
    <div className="container">

        <div  className="topic mb-5">
        <div
          className={`title flex  border-2 border-gray-300 ${showAnswer || expand ? 'border-b-0' : ""}  shdow-lg mx-1 items-center p-2 rounded-md  justify-between dark:border-gray-300/30`}
          style={styles}
        >
          <h3 className="truncate ... font-bold">
            {item.title}
          </h3>
          <button className="cursor-pointer" onClick={ toggleAnswer}>
            {showAnswer || expand ? <FaMinusCircle className="animate-bounce" /> : <FaPlusCircle />}
          </button>
        </div>
        
        <div className={`${showAnswer || expand ?
         'h-auto p-2 border border-gray-300 shadow-lg mx-1 rounded-md dark:border-gray-300/30 dark:text-gray-300 font-medium ' : 'hidden'}`} >
          {showAnswer || expand  ? (
            <p className="" data-aos='zoom-in'>
            {item.text}
            </p>
          ) : '' }
        </div>
        
      </div>
      
    </div>
  );
};

export default Topic;
