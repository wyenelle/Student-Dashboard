import { useEffect, useReducer } from "react";
import "./RightCarousel.css";
import {slider} from './right_side_data'

const reducer = (sliderCount, action) => {
  switch (action.type) {
    case "move":
      return sliderCount == items.length - 1 ? (sliderCount = 0) : sliderCount + 1;
    default:
      console.log("no such number");
  }
};

const items = ["Sponsor 1", "Sponsor 2", "Sponsor 3"];
const count = 0;


const RightCarousel = () => {
  const [sliderCount, dispatch] = useReducer(reducer, count);
  const carousels = document.getElementsByClassName("img");
  let interval = "";

// DISPATCH AN ACTION AFTER EVERY SLATED SECOND IN THE INTERVAL FUNCTION 
  useEffect(() => {
    interval = setInterval(() => {
      dispatch({ type: "move" });
      console.log(sliderCount);
    }, 12000);
// CLEANUP FUNCTION
    return () => {
      clearInterval(interval);
    };
  }, []);
//  sudo https://sudo.africa/
// onepipe https://onepipe.com/
// RelianceHmo https://www.reliancehmo.com/
// piggvest https://www.piggyvest.com/
// Riby https://riby.ng/
// Aws https://aws.amazon.com/free/?trk=73c6744c-29f5-4966-bdc7-8599174c182d&sc_channel=ps&s_kwcid=AL!4422!3!444219541634!e!!g!!aws&ef_id=CjwKCAiAk--dBhABEiwAchIwkcH78k0_EnMRlFMpiWJvZbYDpciGTqzFgBOWEOYtf3Bfjm0l3xGmFxoCn0IQAvD_BwE:G:s&s_kwcid=AL!4422!3!444219541634!e!!g!!aws&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all
// engage https://engage.so/
// mono https://mono.co/
// norebase https://norebase.com/


const handleMOuseEnter = () => {
  const linkBox = document.querySelector('.link-box')
  linkBox.classList.add('absolute')
  linkBox.classList.remove('hidden')
}
const handleMouseLeave = () => {
  const linkBox = document.querySelector('.link-box')
  linkBox.classList.remove('absolute')
  linkBox.classList.add('hidden')
}
  return (
    <div className="w-full">
      <h1 className="font-bold mb-2 text-xl">Partners</h1>
      <div onMouseEnter={handleMOuseEnter} onMouseLeave={handleMouseLeave} className=" w-full  relative carousel-box ">
        <div className="img  h-60 w-full flex items-center justify-center">
          <img src='' alt='photo' className="w-full h-full" />
          <div className=" bg-black/50 link-box hidden top-0 h-full w-full flex flex-col items-center justify-center"> 
          <p>{ slider[sliderCount].name }</p>
          <a href={ slider[sliderCount].link } className='font-bold text-white'> Visit</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCarousel;
