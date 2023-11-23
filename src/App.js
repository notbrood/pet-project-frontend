import "./App.css";
import Home from "./Components/Home.js";
import LostOne from "./Components/LostOne/LostOne.js";
import Found from "./Components/found one/Found.js";
import LoginForm from "./Components/login_signup/Login.js";
import SignupForm from "./Components/login_signup/Signup.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignupForm />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/lost" element={<LostOne />}></Route>
          <Route path="/found" element={<Found />}></Route>
          <Route path='/*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
