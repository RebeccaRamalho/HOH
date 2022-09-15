import React, { Component } from "react";
import Header from "../../components/Header";
import ArticleForm from "../../components/ArticleForm/index";
import connectedUser2 from "../../assets/images/connectedUser2.jpg";
import "../../assets/stylesheets/test.scss";

export default class test extends Component {
  logout = () => {
    localStorage.clear();
    window.location.href = "/";
  }

  render() {
    return (
      <div>
        <Header url={this.props.match.url}/>
        <ArticleForm />
      </div>
        // <div class="all">
        //   <div class="admin-header">
        //     <div class="header-text">
        //       <h3>Back-office</h3>

        //       <div class="header-greet">
        //         <span>
        //          Bonjour Mizu
        //         </span>

        //         <img
        //           src={connectedUser2}
        //           alt="admin profil picture"
        //           class="AdminPhoto"
        //         />
        //       </div>
        //     </div>
        //   </div>

        //   <div class="admin-sidebar">
        //     <ul>

        //       <li className="liAdmin">
        //         <a href="/articles" class="white">
        //           {" "}
        //           Articles
        //         </a>
        //       </li>

        //       <li className="liAdmin">
        //         <a href="/temoignages" class="white">
        //           Témoignages
        //         </a>
        //       </li>

        //       <li className="liAdmin">
        //         <a href="/logout" onClick={this.logout} class="white">
        //           Déconnexion
        //         </a>
        //       </li>
        //     </ul>
        //   </div>

        //   <div class="center-content">
        //     <div class="all-border">
        //       <div class="shows-location">
        //         <div class="location-text">
        //           <span class="location">Créer un article</span>
        //         </div>
        //       </div>
        //     </div>

        //     <ArticleForm />
        //   </div>
        // </div>
    );
  }
}
