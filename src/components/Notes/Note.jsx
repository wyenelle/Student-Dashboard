import { useReducer} from "react";
import "./Note.css";

// REDUCER
const reducer = (note, action) => {
  switch (action.type) {
    case "notes":
      return { ...note, notes: action.payload };
    case "add":
      return { ...note, listOfNotes: [...note.listOfNotes, action.payload] };
    default:
      throw new Error("No such action");
  }
};

//  STATE OBJECT
const state = {
  notes: "",
  listOfNotes: ['welcome'],
};


const Note = () => {
  const [note, dispatch] = useReducer(reducer, state);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: name, payload: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <div className="w-full px-2">
        <h1 className="font-bold text-xl">Notes</h1>
        <div className="h-80 overflow-scroll py-3">
        {note.listOfNotes.map((item, id) => (
          <h2 key={id} 
          className='w-full text-start h-10 shadow-md border truncate ... px-2 py-3 my-2'
          >{item}</h2>
        ))}
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
            onClick={() => dispatch({ type: "add", payload: note.notes })}
          >
            add note
          </button>
        </form>
      </div>
    </section>
  );
};

export default Note;
