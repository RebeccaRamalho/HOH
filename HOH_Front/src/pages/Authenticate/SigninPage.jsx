import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { userService } from "../../services";
import appContext from "../../store";
import "../../assets/stylesheets/loginForm.scss";
import { withCookies } from "react-cookie";

//
const initialState = {
  email: "",
  user_name: "",
  password: "",
  emailError: "",
  passwordError: "",
  user_nameError: "",
  error: null,
  valid: true,
  // token: "",
};

//
class ReactLabel extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <label htmlFor={this.props.htmlFor}>{this.props.title}</label>;
  }
}

class ReactForm extends React.Component {
  // static contextType = appContext;

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  validate = () => {
    let emailError = "";
    let passwordError = "";
    let user_nameError = "";

    //
    if (!this.state.user_name) {
      user_nameError = "vous devez remplir le champs pseudo";
    }
    if (!this.state.password) {
      passwordError = "vous devez remplir le champs mot de passe";
    }
    if (!this.state.email) {
      emailError = "vous devez remplir le champs email";
    }

    if (!this.state.email.includes("@") || !this.state.email.includes(".")) {
      emailError = "email invalid";
    }

    if (emailError || user_nameError) {
      this.setState({
        emailError,
        passwordError,
        user_nameError,
      });
      return false;
    }
    return true;
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
    const isCheckbox = e.target.type === "checkbox";
    this.setState({
      [e.target.name]: isCheckbox ? e.target.checked : e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = this.validate();
    if (isValid) {
      // this.setState(initialState);
      this.setState({
        title: "",
        img: "",
        resume_article: "",
        content_article: "",
        author_article: "",
        video: "",
        admin_id: "",
        error: null,
        file: null,
        base64URL: "",
        titleError: "",
        imgError: "",
        tagsError: "",
        resume_articleError: "",
        content_articleError: "",
        author_articleError: "",
        videoError: "",
      });
    }

    try {
      const response = await userService.signin(
        this.state.email,
        this.state.user_name,
        this.state.password
      );

      this.setState({
        token: this.props.cookies.get("auth-cookie"),
      });
      localStorage.setItem("token", this.props.cookies.get("auth-cookie"));

      console.log("PROPS", this.props);


      this.props.history.push("/adminPage");
    } catch (error) {
      console.error(error);
      this.setState({ error: error });
    }
  };

  render() {
    return (
      // <appContext.Consumer>
      // {(store) => (

      <form action="POST" onSubmit={this.handleSubmit}>
        <fieldset className="form-group">
          <ReactLabel htmlFor="user_name" title="Pseudo:" />
          <input
            id="formName"
            className="form-input"
            name="user_name"
            type="text"
            value={this.state.user_name}
            onChange={this.handleChange}
          />
          {this.state.user_nameError ? (
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.user_nameError}
            </div>
          ) : null}
        </fieldset>

        <fieldset className="form-group">
          <ReactLabel htmlFor="email" title="Email:" />
          <input
            id="formEmail"
            ref="myInput"
            className="form-input"
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="mail@exemple.com"
          />
          {this.state.emailError ? (
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.emailError}
            </div>
          ) : null}
        </fieldset>

        <fieldset className="form-group">
          <ReactLabel htmlFor="password" title="Password:" />
          <input
            id="formPassword"
            ref="myInput"
            className="form-input"
            name="password"
            type="text"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="••••••••••••"
          />
          {this.state.passwordError ? (
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.passwordError}
            </div>
          ) : null}
        </fieldset>

        {!this.state.valid && <p className="alert-danger">Please try again </p>}
        <input
          id="formButton"
          className="btn btn-primary"
          type="submit"
          placeholder="Send message"
          onClick={this.handleSubmit}
        />
      </form>

      //   )}
      // {/* </appContext.Consumer> */}
    );
  }
}

export default withCookies(ReactForm);
