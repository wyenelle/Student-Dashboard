import React from "react";
import "./Task.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Task = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
    check: false,
    loginValid : false
  })

  const regex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
  let Error_msg = ''
  const [signIn, setSignIn] = useState(false);
  const navigate = useNavigate();

  const validate_form = ()=>{    
    if( login.email.match(regex) && login.password.length >= 6)(
        setSignIn(true)
    )
  }

  const handleClick = (e) => {
const {name,value} = e.target
setLogin({...login,
  [name] : value
})
    validate_form()
console.log(login.password);
  };


  const handleSubmit = (e) => {
      e.preventDefault()
       validate_form()
}


  const go_home = ()=>(
    navigate('/home')
  )

// useEffect()
  return (
    <div className="task md:bg-none  w-full md:w-10/12 md:mx-auto rounded-md backdrop-blur-sm h-full   ">
      <div className="form w-full">
        <h1 className="w-11/12 md:hidden text-white mx-auto text-3xl md:text-black font-bold mt-3 md:mt-0 mb-9 pt-4">
          {" "}
          Welcome Back
        </h1>

        <h1 className="w-11/12 hidden mx-auto text-3xl hidden md:block md:text-black font-bold mt-3 md:mt-0 mb-9 pt-4">
          {" "}
          Login
        </h1>

        <form className="flex flex-col gap-4 text-white  h-auto mt-4" onSubmit={handleSubmit} >
          <label htmlFor="email" className="mx-auto w-11/12">
            <input
              type="email"
              id="email"
              className="border-2  border-t-0 border-x-0 border-b-white md:border-b-black md:text-black w-full rounded-lg truncate ... bg-inherit p-3 h-2/4 my-3 outline-none text-white"
              name="email"
              value={login.email}
              placeholder="johndoe@gmail.com"
              onChange={handleClick}
            />
          </label>

          <label htmlFor="password" className="mx-auto w-11/12">
            <input
              type="password"
              id="password"
              className="border-2 border-t-0 border-x-0 bg-inherit border-b-white w-full rounded-md md:border-b-black md:text-black  focus:border-t-0 focus:border-x-0 truncate ...  p-3 h-2/4 my-3 outline-none"
              name="password"
              value={login.password}
              placeholder="Password"
              onChange={handleClick }
            />
            <p
             className={`pl-3 ${login.password.length < 6 && login.password.length !== 0 ? 'text-red-500' : 'text-green-500'}`}>{login.password.length < 6 && login.password.length !== 0 ? 'password too short' :'' }</p>
            <br />
          </label>

          <div className="flex justify-between text-white md:text-black font-normal p-3">
            <label htmlFor="check">
              <input
                type="checkbox"
                name="check"
                id="check"
                value={login.check}
                onClick={handleClick}
              />
              <span> Remember me</span>
            </label>

            <Link to="/new_pwd">
              <h2> Forgot Password</h2>
            </Link>
          </div>
          
            <div className="btn-over mx-auto my-6  w-11/12">
            <button onClick={signIn ? go_home : ()=>console.log('click again')}  className=" w-full button  bg-black mx-auto text-white text-center p-4 rounded-md font-bold my-3" >
                Button {login.loginValid}
               </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Task;
