import React, { Component } from "react";
import Nav from "../../components/Nav/index";
import Footer from "../../components/Footer/index";
import NavHomePage from "../../components/NavHomePage/index";

export default class ContactAssociation extends Component {
  render() {
    return (
      <div>
        <NavHomePage url={this.props.match.url} />
        <div class="sengagerContainer">
          {/* <Nav /> */}
          <h1>NOUS CONTACTER</h1>

          <div className="ligne"></div>

          <p className="ContactP">
            <strong>Victoire Bilongo</strong>
            <br />
            36 rue veymars
            <br />
            95500
            <br />
            0709675534
          </p>
          <div
            style={{
              width: "1120px",
              color: "black",
              border: "1px solid black",
              marginTop: "93px",
            }}
          ></div>
          <Footer />
        </div>
      </div>
    );
  }
}
