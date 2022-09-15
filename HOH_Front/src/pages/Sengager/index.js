import React, { Component } from "react";
import Nav from "../../components/Nav/index";
import NavHomePage from "../../components/NavHomePage/index";
import StripeContainer from "../../components/Stripe/StripeContainer";
import Footer from "../../components/Footer";
import "../../assets/stylesheets/sengager.scss";

export default class index extends Component {
  render() {
    return (
      <div>
        {" "}
        <NavHomePage url={this.props.match.url} />
        <div class="sengagerContainer">
          {/* <Nav /> */}
          <h1>S'ENGAGER AVEC NOUS</h1>

          <div className="ligne"></div>

          <p>
            Pour faire connaître <span>hand of hope</span> : faites-nous
            connaître en parlant de nous dans votre entourage, votre famille, au
            travail, au club de sport… Ou simplement nous aider en quelques
            clics comme par exemple en relayant nos publications sur les réseaux
            sociaux. Des questions sur le bénévolat? Une idée? Un projet?
            Contactez nous ! Vous pouvez aussi faire un don <a href="/don">ici</a>
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
