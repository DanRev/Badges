import React from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/Badges.css";
import BadgesList from "../components/BadgesList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import { Link } from "react-router-dom";

import api from "../api";

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    result: undefined
  };

  componentDidMount() {
    this.fetchData();

    setIn;
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.list();
      this.setState({ loading: false, result: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  /**componentDidMount() {
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
  }; */

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

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
              <BadgesList badges={this.state.result} />
            </div>
          </div>
        </div>
        {/* <div className="Badges_buttons">
          <button
            onClick={() => this.fetchCharacters()}
            className="btn btn-primary"
          >
            Load More
          </button>
        </div> */}
      </React.Fragment>
    );
  }
}

export default Badges;
