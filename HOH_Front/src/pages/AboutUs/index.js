import React, { Component } from "react";
import fondateur from "../../assets/images/fondateur_hop.jpg";
import NavHomePage from "../../components/NavHomePage/index";
import Footer from "../../components/Footer";
import "../../assets/stylesheets/aboutUs.scss";
// import CheckoutWithStripe from "../../components/Don/CheckoutWithStripe";

export default class index extends Component {
  render() {
    return (
      <div>
        <NavHomePage url={this.props.match.url} />
        <div class="aboutUsContainer">
          {/* <Nav/> */}
          <h1>NOTRE HISTOIRE</h1>

          <div className="ligne"></div>

          <p>
            Association fondée en 2020 par Victoir et Mizou Bilongo avec pour
            but d’aider les personnes en difficultés dans de nombreux domaines
            tels que : la santé, l’éducation et le sport (…) Sa vocation est de
            permettre à chacun d’avoir les mêmes chances de survie et de
            développement. Pour nous, aider les plus démunis est une obligation
            éthique et une condition intrinsèque.
          </p>

          {/* <div className="actions">
          <img src={fondateur} alt="fondateur association photo" />

          <div className="detailsAction">
            <h2> NOUS INTERVENONS DANS</h2>

            <div className="ligne"></div>

            <ul>
              <li>
                <span>La santé</span> avec l’accès aux soins en partenariat avec
                l’association Liboke pour permettre aux femmes de payer leur
                frais d’accouchement.
              </li>
              <li>
                <span>L’éducation</span> avec des aides ponctuelles auprès des
                orphelinats sous forme de dons (fournitures scolaires, trousse
                d’hygiène corporel et bucco-dentaire…)
              </li>
              <li>
                <span>Le bien-être</span> et le développement de l’enfant par le
                soutien aux activités périscolaire, aide aux différents
                structures sportives.
              </li>
            </ul>
          </div> */}
          {/* </div> */}
          {/*  DON */}
          {/* <CheckoutWithStripe /> */}
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
