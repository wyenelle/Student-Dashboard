import { useEffect, useReducer } from "react";
import "./RightCarousel.css";
import { slider } from "./right_side_data";

const reducer = (sliderCount, action) => {
  switch (action.type) {
    case "move":
      return sliderCount == slider.length - 1
        ? (sliderCount = 0)
        : sliderCount + 1;
    default:
      throw new Error('No such Number') 
  }
};

const count = 0;

const RightCarousel = () => {
  const [sliderCount, dispatch] = useReducer(reducer, count);
  const carousels = document.getElementsByClassName("img");
  let interval = "";

  // DISPATCH AN ACTION AFTER EVERY SLATED SECOND IN THE INTERVAL FUNCTION
  useEffect(() => {
    interval = setInterval(() => {
      dispatch({ type: "move" });
    }, 12000);
    // CLEANUP FUNCTION
    return () => {
      clearInterval(interval);
    };
  }, []);
  

  const handleMOuseEnter = () => {
    const linkBox = document.querySelector(".link-box");
    linkBox.classList.add("absolute");
    linkBox.classList.remove("hidden");
  };
  const handleMouseLeave = () => {
    const linkBox = document.querySelector(".link-box");
    linkBox.classList.remove("absolute");
    linkBox.classList.add("hidden");
  };
  return (
    <div className="w-full">
      <h1 className="font-bold mb-2 dark:text-gray-300 text-xl">Partners</h1>
      <div
        onMouseEnter={handleMOuseEnter}
        onMouseLeave={handleMouseLeave}
        className=" w-full  relative carousel-box "
      >
        <div className="img  h-60 w-full flex items-center justify-center">
          <img
            src={slider[sliderCount].img}
            alt="photo of brand"
            className="w-full h-full"
          />
          <div className=" bg-black/50 link-box hidden top-0 h-full w-full mx-auto flex flex-col items-center justify-center">
            <p>{slider[sliderCount].name}</p>
            <a href={slider[sliderCount].link} className="font-bold text-white">
              {" "}
              Visit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCarousel;
