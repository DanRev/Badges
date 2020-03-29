import React, { Component } from "react";
import BadgeEdit from "../pages/BadgeEdit";

class BadgeDetails extends Component {
  render() {
    return (
      <React.Fragment>
        <BadgeEdit idBadge={this.props.match.params.badgeId} visible={false} />
      </React.Fragment>
    );
  }
}

export default BadgeDetails;
