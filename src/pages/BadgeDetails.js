import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles/BadgeDetails.css";
import header from "../images/platziconf-logo.svg";
import api from "../api";
import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal";

import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

class BadgeDetails extends Component {
  state = {
    error: null,
    loading: true,
    form: undefined,
    modalIsOpen: false
  };

  componentDidMount() {
    this.fetchData();
  }

  handleCloseModal = e => {
    this.setState({ modalIsOpen: false });
  };

  handleOpenModal = e => {
    this.setState({ modalIsOpen: true });
  };

  fetchData = async e => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleDeleteBadge = async e => {
    this.setState({ loading: true, error: null });

    try {
      await api.badges.remove(this.props.match.params.badgeId);
      this.setState({ loading: false });

      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    const badge = this.state.form;

    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="containerInfo">
          <div className="BadgeEdit_hero BadgeEdit_header">
            <img className="img-fluid" src={header} alt="logo" />
            <div className="infoBadge">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
        <div className="container_details">
          <div className="containerT">
            <div className="row">
              <div className="col">
                <Badge
                  firstName={this.state.form.firstName || "FIRST_NAME"}
                  lastName={this.state.form.lastName || "LAST_NAME"}
                  twitter={this.state.form.twitter || "twitter"}
                  email={this.state.form.email || "EMAIL"}
                  jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
                  avatarUrl={this.state.form.avatarUrl}
                />
              </div>
            </div>
          </div>
          <div className="btn_actions">
            <p>Actions:</p>
            <Link
              className="btn btn-primary btnI"
              to={`/badges/${badge.id}/edit`}
            >
              Edit
            </Link>
            <button onClick={this.handleOpenModal} className="btn btn-danger">
              Delete
            </button>
            <DeleteBadgeModal
              isOpen={this.state.modalIsOpen}
              onClose={this.handleCloseModal}
              onDeleteBadge={this.handleDeleteBadge}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeDetails;
