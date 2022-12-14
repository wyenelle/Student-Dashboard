import { useState } from "react";
import './Note_Item.css'
const Note_Item = ({item}) => {
    const [showParagraph,setShowParagraph] = useState(false)


    return (
    <section>
    <h2
    onClick={()=> setShowParagraph(!showParagraph)}
      className={`w-full text-start h-full dark:text-white dark:border-gray-200  cursor-pointer  truncate ... px-2  py-1 mb-3 `}
    >
      {item}
    </h2>
    <p className={`${showParagraph  ? ' overflow-scroll py-2 border dark:text-gray-200 dark:border-gray-700 rounded-sm mb-2 expand' : 'hidden'}`}>
      {item}
    </p>
    </section>
  );
};

export default Note_Item;