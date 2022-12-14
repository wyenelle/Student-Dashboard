import React from "react";
import "./Home.css";
import UserInfo from "./user-info/UserInfo";
import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import RightSide from "./RightSide/RightSide";
import Main from "./Main/Main";
import Footer from "./Footer";
import Modal from "../Modal/Modal";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <main className=" home-bg relative h-full w-full ">
      <Navbar darkMode={darkMode}  toggleDarkMode={toggleDarkMode} />

      <div className="grid grid-cols-1  md:grid-cols-5 w-full  md:w-full mx-auto home bg-white border border-gray-400/30  rounded rounded-md-200 dark:bg-gray-800 ">
        <div className=" hidden md:col-span-1 sm:block  border border-slate-300/40  text-center p-4">
          <UserInfo toggleDarkMode={toggleDarkMode} darkMode={darkMode} /> 
        </div>
        <div
          className={` px-3 md:col-span-3 text-center `}
        >

          <Main  />
        </div>

        <div className=" hidden md:block mt-5 md:col-span-1 overflow-hidden text-center border border-slate-300/40">
          <RightSide />
        </div>
      </div>
<Footer/>
    </main>
  );
};

export default Home;
