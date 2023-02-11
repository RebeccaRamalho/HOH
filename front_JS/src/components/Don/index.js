import React, { Component } from "react";
import Nav from "../../components/Nav/index";
import NavHomePage from "../NavHomePage/index";
import StripeContainer from "../Stripe/StripeContainer";
import Footer from "../../components/Footer";
import "../../assets/stylesheets/sengager.scss";

export default class Don extends Component {
  render() {
    return (
      <div>
        {" "}
        <NavHomePage url={this.props.match.url} />
        {/* <Nav /> */}
        <h2 style={{ marginTop: "61px", marginLeft: "482px" }}>1 euros</h2>
        <StripeContainer />
        <Footer />
      </div>
    );
  }
}
