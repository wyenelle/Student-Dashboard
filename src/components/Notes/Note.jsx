import { useReducer } from "react";
import "./Note.css";
import Note_Item from "./Note_Item";
import { FaHouseUser, FaTrash, FaVuejs } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

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
        closeParagraph: !note.closeParagraph
      };
    case "delete":
      return { ...note, listOfNotes: action.payload };
    case "vue":
      return {
        ...note,
        color: { ...note.color, vue: action.payload },
        count: 1,
      };
    case "writing":
      return {
        ...note,
        color: { ...note.color, writing: action.payload },
        count: 2,
      };
    case "react":
      return {
        ...note,
        color: { ...note.color, react: action.payload },
        count: 3,
      };
    default:
      throw new Error("No such action");
  }
};

//  STATE OBJECT
const state = {
  notes: "",
  listOfNotes: ["welcome"],
  color: {
    vue: "",
    writing: "",
    react: "",
  },
  count: 0,
  closeParagraph: false
};

const Note = () => {
  const [note, dispatch] = useReducer(reducer, state);
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: name, payload: value });
    const enable = document.querySelector(".tags");
    enable.classList.remove("hidden");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "add", payload: note.notes, clear: "" });
    const disable = document.querySelector(".tags");
    disable.classList.add("hidden");
  };

  const handleVue = () => {
    dispatch({
      type: "vue",
      payload: "border-l-4 border-y-0 border-r-0 rounded-sm border-green-700",
    });
  };

  const handleReact = () => {
    dispatch({
      type: "react",
      payload: "border-l-4 border-y-0 border-r-0 rounded-sm border-orange-500",
    });
  };
  const handleWriting = () => {
    dispatch({
      type: "writing",
      payload: "border-l-4 border-y-0 border-r-0 rounded-sm  border-blue-500",
    });
  };

  const deleteNote = (id) => {
    console.log(id);
    dispatch({
      type: "delete",
      payload: note.listOfNotes.filter((item) => item !== id),
    });
  };

  
  return (
    <section className="mt-3">
      <div className="w-full px-2">
        <h1 className="font-bold text-xl mb-2 mt-4 bg-blue-500 rounded text-white h-10 py-2 w-full text-center">
          Notes
        </h1>
        <div className="h-60 overflow-scroll py-3 ">
          {note.listOfNotes.map((item, id) => (
            <div  className="mt-3 w-full grid grid-cols-5 border dark:border-0 shadow-md ">
             <div className="col-span-4">
             <Note_Item
                key={id}
                item={item}
                color={note.color}
                count={note.count}
                close={note.closeParagraph}
                
                
              />
             </div>
              <FaTrash
                size={18}
                className="text-gray-700 dark:text-gray-300 mr-2 col-span-1"
                key={item}
                onClick={() => deleteNote(item)}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-3 px-3 tags">
          <div>
            <FaVuejs
              size={25}
              className="cursor-pointer text-green-700"
              onClick={handleVue}
            />
          </div>

          <div>
            <MdSchool
              size={25}
              className="cursor-pointer text-indigo-700"
              onClick={handleWriting}
            />
          </div>
          <div>
            <FaHouseUser
              size={25}
              className="cursor-pointer text-gray-400"
              onClick={handleReact}
            />
          </div>
        </div>

        <form onSubmit={(e) => handleSubmit(e)} className="">
          <textarea
            name="notes"
            id="notes"
            className="border-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 border-slate-200 outline-none shadow rounded  w-full px-3 py-4"
            value={note.notes}
            onChange={(e) => handleChange(e)}
            cols="30"
            rows="10"
          />

          <button
            className="border-2 dark:border-gray-800 border-slate-200 shadow-sm bg-blue-500 text-white font-bold capitalize rounded-md outline-none w-7/12 px-2 py-1 mx-auto mt-3"
            onClick={handleSubmit}
          disabled={note.notes.length >= 1 ? false : true}>
            add note
          </button>
        </form>
      </div>
    </section>
  );
};

export default Note;
