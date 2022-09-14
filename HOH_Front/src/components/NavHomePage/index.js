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

  showAdress = () => {
    this.setState({
      contactAdressPart1: "5 allée de la Houdiarde",
      contactAdressPart2: "VEMARS 95470",
    });
  };

  hideAdress = () => {
    this.setState({
      contactAdressPart1: "",
      contactAdressPart2: "",
      contactHeight: 0,
      contactwidth: 0,
    });
  };

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
      this.hideAdress();
    } else {
      //au premier clique afficher le menu => premier clique = compteur à 1
      //autrement dit si compteur = chiffre pair afficher le menu
      this.showMenu();
    }
  };
  adressCompteur = () => {
    this.setState({
      compteur: this.state.compteur + this.state.n,
    });

    if (window.innerWidth < 768) {
      if (this.state.compteur % 2) {
        //au deuxième clique cacher le menu => deuxième clique = compteur à 2
        //autrement dit si le compteur = chiffre impair cacher le menu (soit 1 pour le deuxième clique, 3 pour le troisième clique etc...) sachant que le deuxième clique sera forcément pour fermer le menu
        this.showAdress();
      } else {
        //au premier clique afficher le menu => premier clique = compteur à 1
        //autrement dit si compteur = chiffre pair afficher le menu
        this.hideAdress();
      }
    }
  };

  render() {
    const navArray = this.state.navStates;
    const iterateNav = navArray.map((el) => (
      <li>
        <a href={el}>{el}</a>
      </li>
    ));
    if (this.props.url === "/") {
      return (
        <div
          className="BurgerLink Brg"
          style={{
            backgroundColor: this.state.backgroundColor,
            left: "22%",
            top: "76px",
            position: "relative",
            textDecoration: "none",
          }}
        >
          {/*changement dynamique des valeurs via this.hideMenu(); la valeur des liens de nav alterne entre string vide et string remplis. Exemple au clique on passe de lien invisible c'est à dire "" à des liens qui deviennent visible comme "contact"*/}
          {/* ul menuBurger disponible version mobile composant only JS */}
          <ul
            style={{
              marginTop: this.props.margintop,
            }}
          >
            {iterateNav}
          </ul>

          {/* ul menuBurger disponible version desktop*/}
          <ul className="Links" style={{ marginTop: "-54px" }}>
            <li
              style={{
                paddingLeft: this.state.paddingLeft,
                fontSize: this.state.fontSize,
              }}
            >
              <a href="/allArticles" style={{ color: "white" }}>
                Actualité
              </a>
            </li>

            <li
              style={{
                paddingLeft: this.state.paddingLeft,
                fontSize: this.state.fontSize,
              }}
            >
              <a href="/aPropos" style={{ color: "white" }}>
                A propos de nous
              </a>
            </li>
            <li
              style={{
                paddingLeft: this.state.paddingLeft,
                fontSize: this.state.fontSize,
              }}
            >
              <a href="/sengager" style={{ color: "white" }}>
                S'engager
              </a>
            </li>
            <li
              className="contacts"
              style={{
                paddingLeft: this.state.paddingLeft,
                fontSize: this.state.fontS,
              }}
            >
              <a href="/contact" style={{ color: "white" }}>
                Contact
              </a>
              <a
                href="#"
                onClick={this.adressCompteur}
                style={{ color: "white" }}
              >
                {this.state.contact}
              </a>
              <div className="contactPart1">
                <p>{this.state.contactAdressPart1}</p>
              </div>
              <div className="contactPart2">
                <p>{this.state.contactAdressPart2}</p>
              </div>
            </li>
          </ul>

          <div className="burgerMenu" onClick={this.burgerMenuCompteur}>
            <div style={{ transform: this.state.transformTop }}></div>
            <div style={{ background: this.state.background }}></div>
            <div style={{ transform: this.state.transformBottom }}></div>
          </div>
        </div>
      );
    } else {
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
              <a href="/">Accueil</a>
            </li>

            <li
              style={{
                paddingLeft: this.state.paddingLeft,
                fontSize: this.state.fontSize,
              }}
            >
              <a href="/allArticles">Actualité</a>
            </li>

            <li
              style={{
                paddingLeft: this.state.paddingLeft,
                fontSize: this.state.fontSize,
              }}
            >
              <a href="/aPropos">A propos de nous</a>
            </li>
            <li
              style={{
                paddingLeft: this.state.paddingLeft,
                fontSize: this.state.fontSize,
              }}
            >
              <a href="/sengager">S'engager</a>
            </li>
            <li
              className="contacts contactTest"
              style={{
                paddingLeft: this.state.paddingLeft,
                fontSize: this.state.fontS,
              }}
            >
              <a href="/contact">Contact</a>

              <a href="/contact" onClick={this.adressCompteur}>
                {this.state.contact}
              </a>
              <div className="contactPart1">
                <p>{this.state.contactAdressPart1}</p>
              </div>
              <div className="contactPart2">
                <p>{this.state.contactAdressPart2}</p>
              </div>
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
}
export default index;
