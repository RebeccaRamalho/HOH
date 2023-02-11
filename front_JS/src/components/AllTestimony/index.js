import React, { Component } from "react";
// import appContext from '../../store';
import { reviewService } from "../../services";
import connectedUser2 from "../../assets/images/connectedUser2.jpg";
import Nav from "../../pages/AdminPage/nav";
import Header from "../Header/index";
import axios from "axios";
import "../../../src/assets/stylesheets/adminPage.scss";

export class Testimonies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
    };
  }
  logout() {
    localStorage.clear();
    window.location.href = "/";
  }
  async componentDidMount() {
    try {
      const resAllTestimony = await reviewService.allTestimony();

      this.setState({
        data: resAllTestimony.data,
      });
    } catch (error) {
      console.error(error);
      this.setState({ error: error });
    }
  }

  render() {
    return (
      <div>
        <Header url={this.props.match.url} />
        <section style={{ marginTop: "-111px" }}>
          {this.state.data.map((element, index) => {
            return (
              <div key={index}>
                <div>
                  <h1 style={{ fontSize: "20px" }}>
                    Auteur: {element.last_name}
                  </h1>
                </div>
                <button type="button">
                  <a
                    href={"/votrePetitMot/" + element.id}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Details de l'avis
                  </a>
                </button>
              </div>
            );
          })}
        </section>
      </div>
      // <div class="all">
      //   <div class="admin-header">
      //     <div class="header-text">
      //       <h3>Back-office</h3>

      //       <div class="header-greet">
      //         <span>Bonjour Mizou</span>

      //         <a href="/logout" onClick={this.logout} class="logout-btn white">
      //           <img
      //             src={connectedUser2}
      //             alt="admin profil picture"
      //             class="AdminPhoto"
      //           />
      //         </a>
      //       </div>
      //     </div>
      //   </div>

      //   <div class="admin-sidebar">
      //     <ul>
      //       <li className="liAdmin">
      //         <a href="/adminPage" class="white">
      //           {" "}
      //           Accueil
      //         </a>
      //       </li>
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
      //           <span class="location">Tous les Témoignages</span>
      //         </div>
      //       </div>
      //     </div>

      //     {/*  */}
      //     <div>
      //       {/* <Nav /> */}

      //       <section style={{ marginTop: "-111px" }}>
      //         {this.state.data.map((element, index) => {
      //           return (
      //             <div key={index}>
      //               <div>
      //                 <h1 style={{ fontSize: "20px" }}>
      //                   Auteur: {element.last_name}
      //                 </h1>
      //               </div>
      //               <button>
      //                 <a
      //                   href={"/votrePetitMot/" + element.id}
      //                   style={{ textDecoration: "none", color: "black" }}
      //                 >
      //                   Details de l'avis
      //                 </a>
      //               </button>
      //             </div>
      //           );
      //         })}
      //       </section>
      //     </div>
      //   </div>
      // </div> //
    );
  }
}
