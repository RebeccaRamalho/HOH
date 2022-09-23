import React, { Component } from "react";
// import appContext from '../../store';
import axios from "axios";
import NavHomePage from "../../components/NavHomePage/index";
import { ArticleService } from "../../services";
import Actuality from "../../components/Actuality/index";
import Footer from "../../components/Footer";
import "../../assets/stylesheets/adminPage.scss";

export class AllVisitorArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "280px",
      height: "400px",
      data: [],
      error: null,
    };
  }
  async componentDidMount() {
    this.GETALLARTICLE();
  }
  GETALLARTICLE = async () => {
    try {
      const getAllArticle = await ArticleService.getAllVisitorArticle();

      this.setState({
        data: getAllArticle.data,
      });
    } catch (error) {
      this.setState({ error: error });
    }
  };

  render() {
    return (
      <div>
        <NavHomePage
          url={this.props.match.url}
          style={{ margin: 0, padding: 0 }}
        />
        <Actuality
          margintop={"-160px"}
          allBoxMarginTop={"-200px"}
          marginleft={"-164px"}
          marginleftP={"59px"}
        />

        <Footer />
      </div>
    );
  }
}
