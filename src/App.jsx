import "./App.css";
import { useState, useEffect, useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import {
  Blog,
  News,
  Confirmation,
  ForgotPassword,
  Welcome,
  Home,
} from "./pages";
import { Modal, NoteDetails } from "./components";


const reducer = (note, action) => {
  switch (action.type) {
    case "notes":
      return { ...note, notes: action.payload };
    case "add":
      return {
        ...note,
        notes: action.clear,
        listOfNotes: [...note.listOfNotes, action.payload],
        noteAdded: true,
        noteReady: true
      };
      case 'show-modal':
        return {...note, showModal: true}
      case 'close-modal':
        return {...note, showModal: false}
      case 'tapped':
        return {...note, showModal: true, notes: action.payload}
      case 'delete':
        console.log(action.payload, 'hi')
        return {
          ...note,
          listOfNotes: action.payload
        };
        case 'tapped':
          return {...note, notes: action.payload}
    default:
      throw new Error("No such action");
  }
};



const state = {
  notes: "",
  listOfNotes: ['hello','welcome to altschool'],
  noteAdded: false,
  date: new Date().toLocaleDateString(),
  showModal: false,
  noteReady: false
};



function App() {
  const [note, dispatch] = useReducer(reducer, state);

  // set news data
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // setuo modal with data from the modal component
  const [textNote, setTextNote] = useState()
  const [tapped, setTapped] = useState(false)

  // send delete signal to the main source of truth - the modal reducer
  const deleteNote = (id) => {
    console.log( typeof id);
       dispatch({type:'delete', payload: note.listOfNotes.filter(item => item !== id)   })
      };
  const openNote = (id,item) => {
    dispatch({type: 'tapped',payload:item})
  }
  // Additional features to be added

  // API for getting news headings on a page's section === 6674f85c9d3340868df7433236e92beb
  // Teachers
  // Add Search filter video capability to videos on main page 
 
  const news_api =
    "https://newsapi.org/v2/top-headlines?category=technology&country=us&pageSize=30&apiKey=6674f85c9d3340868df7433236e92beb";

  useEffect(() => {
    let res = axios
      .get(news_api)
      .then((response) => setNews(response.data?.articles));
    setIsLoading(false);
  }, []);

  return (
    <NoteDetails.Provider
      value={{
        openNote,
        dispatch,
        note,
        deleteNote
        
        
      }}
    >
      <div className="App h-auto ">
        <div className={!note.showModal ? `hidden` : "block h-full"}>
          <Modal
            textNote={textNote}
            tapped={tapped}
          />
        </div>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/home" element={<Home />} />
          <Route path="/new_pwd" element={<ForgotPassword />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route
            path="/news"
            element={<News news={news} isLoading={isLoading} />}
          />
          <Route path="/login" element={<Welcome />} />
          <Route path="*" element={<Confirmation />} />
        </Routes>
      </div>
    </NoteDetails.Provider>
  );
}

export default App;
