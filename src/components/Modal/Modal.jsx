import {useReducer} from 'react'
import { FaRegWindowClose } from 'react-icons/fa'
import './Modal.css'

// REDUCER
const reducer = (note, action) => {
    switch (action.type) {
      case "notes":
        return { ...note, notes: action.payload };
      case "add":
        return {
          ...note,
          notes: action.clear,
          listOfNotes: [...note.listOfNotes, action.payload],
          noteAdded: true
        };
      
     
      default:
        throw new Error("No such action");
    }
  };
  
  //  STATE OBJECT
  const state = {
    notes: "",
    listOfNotes: [],
    noteAdded: false
  };

const Modal = ({setNoteData,setNoteReady,setShowModal}) => {
  const [note, dispatch] = useReducer(reducer, state);

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: name, payload: value });
        
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "add", payload: note.notes, clear: "" });
        
        setNoteReady(true)
        
      };
      setNoteData(note)


  return (
    <section className='border-4 border-black modal'>
        <div className=" flex items-center justify-center h-full">
        <form  className="w-6/12 mx-auto">
            <div className="flex justify-between items-center mb-2">
                <h1 className="font-extrabold text-3xl text-white">Add Note</h1>
                <FaRegWindowClose size={40} className='text-red-500' onClick={() => setShowModal(false)}/>
            </div>
          <textarea
            name="notes"
            id="notes"
            className="border-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 border-slate-200 outline-none shadow rounded  w-full px-3 py-4"
            cols="30"
            rows="10"
            value={note.notes}
            onChange={(e) => handleChange(e)}
          />

          <button
          onClick={(e) => handleSubmit(e)}
            className="border  border-blue-500 shadow-sm bg-blue-500 text-white font-extrabold capitalize rounded-md outline-none w-full px-2 py-3 mx-auto mt-3"
            >
            add note
          </button>
        </form>
        </div>
    </section>
  )
}

export default Modal