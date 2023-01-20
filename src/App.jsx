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

function App() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const hosted_link = "student-dashboard-tau.vercel.app/";
  const [showModal, setShowModal] = useState(false);
  const [noteData, setNoteData] = useState("");
  const [noteReady, setNoteReady] = useState(false);
  
  const deleteNote = (id) => {
      setNoteData({...noteData, listOfNotes:[noteData.listOfNotes.filter(item => item !== id)]   })
  };
  // Additional features to be added

  // API for getting news headings on a page's section === 6674f85c9d3340868df7433236e92beb
  // Teachers

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
        noteData,
        setNoteData,
        showModal,
        setShowModal,
        noteReady,
        deleteNote,
      }}
    >
      <div className="App h-auto ">
        <div className={!showModal ? `hidden` : "block h-full"}>
          <Modal
            setNoteData={setNoteData}
            setNoteReady={setNoteReady}
            setShowModal={setShowModal}
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
