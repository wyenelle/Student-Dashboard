import "./Motivation.css";
import { useState } from "react";

const Motivation = () => {
  const [percentage,setPercentage] = useState(0)

  
  return (
    
      <div className="motivation-bg overfow-hidden rounded-md shadow-lg h-full" id="progressbarContainer">
          <div className="bg-black/30 text-white motivation-text flex w-full h-full justify-center items-center flex-col">
            <h1 className="capitalize font-bold"><i>May the force be with you today</i></h1>
          </div>
      </div>
    
  );
};

export default Motivation;
