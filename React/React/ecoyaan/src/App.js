
import './App.css';

import {Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Sellonecoyaan from "./routes/Sellonecoyann";
import Careers from './routes/Careers';
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/sellonecoyaan" element={<Sellonecoyaan/>}/>
          <Route path="/careers" element={<Careers/>}/>
      </Routes>
  
   
    </div>
  );
}

export default App;
