import React from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/Badges.css";
import BadgesList from "../components/BadgesList";
import { Link } from "react-router-dom";

class Badges extends React.Component {
  constructor(props) {
    super(props);
    console.log("1. constructor()");
    this.state = {
      data: {
        results: []
      },
      nextPage: 1
    };
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`
    );
    const data = await response.json();
    console.log(data);

    this.setState({
      ...this.state,
      data: {
        results: [].concat(this.state.data.results, data.results)
      },
      nextPage: this.state.nextPage + 1
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges_hero">
            <div className="Badges_container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>
        <div className="Badge_container">
          <div className="Badges_buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
          <div className="Badges_list">
            <div className="Badges_container">
              <BadgesList badges={this.state.data.results} />
            </div>
          </div>
        </div>
        <div className="Badges_buttons">
          <button
            onClick={() => this.fetchCharacters()}
            className="btn btn-primary"
          >
            Load More
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
