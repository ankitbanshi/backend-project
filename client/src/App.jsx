import React from "react";
import {  Routes, Route } from "react-router-dom";
import { SignUp, SignIn } from "./pages/SignUp" // Import your auth components
import Home from "./Home"; // Import the Home component

const App = () => {
  return (
  
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
   
  );
};

export default App;