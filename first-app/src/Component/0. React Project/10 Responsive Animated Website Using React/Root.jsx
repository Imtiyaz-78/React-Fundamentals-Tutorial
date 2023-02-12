import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Services from "./Services";
import About from "./About";
import Menubar from "./Menubar";


const Root = () => {
  return (
    <>
      <BrowserRouter>
      <Menubar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="*" element={<Navigate to="/" />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Root;
