import React from "react";
import { useEffect } from "react";
import NewsDetails from "./NewsDetails";

const News = ({ news, isLoading }) => {
  console.log(news);

  return (
    <div className="w-full overflow-hidden border-4 border-red-500  px-3">
      <h1 className="happening text-center md:mb-7  md:text-6xl md:mt-8">
        {" "}
        Happening Now{" "}
      </h1>
      <p className="text-center my-4 font-bold capitalize md:mb-20 ">
        Bringing it altogether from different trusted sources across the globe
      </p>
      <div className="md:grid md:grid-cols-3 md:gap-3">

      {!isLoading ? (
        news.map(
          (obj, idx) =>
            obj.urlToImage !== null && (
                <NewsDetails key={idx} obj={obj} isLoading={isLoading} />
            )
        )
      ) : (
       <div className="md:cols-span-3 ">
         <div className=" shadow rounded-md p-4 max-w-sm w-full h-screen">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-700 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        
       </div>

        

      )}
              </div>

    </div>
  );
};

export default News;
