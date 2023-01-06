import React from "react";
// react router
import { Routes, Route } from "react-router-dom";
// pages
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Person from "./Person";
// navbar
import Navbar from "./Navbar";
const ReactRouterSetup = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/people" element={<People />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
};

export default ReactRouterSetup;
