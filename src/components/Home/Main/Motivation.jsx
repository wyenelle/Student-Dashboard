import "./Motivation.css";
import { useState } from "react";

const Motivation = () => {
  const [percentage,setPercentage] = useState(0)

  
  return (
    
      <div className="motivation-bg  overfow-hidden h-40 rounded-md shadow-lg md:h-full" id="progressbarContainer">
          <div className="bg-black/30  text-white motivation-text flex w-full h-full justify-center items-center flex-col">
            <h1 className="capitalize font-bold w-11/12 mx-auto px-2"><i>May the force be with you today</i></h1>
          </div>
      </div>
    
  );
};

export default Motivation;
