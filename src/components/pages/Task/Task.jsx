import React from "react";
import "./Task.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Task = () => {
  const [task, setTask] = useState({
    text: "",
    date: "",
    check: false,
  });

  const [signIn, setSignIn] = useState(true);
  const navigate = useNavigate();
  const handleClick = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
      check: !task.check,
    });
  };
  const go_home = ()=>(
    navigate('/home')
  )
  return (
    <div className="task md:bg-none  w-full md:w-10/12 md:mx-auto rounded-md backdrop-blur-sm h-full   ">
      <div className="form w-full">
        <h1 className="w-11/12 md:hidden mx-auto text-3xl md:text-black font-bold mt-3 md:mt-0 mb-9 pt-4">
          {" "}
          Welcome Back
        </h1>

        <h1 className="w-11/12 hidden mx-auto text-3xl hidden md:block md:text-black font-bold mt-3 md:mt-0 mb-9 pt-4">
          {" "}
          Login
        </h1>

        <form className="flex flex-col gap-4 text-white  h-auto mt-4">
          <label htmlFor="email" className="mx-auto w-11/12">
            <input
              type="email"
              id="email"
              className="border-2  border-t-0 border-x-0 border-b-white md:border-b-black md:text-black w-full rounded-lg truncate ... bg-inherit p-3 h-2/4 my-3 outline-none text-white"
              name="email"
              value={task.email}
              placeholder="johndoe@gmail.com"
              onChange={handleClick}
            />
          </label>

          <label htmlFor="date" className="mx-auto w-11/12">
            <input
              type="password"
              id="password"
              className="border-2 border-t-0 border-x-0 bg-inherit border-b-white w-full rounded-md md:border-b-black md:text-black  focus:border-t-0 focus:border-x-0 truncate ...  p-3 h-2/4 my-3 outline-none"
              name="Password"
              value={task.password}
              placeholder="Password"
              onChange={handleClick}
            />
            <br />
          </label>

          <div className="flex justify-between text-white md:text-black font-normal p-3">
            <label htmlFor="check">
              <input
                type="checkbox"
                name="check"
                id="check"
                value={task.check}
                onClick={handleClick}
              />
              <span> remember me</span>
            </label>

            <Link to="/new_pwd">
              <h2> Forgot Password</h2>
            </Link>
          </div>
          
            <div className="btn-over mx-auto  w-11/12">
            <div onClick={go_home}  className=" w-10/12 button mx-auto bg-black mx-auto text-white text-center p-4 rounded-md font-bold my-3">
                Button
               </div>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Task;
