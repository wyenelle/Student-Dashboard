import './App.css'
import Home from './components/Home/Home'
import {useState,useEffect} from 'react'

function App() {
const [user,setUser] = useState([])


// useEffect(()=>{
//     let res = axios.get('https://jsonplaceholder.typicode.com/photos')
// },[])
  return (
    <div className="App ">
        <Home  />

    </div>
  )
}

export default App
