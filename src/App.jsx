import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from "react-router-dom";
import Home from './pages/home';
import Reg from './pages/Register';
import Register from './pages/Register';

function App() {
  const [count, setCount] = useState(0)

  return ( 
    <>
    <Routes>
      <Route path="/" exact element={<Home/>}></Route>
      <Route path="/register" exact element={<Register/>}></Route>
    </Routes>
    </>
  )
}

export default App
