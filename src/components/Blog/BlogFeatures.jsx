import React from "react";
import Techpoint from "../../assets/vids/techpoint.png";
import Techcabal from "../../assets/vids/techcabal.png";
import Techcrunch from "../../assets/vids/techcrunch.png";
import Disrupt from "../../assets/vids/disrupt.png";
const BlogFeatures = () => {
  return (
    <section className="w-full py-4">
        <h1 className="font-extrabold text-3xl text-center">Features On </h1>
      <div className="grid grid-cols-4 px-3">
        <div className="col-span-2 md:col-span-1">
          <img src={Techpoint} alt='techpoint' className='w-full h-full'/>
        </div>
        <div className="col-span-2 md:col-span-1">
          <img src={Techcabal} alt='techcabal' className='w-full h-full'/>
        </div>
        <div className="col-span-2 md:col-span-1  flex justify-center items-center">
          <img src={Techcrunch} alt='techcrunch' className='w-full h-20'/>
        </div>
        <div className="col-span-2 md:col-span-1">
          <img src={Disrupt} alt='disrupt' className='w-full h-full'/>
        </div>
      </div>
    </section>
  );
};

export default BlogFeatures;
