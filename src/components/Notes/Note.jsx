import { useReducer } from "react";
import "./Note.css";
import Note_Item from "./Note_Item";
import { FaPlusCircle,FaTrash} from "react-icons/fa";
import {useContext} from 'react'
import NoteDetails from "../context";


const reducer = (delete_button_state,action) => {
  switch (action.type) {
    case 'delete':
      console.log('hi`');
      // return [delete_button_state]
    default:
      throw new Error('No such action')
  }
}


const Note = () => {
  const {noteData,setShowModal,noteReady} = useContext(NoteDetails)
  const {listOfNotes} = noteData
  const [delete_button_state, dispatch] = useReducer(reducer,listOfNotes)
  console.log(delete_button_state)
  console.log(listOfNotes)
  
  const addToNote = () => {
    setShowModal(true)
  };

  const deleteNote = (id) => {
    console.log('hi')
    dispatch({type: 'delete', payload: listOfNotes.filter(item => item !== id)})        
    
  };

  
  return (
    <section className="mt-3">
      <div className="w-full  px-2">
        <div className="flex justify-between">
        <h1 className="font-bold text-xl mb-2 mt-4 bg-blue-500 rounded text-white h-10 py-2 w-10/12 text-center">
          Notes
        </h1>
        <div className=" flex items-center justify-center">
          <FaPlusCircle size={30} className='text-blue-500 ' onClick={addToNote}/>
        </div>
        </div>


        <div className="h-60 overflow-scroll py-3 ">
          {noteReady ?  listOfNotes.map((item, id) => (
            <div key={id} className="mt-3 w-full grid grid-cols-5 border dark:border-0 shadow-md ">
             <div className="col-span-4">
             <Note_Item
                key={id}
                item={item}
                
                
              />
             </div>
              <FaTrash
                size={18}
                className="text-gray-700 dark:text-gray-300 mr-2 col-span-1"
                key={item}
                onClick={() => deleteNote(item)}
              />
            </div>
          )) : '' }
        </div>

        

        
      </div>
    </section>
  );
};

export default Note;
