import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import api from "../api";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: ""
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.postData(this.state.form);
  };

  postData = badge => {
    if (api.badges.create(badge)) {
      console.log("Agregado");
      this.eraseDataForm();
    }
  };

  eraseDataForm = () => {
    this.setState({
      form: {
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
        twitter: ""
      }
    });
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew_hero BadgeNew_header">
          <img className="img-fluid" src={header} alt="logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={this.state.form.firstName || "FIRST_NAME"}
                lastName={this.state.form.lastName || "LAST_NAME"}
                twitter={this.state.form.twitter || "twitter"}
                email={this.state.form.email || "EMAIL"}
                jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
                avatarUrl="https://s.gravatar.com/avatar/3d78ab53fee9d74393551d12cbc6adef?s=80"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
                onSubmit={this.handleSubmit}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
