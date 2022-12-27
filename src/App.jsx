import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import axios from "axios";
import Welcome from "./components/pages/Welcome/Welcome";
import ForgotPassword from "./components/pages/forgot-password/Forgot-Password";
import Confirmation from "./components/pages/Confirmation";
import News from "./components/pages/News/News";
import Blog from "./components/Blog/Blog";

function App() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const hosted_link = "student-dashboard-tau.vercel.app/";
  

  // Additional features to be added

  // creed 11
  //  dding touch interactivity to website
  // API for getting news headings on a page's section === 6674f85c9d3340868df7433236e92beb
  // Pictures section that links to lms vidoes
  // Teachers
  // Adding Videos
  // Todo list
  //  Resources
  // Day n of semester so far


  const news_api =
    "https://newsapi.org/v2/top-headlines?category=technology&country=us&pageSize=30&apiKey=6674f85c9d3340868df7433236e92beb";

   useEffect(()=>{
      let res = axios.get(news_api).then(response => setNews(response.data?.articles))
      setIsLoading(false)
   },[]) 

  return (
    <div className="App ">
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
  );
}

export default App;
