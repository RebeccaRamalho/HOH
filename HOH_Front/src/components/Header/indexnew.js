import React, { Component } from "react";
import "../../assets/stylesheets/header.scss";
import Header1 from "../../assets/images/Header1.jpg";
import Header2 from "../../assets/images/Header2.jpeg";
import ArticleForm from "../../components/ArticleForm/index";
import connectedUser2 from "../../assets/images/connectedUser2.jpg";
import logo from "../../assets/images/logo_hoh_officiel.jpeg";
import Headerprotablett from "../../assets/images/Header-tablette-pro.jpg";

import facebook from "../../assets/images/facebook.svg";
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "100px",
      height: "100px",
    };
  }
  logout = () => {
    localStorage.clear();
    this.props.history.push("/articles/");
  };

  render() {

  }

}