import React from "react";
import platziAstronauts from "../images/astronauts.svg";
import platziConf from "../images/platziconf-logo.svg";

import { Link } from "react-router-dom";
import "./styles/home.css";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Badges_font">
          <div className="container">
            <div className="row">
              <div className="home_col col-12 col-md-4">
                <img
                  src={platziConf}
                  alt="Platzi Conf Logo"
                  className="img-fluid mb-2s"
                />
                <h1>Print Your Badges</h1>
                <Link className="btn btn-primary" to="/badges">
                  Star Now
                </Link>
              </div>
              <div className="home_col d-none d-md-block col-md-8">
                <img src={platziAstronauts} alt="" className="img-fluid p-4" />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
