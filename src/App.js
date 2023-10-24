import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "../src/component/Home";
import About from "./component/About";
import OurStory from "./component/OurStory";
import OurCreators from "./component/OurCreators";
import OurTeams from "./component/OurTeams";
import Privacy from "./component/Privacy";
import Term from "./component/Term";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/OurStory" element={<OurStory />} />
        <Route path="/OurCreators" element={<OurCreators />} />
        <Route path="/OurTeams" element={<OurTeams />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Term />} />
        {/* <Route path="" element={}/> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
