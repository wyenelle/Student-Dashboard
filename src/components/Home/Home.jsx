import React from "react";
import "./Home.css";
import UserInfo from "./user-info/UserInfo";
import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import RightSide from "./RightSide/RightSide";
import Main from "./Main/Main";
import {slider} from './RightSide/right_side_data'

const Home = ({student_id}) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <main className=" home-bg h-full w-full">
      <Navbar darkMode={darkMode}  toggleDarkMode={toggleDarkMode} />

      <div className="grid grid-cols-1 md:grid-cols-5 w-full  md:w-11/12 mx-auto home bg-white border border-gray-400/30  rounded rounded-md-200 dark:bg-gray-800 ">
        <div className=" hidden md:col-span-1 sm:block  border border-slate-300/40  text-center p-4">
          <UserInfo toggleDarkMode={toggleDarkMode} darkMode={darkMode} /> 
        </div>

        <div
          className={` px-3 md:col-span-3 text-center `}
        >

          <Main student_id={student_id} />
        </div>

        <div className=" hidden md:block md:col-span-1 text-center border border-slate-300/40">
          <RightSide slider={slider} />
        </div>
      </div>
    </main>
  );
};

export default Home;
