import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

const App=(props)=>{
  return(
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<div>Home page</div>} />
        <Route path="/app" element={<div>Route /app</div>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
