import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './HomePage/Home'
import Insighter from './InsightPage/Insighter'
import Hack from './HackertoonPage/Hack'

const App = () => {
  return (
    <div>
         <BrowserRouter>
         <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/Insighter" element={<Insighter />}/>
         <Route path="/Hack" element={<Hack />}/>
         </Routes>
         </BrowserRouter>
    
      
    </div>
  )
}

export default App

