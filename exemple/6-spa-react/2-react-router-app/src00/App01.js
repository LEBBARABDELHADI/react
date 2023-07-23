import React from "react";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import './App.css';

function App(props){
  return(
    <BrowserRouter>
     <Routes>
     // exact plus necessaire
        <Route path="/" element={<div>Home page</div>} />
        <Route path="/app" element={<div>Route /app</div>} />
        <Route path="*" element={<div>URL inconnue </div>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
