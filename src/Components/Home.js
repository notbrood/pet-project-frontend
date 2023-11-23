import React from "react";
import NavBar from "./Nav";
import "./Home.css";
import Widget from "./Widget/Widget";

function Home() {
  return (
    <div className="home">
      <div className="home-navbar"> <NavBar /></div>
      <div className="widget-navbar"><Widget /></div>
    </div>
  );
}

export default Home;
