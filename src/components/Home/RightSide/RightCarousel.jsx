import { useEffect, useReducer } from "react";
import "./RightCarousel.css";

const reducer = (slider, action) => {
  switch (action.type) {
    case "move":
      return slider == items.length - 1 ? (slider = 0) : slider + 1;
    default:
      console.log("no such number");
  }
};

const items = ["Sponsor 1", "Sponsor 2", "Sponsor 3"];
const count = 0;


const RightCarousel = () => {
  const [slider, dispatch] = useReducer(reducer, count);
  const carousels = document.getElementsByClassName("img");
  let interval = "";

// DISPATCH AN ACTION AFTER EVERY SLATED SECOND IN THE INTERVAL FUNCTION 
  useEffect(() => {
    interval = setInterval(() => {
      dispatch({ type: "move" });
      console.log(slider);
    }, 12000);
// CLEANUP FUNCTION
    return () => {
      clearInterval(interval);
    };
  }, []);
//  sudo
// onepipe
// RelianceHmo
// piggvest
// Riby
// Aws
// engage green
// mono
// norebase
  return (
    <div className="w-full">
      <h1 className="font-bold mb-2 text-xl">Partners</h1>
      <div className=" w-full border-4 ">
        <div className="img  h-60 w-full flex items-center justify-center">{items[slider]}</div>
      </div>
    </div>
  );
};

export default RightCarousel;
