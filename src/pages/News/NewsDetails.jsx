import React from "react";
import './NewsDetails.css'

const NewsDetails = ({ obj, isLoading }) => {
  const { title, urlToImage,description, url,publishedAt,source: {name} } = obj;
  const styles = {
    whiteSpace : 'pre-wrap',
    wordWrap : 'break-wrop'
  }
  return (
    <div>
      {!isLoading ? (
      
         <a href={url} target="_blank" className="my-3 ml-3  col-span-1">
          <div className="p-3 h-auto border border-gray-300 md:px-0 rounded-md shadow-md ">
            <p className="text-2xl news-header font-light my-2 px-3">{name}</p>
            <img src={urlToImage} alt={description} className='h-60 w-full'/>
            <h1 style={styles} className="text-2xl p-3  font-bold w-11/12 text-center "> {title.slice(0,60).concat('...')}</h1>
            
          </div>
        </a>
       
      ) : (
        "..."
      )}
    </div>
  );
};

export default NewsDetails;
