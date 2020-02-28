import React from "react";
import "./styles/BadgesList.css";

class BadgeListItem extends React.Component {
  render() {
    function cutName(name) {
      var nameCut = "";
      for (let index = 0; index < name.length; index++) {
        nameCut += name.charAt(index);
        if (name.charAt(index) === " ") {
          return nameCut;
        }
      }
      return name;
    }

    return (
      <div className="BadgesListItem">
        <img
          className="BadgesListItem_avatar"
          src={this.props.badge.image}
          alt="Img "
        />
        <div>
          <strong>{this.props.badge.name}</strong>
          <br />

          <div className="ListTwitter">@{cutName(this.props.badge.name)}</div>
          {this.props.badge.species}
        </div>
      </div>
    );
  }
}

class BadgesList extends React.Component {
  render() {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                <BadgeListItem badge={badge} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
