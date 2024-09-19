import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Firebase from "./Component/Fire-base";
import Adddata from './Component/Adddata';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Viewuser from './Component/Viewuser';
import Edit from './Component/Edit';


function App() {

  return (
    <>
      <div>
       
      <BrowserRouter>
        <Routes>
          <Route element={<Firebase/>} path='/'></Route>
          <Route element={<Adddata/>} path='/addata'></Route>
          <Route element={<Viewuser/>} path='/viewuser'></Route>
          <Route element={<Edit/>} path='/edituser'></Route>
        </Routes>
      </BrowserRouter>
  
      </div>
    </> 
  )
}

export default App
