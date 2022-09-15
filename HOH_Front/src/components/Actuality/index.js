import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import taylor from "../../assets/images/taylor.jpg";
import mainArticleOne from "../../assets/images/bon_prenatale_2.jpeg";
import mainArticleTwo from "../../assets/images/orphelinat_3.jpeg";
import mainArticleThree from "../../assets/images/distribution_club_2.jpeg";
import { AllVisitorArticle } from "../../pages/AllArticleVisitor";
import { Homepage } from "../../pages/Homepage/index";
import "../../assets/stylesheets/actuality.scss";
import { ArticleService } from "../../services";
// import { threadId } from "../../../../Backend/src/db";

export default class index extends Component {

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
    try {
      const response = await ArticleService.getLastArticle();

      this.setState({
        data: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    // <AllVisitorArticle marginTop={this.props.margintop}/>
    // <Homepage marginTop={this.props.margintop}/>
    return (
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
    );
  }
}
