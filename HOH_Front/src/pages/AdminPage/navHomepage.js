import React, { Component } from "react";
import "../../assets/stylesheets/nav.scss";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: "",
      //on initialise le menu à vide car initialement il ne s'affiche pas tant que l'on a pas cliqué sur le burger menu
      navStates: [],

      //on initialise un compteur pour gérer l'affichage conditionnellement c'est à dire au premier(0) clique afficher le menu au deuxième le caher ainsi de suite
      compteur: 0,
      n: 1, //n va s'incrément de 1 à chaque clique,
    };
  }

  /************************/

  logout() {
    localStorage.clear();
    window.location.href = "/";
  }


  /************************/

  //on remplie le menu qui était initialement vide pour que lorsque l'on clique les éléments du menu s'affiche
  showMenu = () => {
    this.setState({
      navStates: ["contact", "actualite", "don", "nous", "sengager"],
      visibility: "visibily",
      transformTop: "rotate(45deg) translate(3px, 4px)",
      transformBottom: "rotate(-45deg) translate(3px, -4px)",
      //style
      width: "80vw", //80vw
      backgroundColor: "white",
      opacity: 0.6,
      height: "97vh",
      background: "transparent",
    });
  };

  //on revide le menu pour qu'au clique pour le femer le menu disparaisse
  hideMenu = () => {
    this.setState({
      navStates: [],
      height: 0,
      visibility: "hidden",
      width: 0,
      backgroundColor: "",
      opacity: 0,
      transition: "all 0.8s ease-out",
      transformTop: "",
      transformBottom: "",
      background: "black",
      color: "black",
      boxShadow: "10px 5px 5px black",
      contactAdress: "",
    });
  };

  /************************/

  //on créer un compteur pour qu'au premier(0) clique le menu s'affiche au second(1) il disparaissent au troisième(2) il apparaissent etc...
  burgerMenuCompteur = () => {
    this.setState({
      compteur: this.state.compteur + this.state.n,
    });

    if (this.state.compteur % 2) {
      //au deuxième clique cacher le menu => deuxième clique = compteur à 2
      //autrement dit si le compteur = chiffre impair cacher le menu (soit 1 pour le deuxième clique, 3 pour le troisième clique etc...) sachant que le deuxième clique sera forcément pour fermer le menu
      this.hideMenu();
    } else {
      //au premier clique afficher le menu => premier clique = compteur à 1
      //autrement dit si compteur = chiffre pair afficher le menu
      this.showMenu();
    }
  };


  render() {
    const navArray = this.state.navStates;
    const iterateNav = navArray.map((el) => (
      <li>
        <a href={el}>{el}</a>
      </li>
    ));

    return (
      <div
        className="BurgerLink"
        style={{
          backgroundColor: this.state.backgroundColor,
        }}
      >
        {/*changement dynamique des valeurs via this.hideMenu(); la valeur des liens de nav alterne entre string vide et string remplis. Exemple au clique on passe de lien invisible c'est à dire "" à des liens qui deviennent visible comme "contact"*/}
        {/* ul menuBurger disponible version mobile composant only JS */}
        <ul style={{ border: "5px solid pink" }}>{iterateNav}</ul>

        {/* ul menuBurger disponible version desktop*/}
        <ul className="Links">
          <li
            style={{
              paddingLeft: this.state.paddingLeft,
              fontSize: this.state.fontSize,
            }}
          >
            <a href="/articles">Article</a>
          </li>

          <li
            style={{
              paddingLeft: this.state.paddingLeft,
              fontSize: this.state.fontSize,
            }}
          >
            <a href="/temoignages">Témoignages</a>
          </li>

          <li
            style={{
              paddingLeft: this.state.paddingLeft,
              fontSize: this.state.fontSize,
            }}
          >
            <a href="/logout" onClick={this.logout}>
             Déconnexion
            </a>
          </li>
        </ul>

        <div className="burgerMenu" onClick={this.burgerMenuCompteur}>
          <div style={{ transform: this.state.transformTop }}></div>
          <div style={{ background: this.state.background }}></div>
          <div style={{ transform: this.state.transformBottom }}></div>
        </div>
      </div>
    );
  }
}
export default index;
