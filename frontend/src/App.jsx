
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Addbooks from "./Pages/Addbooks"
import Login from './Pages/Login'
import Viewbooks from "./Pages/Viewbooks"

import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";

function App() {

  return (
   <Router>
    <Navbar/>
    <Routes>
       <Route exact path='/' element={<Home/>}></Route>
       <Route  path='/addbooks' element={<Addbooks/>}></Route>
       <Route  path='/viewbooks' element={<Viewbooks/>}></Route>
       <Route  path='/login' element={<Login/>}></Route>
    </Routes>
   </Router>
  )
}

export default App
