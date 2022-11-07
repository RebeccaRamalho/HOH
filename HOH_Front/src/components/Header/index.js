import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    if (this.props.url === "/") {
      return (
        <header>
          <article>
            {/* <div className="logo">
              <img
                src={logo}
                // style={{ width: this.state.width, height: this.state.height}}
              />
              <p>Ensemble pour un monde meilleur</p>
            </div> */}
            <br />
            <p className="tagline">
              <em className="titleTagline">Hand of Hope</em>
              {/* <h1>Hand of Hope</h1> */}
              <br />
              rassemble des hommes et des femmes de cœur pour relever différents
              défis. Nous sommes tous Hand of Hope ! <br />
            </p>
            <p className="taglineDesktop">
              <em className="titleTaglineDesktop">Hand of Hope</em>
              <span>HAND OF HOPE</span>
              <br />
              c'est une formidable aventure humaine, basée sur la générosité,
              l’énergie, une synergie de compétences et le don de soi.
            </p>

            {/* <Link to="/About" className="enSavoirPlus">
              En savoir plus <em>&rarr;</em>
            </Link> */}
          </article>
          <section className="HomepageImage">
            <img className="imgHeader" src={Header2} alt="taylor" />

            <p
              style={{
                writingMode: "vertical-rl",
                transform: "inherit",
                // transform: "rotate(90deg)",
              }}
              className="facebookLegend"
            >
              RETROUVEZ NOUS SUR
            </p>

            <a className="facebookLink" href="facebookPage">
              <img
                src={facebook}
                style={{
                  marginLeft: "-15px",
                  transform: "rotate(90deg)",
                }}
                alt="facebook logo"
              />
            </a>
          </section>
        </header>
      );
    } else if (this.props.url === "/adminPage") {
      return (
        <div class="all">
          <div class="admin-header">
            <div class="header-text">
              <h3>Dashboard</h3>

              <div class="header-greet">
                {/* <span>Bonjour Mizu</span>

                <img
                  src={connectedUser2}
                  alt="admin profil picture"
                  class="AdminPhoto"
                /> */}
              </div>
            </div>
          </div>

          <div class="admin-sidebar">
            <ul>
              <li className="liAdmin" id="articleLink">
                <Link to="/articles" class="white">
                  {" "}
                  Articles
                </Link>
              </li>

              <li className="liAdmin">
                <Link to="/temoignages" class="white">
                  Témoignages
                </Link>
              </li>

              <li className="liAdmin">
                <Link to="/logout" onClick={this.logout} class="white">
                  Déconnexion
                </Link>
              </li>
            </ul>
          </div>

          <div class="center-content">
            <div class="all-border">
              <div class="shows-location">
                <div class="location-text">
                  <span class="location">Bienvenue Hand of hope</span>
                </div>
              </div>
            </div>
          </div>
          {}
        </div>
      );
    } else if (
      this.props.url === "/articles" ||
      "/temoignages" ||
      "/votrePetitMot/:id" ||
      "/adminArticleDetails/:article_id" ||
      "/article/:article_id"
    ) {
      return (
        <div class="all">
          <div class="admin-header">
            <div class="header-text">
              <h3>Dashboard</h3>

              <div class="header-greet">
                {/* <span>Bonjour Mizu</span> */}
                {/* 
                <img
                  src={connectedUser2}
                  alt="admin profil picture"
                  class="AdminPhoto"
                /> */}
              </div>
            </div>
          </div>

          <div class="admin-sidebar">
            <ul>
              {/* <li className="liAdmin">
                <Link to="/adminPage" class="white">
                  Acceuil
                </Link>
              </li> */}
              <li className="liAdmin">
                <Link to="/articles" class="white">
                  {" "}
                  Articles
                </Link>
              </li>

              <li className="liAdmin">
                <Link to="/temoignages" class="white">
                  Témoignages
                </Link>
              </li>

              <li className="liAdmin">
                <Link to="/logout" onClick={this.logout} class="white">
                  Déconnexion
                </Link>
              </li>
            </ul>
          </div>

          <div class="center-content">
            <div class="all-border">
              <div class="shows-location">
                <div class="location-text">
                  <span class="location">Bonjour!</span>
                </div>
              </div>
            </div>
          </div>
          {/* {"/articles"} */}
          {/* {this.props.url === "/articles" ? ( */}
        </div>
      );
    }
  }
}
