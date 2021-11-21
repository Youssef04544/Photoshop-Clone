import "./App.css";
import React from "react";
import SideBarItem from "./SideBarItem";
import Slider from "./Slider.js";

function App() {
  return (
    <div className='container'>
      <div className='main-image'></div>
      <div className='sidebar'>
        <SideBarItem />
        <SideBarItem />
      </div>
      <Slider />
    </div>
  );
}

export default App;
