import React from "react";
import { Link } from "react-router-dom";
import bartImg from "../images/bartImg.png";
import "./styles/NotFound.css";

class NotFound extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="center_Image">
          <img src={bartImg} alt="imgFondo" />
        </div>
        <strong className="strong">UPS!!</strong>
        <p>404!! We have not found results</p>
        <div className="Badges_buttons">
          <Link to="/" className="btn btn-danger">
            Home
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default NotFound;
