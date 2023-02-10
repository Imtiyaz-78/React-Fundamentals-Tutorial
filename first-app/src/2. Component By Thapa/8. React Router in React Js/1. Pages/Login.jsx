import React from "react";
import login from './login.css';

const Login = () => {
  return (
    <>
      <div className="container">
        <label >UserName</label><br />
        <input type="text" placeholder="Enter User Name"/><br />
        <label >Password</label><br />
        <input type="password" placeholder="Enter Password" />


      </div>
    </>
  );
};

export default Login;
