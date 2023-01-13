import { useReducer} from "react";
import "./Note.css";
import Note_Item from "./Note_Item";
import {FaVuejs} from 'react-icons/fa'


// REDUCER
const reducer = (note, action) => {
  switch (action.type) {
    case "notes":
      return { ...note, notes: action.payload };
    case "add":
      return { ...note,notes: action.clear ,listOfNotes: [...note.listOfNotes, action.payload]};
      case 'vue':
            return {...note, color: action.payload}
        case 'writing':
            return {...note, color: action.payload}
        case 'react':
            return {...note, color: action.payload}
    default:
      throw new Error("No such action");
  }
};

//  STATE OBJECT
const state = {
  notes: "",
  listOfNotes: ['welcome'],
  color: ''
};


const Note = () => {
  const [note, dispatch] = useReducer(reducer, state);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: name, payload: value });
    const enable = document.querySelector('.tags')
   enable.classList.remove('hidden')
  };


  const handleSubmit = (e) => {
    e.preventDefault();
   dispatch({ type: "add", payload: note.notes, clear: ''})
   const disable = document.querySelector('.tags')
   disable.classList.add('hidden')
  };

  return (
    <section>
      <div className="w-full px-2">
        <h1 className="font-bold text-xl mt-4 bg-blue-500 rounded text-white h-10 py-2 w-full text-center">Notes</h1>
        <div className="h-60 overflow-scroll py-3">
        {note.listOfNotes.map((item, id) => (
          <Note_Item key={id} item={item} color={note.color}/>
        ))}
        </div>


        <div className="flex justify-between px-3 tags">
            <div>
              <FaVuejs size={25} className='text-green-700' onClick={() => dispatch({type: 'vue',payload: 'border-l-4 border-green-700'})}/>
            </div>
            <div>
              <FaVuejs size={25} className='text-green-700' onClick={() => dispatch({type: 'react',payload: 'border-l-4 border-cyan-500'})}/>
            </div>
            <div>
              <FaVuejs size={25} className='text-green-700'onClick={() => dispatch({type: 'writing',payload: 'border-l-4 border-blue-500'})}/>
            </div>
          </div>
          
        <form onSubmit={(e) => handleSubmit(e)} className='mt-3'>
          <textarea
            name="notes"
            id="notes"
            className="border outline-none shadow rounded border-slate-200 w-full px-3 py-4"
            value={note.notes}
            onChange={(e) => handleChange(e)}
            cols="30"
            rows="10"
          />

          <button
          className="border-2 border-slate-200 shadow-sm bg-blue-500 text-white font-bold capitalize rounded-md outline-none w-7/12 px-2 py-1 mx-auto mt-3"
            onClick={handleSubmit}
          >
            add note
          </button>
        </form>
      </div>
    </section>
  );
};

export default Note;
