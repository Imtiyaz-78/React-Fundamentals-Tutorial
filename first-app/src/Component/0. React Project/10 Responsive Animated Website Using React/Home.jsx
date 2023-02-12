import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-4 pt-5 pt-lg-10 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Grou your Business with <strong className="navbar-brand">Developer</strong>
                  </h1>
                  <p className="mt-3">
                    We are the same of talented developer making website
                  </p>

                  <div className="mt-3">
                    <NavLink to="/About" className="btn btn-outline-primary">
                      Get stated
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 order-1 order-lg-2 heading-img">
                <img src="" alt="" className="img-fluid animated" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
