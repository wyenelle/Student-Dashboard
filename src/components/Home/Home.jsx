import React from "react";
import "./Home.css";
import UserInfo from "./user-info/UserInfo";
import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import RightSide from "./RightSide/RightSide";
import Main from "./Main/Main";
import {slider} from './RightSide/right_side_data'

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <main className="border-8 home-bg border-red-800 h-full w-full">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div className="grid grid-cols-1 md:grid-cols-5 w-11/12 mx-auto home border-2 border-gray rounded rounded-md-200 dark:bg-gray-800 ">
        <div className=" hidden md:col-span-1 sm:block  border border-slate-300/40  text-center p-4">
          <UserInfo toggleDarkMode={toggleDarkMode} darkMode={darkMode} /> 
        </div>

        <div
          className={` md:col-span-3 text-center border border-slate-300/40`}
        >

          <Main />
        </div>

        <div className=" hidden md:block md:col-span-1 text-center border border-slate-300/40">
          <RightSide slider={slider} />
        </div>
      </div>
    </main>
  );
};

export default Home;
