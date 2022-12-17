import React from "react";

const NewsDetails = ({ obj, isLoading }) => {
  const { title, urlToImage,description, url,publishedAt } = obj;
  const styles = {
    whiteSpace : 'pre-wrap',
    wordWrap : 'break-wrop'
  }
  return (
    <div>
      {!isLoading ? (
        <a href={url} target="_blank" className="my-3 ml-3">
          <div className="p-3 h-auto border border-gray-300 rounded-md shadow-md ">
            <img src={urlToImage} alt={description}/>
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
