import React from "react";
import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
// -------------Home-------------------
import Home from "../src/component/Home";

import About from "../src/component/About";
import OurStory from "../src/component/OurStory";
import OurCreators from "../src/component/OurCreators";
import OurTeams from "../src/component/OurTeams";


function App(){ 

  return(
    
    <BrowserRouter>
    <Routes>
    <Route index element={<Home/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/OurStory" element={<OurStory/>}/>
    <Route path="/OurCreators" element={<OurCreators/>}/>
    <Route path="/OurTeams" element={<OurTeams/>}/> 
    
    
    </Routes>
     </BrowserRouter>
  ); 
}
export default App;
