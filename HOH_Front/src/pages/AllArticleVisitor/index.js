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
        {/* <Actuality
          margintop={"-160px"}
          allBoxMarginTop={"-200px"}
          marginleft={"-164px"}
          marginleftP={"59px"}
        /> */}
        <div
          className="actuality"
          style={{
            marginTop: this.props.margintop,
            borderBottom: "1px solid black",
            paddingBottom: "100px",
          }}
        >
          <section>
            <h1>DERNIERES ACTUS</h1>
            <hr
              size="0"
              width="193%"
              color="black"
              style={{ marginLeft: this.props.marginleft }}
            />
            <h2>Découvrez les dernières actualités de l’association </h2>
          </section>
          <div
            className="allBox"
            style={{ marginTop: this.props.allBoxMarginTop }}
          >
            {this.state.data.map((element, index) => {
              return (
                <div key={index}>
                  <article>
                    <figure className="article">
                      <a href={"/visitorArticle/" + element.article_id}>
                        <img
                          className="imgcard actualityHover"
                          // src={mainArticleOne}
                          src={element.img}
                          alt="taylor"
                          style={{
                            width: this.state.width,
                            height: this.state.height,
                          }}
                        />
                      </a>

                      {/* <a className="a1" href={"/visitorArticle/" + element.article_id}>
                      {element.tags}
                    </a>  */}
                    </figure>

                    <h3>{element.title}</h3>

                    <a href={"/visitorArticle/" + element.article_id}>
                      <p
                        class="firstActualityP"
                        style={{ marginLeft: this.props.marginleftP }}
                      >
                        {" "}
                        par {element.author_article}
                      </p>
                    </a>

                    {/*                 
                  <a href={"/visitorArticle/" + element.article_id}>
                    <p>{element.resume_article}</p>
                  </a> */}

                    {/* <button className="button1">
                    <a href={"/visitorArticle/" + element.article_id}>
                      Lire la suite &nbsp; &rarr;
                    </a>
                  </button> */}
                  </article>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
