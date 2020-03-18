import React from "react";

import "./styles/PageAdvertisement.css";
// import confLogo from "../images/badge-header.svg";
// import Gravatar from "./Gravatar";

class Badge extends React.Component {
  redirectBadgesForm = () => {
    return this.props.history.push("/badges/new");
  };

  render() {
    return (
      <div className="btn-Volver">
        <p className="pField">Fields Incomplete</p>
        <button onClick={this.redirectBadgesForm}>Volver</button>
      </div>
    );
  }
}

export default Badge;
