import React from "react";
import NewsDetails from "./NewsDetails";
import Skeleton from "../Skeleton";
import {Link} from 'react-router-dom'

const News = ({ news, isLoading }) => {
  console.log(news);
const skeleton_count =[1,2,3]
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
         
          skeleton_count.map(skeleton => <Skeleton key={skeleton} />)
        )}
      </div>
      <Link to='/home'> Back</Link>
    </div>
  );
};

export default News;
