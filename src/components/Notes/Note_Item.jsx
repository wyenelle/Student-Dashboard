import './Note_Item.css'
import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import NoteDetails from "../context/context";
const Note_Item = ({item,id}) => {
  const {openNote,deleteNote} = useContext(NoteDetails)

    return (
    <section  className='flex justify-center items-center'>
    <h2 onClick={ () => openNote(id,item)}
      className={`w-full text-start h-full dark:text-white dark:border-gray-200  cursor-pointer  truncate ... px-2  py-1 mb-3 `}
    >
      {item}
    </h2>
   <FaTrashAlt size={20} onClick={() => deleteNote(item)} />
    </section>
  );
};

export default Note_Item;
