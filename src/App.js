import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './HomePage/Home'
import Insighter from './InsightPage/Insighter'
import Hack from './HackertoonPage/Hack'
import Speaker from './SpeakerPage/Speaker';

const App = () => {
  return (
    <div>
         <BrowserRouter>
         <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/Insighter" element={<Insighter />}/>
         <Route path="/Hack" element={<Hack />}/>
         <Route path="/Speaker" element={<Speaker/>}/>
         </Routes>
         </BrowserRouter>
    
      
    </div>
  )
}

export default App

