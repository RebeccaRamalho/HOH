import React, { Component } from "react";
import "../../assets/stylesheets/footer.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../../assets/images/logo-hoh.png";
import heart from "../../assets/images/heartt.png";
import Contact from "../Contact";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: "10px!important",
      width: "60%",
      paddingTop: "5%",
      contactFont: "16px",
      //  finish: true
    };
  }
  // componentWillUnmount(){
  test = () => {
    console.log("BONJOUR");
  };
  // if(window.innerWidth >= 768) {
  //   this.setState({
  //     fontSize:"16px",
  //     width: "70%",
  //     border: "3px solid red"
  //   });
  // }
  // }

  // componentDidMount () {
  //   window.addEventListener('load', this.handleLoad);
  // }

  // window.addEventListener('load', this.handleLoad);

  componentDidMount() {
    if (window.innerWidth >= 768) {
      this.setState({
        fontSize: "15px",
        width: "70%",
        border: "3px solid red",
      });
    } else if ((window.innerWidth = 540)) {
      this.setState({
        fontSize: "20px",
        width: "70%",
        border: "3px solid red",
      });
    }
    // if(window.innerWidth < 1024) {
    //   this.setState({
    //     appear : "none!important"
    //   })
    // }else if (window.innerWidth >540){

    // }
  }
  // appear () => {
  //   this.setState({

  //   })
  // }

  // this.fontSize:
  //   }

  // variable qui ferait reference au style exemple fontSize mais sans unitée

  render() {
    return (
      <>
        <footer>
          <div>
            <p
              style={{
                fontSize: this.state.fontSize,
                paddingTop: "0%!important",
              }}
            >
              Hands of hope est une association caritative née en 2020
            </p>
            {/* <img src={logo} alt="logo hoh" />  */}
          </div>

          {/* <div className="contactDesktop">
            <Contact style={{fontSize:this.state.fontSize, width:"20vw", paddingTop:"5%",paddingLeft:"17%", borderLeft:"1px solid black", height:"50vh",display:"flex", flexDirection:"column"}} li={{ fontFamily: "Muli-Bold"}} />
            </div> */}
          <div className="footerDesktop">
            <div className="copyright">
              <p style={{ fontSize: this.state.fontSize }}>
                Fait avec amour par Rebecca Kanu <br />
                Tous droits réservés © 2021
                {/* <span><img src={heart} alt="logo coeur"/></span><br/> */}
              </p>
            </div>

            <ul
              style={{ fontSize: this.state.fontSize, marginTop: "82px" }}
              className="Nav"
            >
              <li className="liAdmin" style={{ fontSize: this.state.fontSize }}>
                <Link to="/contact">Contact</Link>
              </li>
              <li className="liAdmin" style={{ fontSize: this.state.fontSize }}>
                <Link to="/actualite">Actualité</Link>
              </li>
              <li className="liAdmin" style={{ fontSize: this.state.fontSize }}>
                <Link to="/nous">Qui sommes-nous ?</Link>
              </li>
              <li className="liAdmin" style={{ fontSize: this.state.fontSize }}>
                <Link to="/sengager">S'engager</Link>
              </li>
            </ul>

            {/* <div className="contactMobile">
                <Contact style={{fontSize:this.state.fontSize, width:"60%", paddingTop:"5%",border:"4px solid black"}} li={{ fontFamily: "Muli-Bold"}} />
                </div>  */}
          </div>
        </footer>
      </>
    );
  }
}
// font-size="1.2em"
