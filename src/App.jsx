import "./App.css";
import { useState, useEffect,useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import axios from "axios";
import Welcome from "./components/pages/Welcome/Welcome";
import ForgotPassword from "./components/pages/forgot-password/Forgot-Password";
import Confirmation from "./components/pages/Confirmation";
import News from "./components/pages/News/News";
import Blog from "./components/Blog/Blog";
import Modal from "./components/Modal/Modal";
import NoteDetails from "./components/context";


function App() {
  
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const hosted_link = "student-dashboard-tau.vercel.app/";
  const [showModal,setShowModal] = useState(false)
  const [noteData,setNoteData] = useState('')
  const [noteReady,setNoteReady] = useState(false)

  
  
  // Additional features to be added

  // API for getting news headings on a page's section === 6674f85c9d3340868df7433236e92beb
  // Teachers


  const news_api =
    "https://newsapi.org/v2/top-headlines?category=technology&country=us&pageSize=30&apiKey=6674f85c9d3340868df7433236e92beb";

   useEffect(()=>{
      let res = axios.get(news_api).then(response => setNews(response.data?.articles))
      setIsLoading(false)
    },[]) 

  return (
    <NoteDetails.Provider value={{noteData,showModal,setShowModal,noteReady}}>
    <div className="App h-auto ">
      <div className={!showModal ? `hidden`: 'block h-full'}>
          <Modal  setNoteData={setNoteData} setNoteReady={setNoteReady} setShowModal={setShowModal} />
      </div>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/home" element={<Home   />} />
        <Route path="/new_pwd" element={<ForgotPassword />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/news" element={<News news={news} isLoading={isLoading} />} />
        <Route path="/login" element={<Welcome />} />
        <Route path="*" element={<Confirmation />} />
      </Routes>
    </div>
    </NoteDetails.Provider>
  );
}

export default App;
