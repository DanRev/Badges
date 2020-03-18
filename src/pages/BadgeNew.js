import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import PageLoading from "../components/PageLoading";
import md5 from "md5";
import api from "../api";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
      avatarUrl: ""
    },
    loading: false,
    error: null
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Soy form", this.state.form);
    if (this.checkFields(this.state.form)) {
      console.log("Faltan Campos por llenar");
      this.props.history.push("/badges/test");
    } else {
      this.postData(this.state.form);
    }
  };

  postData = async badge => {
    const email = this.state.form.email;
    const hash = md5(email);
    const avatar = `https://www.gravatar.com/avatar/${hash}?d=identicon`;
    badge.avatarUrl = avatar;
    this.setState({ loading: true, error: null });
    console.log(badge);

    try {
      if (this.checkFields(badge)) {
        this.setState({ error: true });
        return;
      }
      await api.badges.create(badge);

      this.setState({ loading: false });
      this.eraseDataForm();

      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
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

  checkFields = badge => {
    if (
      badge.firstName === "" ||
      badge.lastName === "" ||
      badge.email === "" ||
      badge.jobTitle === ""
    ) {
      return true;
    }
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
    if (this.state.loading) {
      return <PageLoading />;
    }

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
                avatarUrl={this.state.form.avatarUrl}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
                onSubmit={this.handleSubmit}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
