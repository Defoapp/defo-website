import React from "react";
import "./App.css";
import Home from "../src/component/Home";
import Modules from "../src/component/Modules";
// import Price from "../src/component/Price";
import Link from "../src/component/Link";

function App(){ 

  return(
    <div>
    <Home />
    <Modules/>
    {/* <Price/> */}
    <Link/>
    </div>
  ); 
}
export default App;
