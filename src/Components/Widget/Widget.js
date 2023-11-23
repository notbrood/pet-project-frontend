import React from "react";
import "./Widget.css";
import { Link } from "react-router-dom";

function Widget() {
  return (
    <div className="widget">
      <p className="p1">Find Your Furry Friend</p>
      <p className="p2">“Lost and Found pets hub “</p>
      <p className="p3">Tell us about your story, how can we help ..</p>
      <section>
        <Link className="found-btton" to='/found'>I Found One :)</Link>
        <Link className="lost-btton" to="/lost">I Lost One :(</Link>
      </section>
      <div>
        <img className="dog-hero" src="dog-hero.png" alt="Hero-Dog" />
      </div>
    </div>
  );
}

export default Widget;
