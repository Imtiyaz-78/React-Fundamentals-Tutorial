import React from "react";
import { NavLink } from "react-router-dom";

const ErrorHandle = () => {
  return (
    <>
      <div>
        <h1 style={{ color: "red" }}>404 Error Page</h1>
        <p>Sorry, This page is not Exist</p>
        <button> <NavLink to="/" style={{textDecoration: "none"}}>Go Back</NavLink></button>
      </div>
    </>
  );
};

export default ErrorHandle;
