import React, { Component } from "react";
import Header from "../../components/Header";
import ArticleForm from "../../components/ArticleForm/index";
import connectedUser2 from "../../assets/images/connectedUser2.jpg";
import "../../assets/stylesheets/test.scss";

export default class test extends Component {
  logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  render() {
    return (
      <div>
        <Header url={this.props.match.url} />
        <ArticleForm />
      </div>
    );
  }
}
