import React from "react";
import "./App.scss";
import {Header} from "./components/header/Header";
import {Carousel} from "./components/carousel/Carousel";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Carousel></Carousel>
    </div>
  );
}

export default App;
