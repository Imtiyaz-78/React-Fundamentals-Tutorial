import React from "react";
import { NavLink } from "react-router-dom";

import menubar from "./menubar.css";

const Menubar = () => {
  return (
    <>
      <div className="row">
        <div className="container-fluid">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <NavLink className="navbar-brand active" to="/">
                Frontend Developer
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      activeClassName="active"
                      exact
                      className="nav-link"
                      to="/"
                    >
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </li>

                  <li className="nav-item  ">
                    <NavLink
                      activeClassName="active"
                      className="nav-link"
                      to="/Services"
                    >
                      Service
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      activeClassName="active"
                      className="nav-link"
                      to="/Contact"
                    >
                      Contact
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      activeClassName="active"
                      className="nav-link "
                      to="/About"
                    >
                      About
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menubar;

//bg="primary"
