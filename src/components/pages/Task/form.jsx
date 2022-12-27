import React from 'react'
import {useReducer} from 'react'

function reducer (initialState,action){
    switch (action.type) {
        case 'email': {
            return {
                ...initialState, email : action.value
            }
        }
        case 'password': {
            return {
                ...initialState, password : action.value
            }
        }
        case 'check': {
            return {
                ...initialState, check : action.value
            }
        }
            
    
        default:
            throw  Error('Unknown error ' + action.type)
    }
}



const Form = () => {
    const form_data = {
        name :  ' ',
        value : ' ',
        check: false
    }
    
    const [initialState,dispatch] = useReducer(reducer,form_data)
    
const handleClick = (e) => {
    const {name,value} = e.target
    dispatch({
        type : name,
        value,
    })
    console.log(initialState.name,initialState.value)
}  
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
    
            <form className="flex flex-col gap-4 text-white  h-auto mt-4"  >
              <label htmlFor="email" className="mx-auto w-11/12">
                <input
                  type="email"
                  id="email"
                  className="border-2  border-t-0 border-x-0 border-b-white md:border-b-black md:text-black w-full rounded-lg truncate ... bg-inherit p-3 h-2/4 my-3 outline-none text-white"
                  name="email"
                  value={initialState.email}
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
                  value={initialState.password}
                  placeholder="Password"
                  onChange={handleClick }
                />
              </label>
    
              <div className="flex justify-between text-white md:text-black font-normal p-3">
                <label htmlFor="check">
                  <input
                    type="checkbox"
                    name="check"
                    id="check"
                    checked={initialState.check}
                    onClick={handleClick}
                  />
                  <span> Remember me</span>
                </label>
   
              </div>
              
                <div className="btn-over mx-auto my-6  w-11/12">
                <button   className=" w-full button  bg-black mx-auto text-white text-center p-4 rounded-md font-bold my-3" >
                    Button 
                   </button>
                </div>
            </form>
          </div>
        </div>
      );
}

export default Form