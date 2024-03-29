import { useEffect } from "react";
import { useContext } from "react";
import { FaRegWindowClose, FaTrash } from "react-icons/fa";
import "./Modal.css";
import NoteDetails from "../context/context";
// REDUCER

//  STATE OBJECT

const Modal = () => {
  const {note, dispatch } = useContext(NoteDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: name, payload: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "add", payload:note.notes, clear: "" });
  };

  // useEffect(() => {
  //   console.log(note.listOfNotes)

  // },[note])

  return (
    <section className="border-4 border-black modal">
      <div className=" flex items-center justify-center h-full">
        <form className="w-6/12 mx-auto">
          <div className="flex justify-between items-center mb-2">
            <h1 className="font-extrabold text-3xl text-white">Add Note</h1>
            <FaTrash size={40} color="white" />
            <FaRegWindowClose
              size={40}
              className="text-red-500"
              onClick={ () => dispatch({type: 'close-modal'})}
            />
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
};

export default Modal;
