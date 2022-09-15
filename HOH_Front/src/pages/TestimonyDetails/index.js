import React, { Component } from "react";
// import appContext from '../../store';
import { reviewService } from "../../services";
import axios from "axios";
import Header from "../../components/Header";
import "../../../src/assets/stylesheets/adminPage.scss";
import connectedUser2 from "../../assets/images/connectedUser2.jpg";
import Testimony from "../../components/Testimony";

export class TestimonyDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
      name: "koko",
    };
  }

  handleClick = async () => {
    const testimonyId = this.props.match.params.id;

    // this.props.history.push("/article/" + articleId);
    try {
      await reviewService.deleteOneTestimony(testimonyId);
      // this.props.history.push("/article/");
    } catch (error) {
      this.setState({
        error: error,
      });
    }
  };
  async componentDidMount() {
    this.GetOneTestimony();
  }
  GetOneTestimony = async () => {
    const testimonyId = this.props.match.params.id;

    try {
      const getAnArticle = await reviewService.getOneTestimony(testimonyId);
      //
      this.setState({
        data: getAnArticle.data,
      });
      //
      // console.log("data", this.state.data);
    } catch (error) {
      this.setState({ error: error });
    }
  };

  render() {
    return (
      <div>
        <Header url={this.props.match.url} />
        <div>
          <section style={{ marginTop: "-145px" }}>
            {this.state.data.map((element, index) => {
              return (
                <div key={index}>
                  <div>
                    <h1 style={{ marginLeft: "-197px", fontSize: "19px" }}>
                      Auteur: {element.last_name}
                    </h1>
                    <p>Role: {element.role}</p>
                    <p>Opinion: "{element.opinion}"</p>
                  </div>
                  <button type="button" onClick={this.handleClick}>
                    Supprimer
                  </button>
                  {/* <button onClick={this.renderTestimony}>Ajouter</button> */}
                </div>
              );
            })}
          </section>
        </div>
      </div>
      // <div class="all">
      //   <div class="admin-header">
      //     <div class="header-text">
      //       <h3>Back-office</h3>

      //       <div class="header-greet">
      //         <span>
      //           <i class="fa">&#xf007;</i> Bonjour Mizu
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
      //         <a href="/logout" onClick={this.logout} class="logout-btn white">
      //           Déconnexion
      //         </a>
      //       </li>
      //     </ul>
      //   </div>

      //   <div class="center-content">
      //     <div class="all-border">
      //       <div class="shows-location">
      //         <div class="location-text">
      //           <span class="location">Détails d'un Témoignages</span>
      //         </div>
      //       </div>
      //     </div>

      //     {/* <ArticleForm /> */}
      //     <div>
      //       <section style={{ marginTop: "-145px" }}>
      //         {this.state.data.map((element, index) => {
      //           return (
      //             <div key={index}>
      //               <div>
      //                 <h1 style={{ marginLeft: "-197px", fontSize: "19px" }}>
      //                   Auteur: {element.last_name}
      //                 </h1>
      //                 <p>Role: {element.role}</p>
      //                 <p>Opinion: "{element.opinion}"</p>
      //               </div>
      //               <button onClick={this.handleClick}>Supprimer</button>
      //               {/* <button onClick={this.renderTestimony}>Ajouter</button> */}
      //             </div>
      //           );
      //         })}
      //       </section>
      //     </div>
      //   </div>
      // </div>

      //
    );
  }
}
