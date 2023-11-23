import React from 'react';
import './NavBar.css'; 
import { Link, json } from 'react-router-dom';
const NavBar = () => {
  const loggedInUser = localStorage.getItem("user");
  var text;
  var ConditionalLink;
  if(!loggedInUser){
    ConditionalLink = 
      <Link className='login-button' to="/signup">Login/Signup</Link>;
  }
  else{
    ConditionalLink =
      <Link className='logout' to="/login" onClick={handleClick}>Logout</Link>;
      text = <h1> Welcome, {JSON.parse(loggedInUser)["name"]}</h1>

  }
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src="https://clipart-library.com/images/pTqrGe6jc.gif" alt="Logo" /> 
        {text}
      </div>
      <div className="nav-links">
        <Link className='nav-home' to="/home">Home</Link>
        {ConditionalLink}
      </div>
    </div>
  );
}
function handleClick() {
  const loggedInUser = localStorage.getItem("user");
  localStorage.clear();
}

export default NavBar;
