import "./Task.css";
import { useReducer,useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


const reducer = (login,action) => {
switch (action.type) {
  case 'email':
    return {...login, email: action.payload }
  case 'password':
    return {...login, password: action.payload}
  case 'check':
    return {...login, check: !login.check}
  default:
    throw new Error('No such Event')
}
}
const initialState = {
  email: "",
  password: "",
  check: false,
  loginValid : false
}
const Task = () => {
const [login, dispatch] = useReducer(reducer, initialState)


  const regex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
  const [signIn, setSignIn] = useState(false);
  const navigate = useNavigate();

  //  THIS FUNCTIONS HANDLE FORM VALIDATION AND SUBMISSION
  const handleClick = (e) => {
    const {name,value} = e.target
    dispatch({type : name, payload: value})
      }
  const validate_form = ()=>{    
    if( login.email.match(regex) && login.password.length >= 6)(
        setSignIn(true)
    )
  }

  const handleSubmit = (e) => {
      e.preventDefault()
}

  const go_home = ()=>(
    navigate('/home')
  )

 useEffect(()=>{
//  CHECKS TO SEE IF THE FORM FIELS WERE FILLED CORRECTLY EACH TIME THE STATE CHANGES 
    validate_form()
 },[login])



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
                Button 
               </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Task;
