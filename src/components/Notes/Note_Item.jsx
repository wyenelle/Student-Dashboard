import { useState } from "react";
import './Note_Item.css'
import { useContext } from "react";
import NoteDetails from "../context/context";
const Note_Item = ({item,id}) => {
  const {openNote} = useContext(NoteDetails)
    const [showParagraph,setShowParagraph] = useState(false)


    return (
    <section onClick={ () => openNote(id,item)}>
    <h2 
      className={`w-full text-start h-full dark:text-white dark:border-gray-200  cursor-pointer  truncate ... px-2  py-1 mb-3 `}
    >
      {item}
    </h2>
   
    </section>
  );
};

export default Note_Item;
