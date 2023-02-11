import React, { Component } from "react";
import "../../assets/stylesheets/Video.scss";
// import ytb from "https://www.youtube.com/embed/BAMwbICU7G4"
import ReactDOM from "react-dom";
import App from "../../App";

//nav

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="video">
        <h1>Les dernières actualités</h1>
        <h2>L'HYGIÈNE MENSTRUELLE DANS LE MONDE</h2>
        <br />
        <iframe
          controls
          src="https://www.youtube.com/embed/BAMwbICU7G4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="fa fa-youtube-play blue-color "
        ></iframe>
        {/* <i class="fa fa-youtube-play blue-color "></i> */}
        <br />
        <span></span>
      </div>
    );
  }
}
