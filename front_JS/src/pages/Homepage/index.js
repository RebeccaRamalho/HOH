import React, { Component } from "react";
import NavHomePage from "../../components/NavHomePage/index";
import Actuality from "../../components/Actuality";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Testimony from "../../components/Testimony";
import Video from "../../components/Video";
import "../../assets/stylesheets/homepage.scss";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
      marginTop: "3050px",
    };
  }

  render() {
    return (
      <div className="homepage">
        <NavHomePage url={this.props.match.url} margintop={"100px"} />
        {/* {this.props.match.url === "/" ? <NavHomePage /> : null} */}
        <Header url={this.props.match.url} />
        <Actuality margintop={"50px"} />
        <Video />
        <Testimony />
        {/* <a href="/api/votrePetitMot">Témoignez!</a> */}
        <Footer />
      </div>
    );
  }
}
