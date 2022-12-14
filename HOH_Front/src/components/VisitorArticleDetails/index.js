import React, { Component } from "react";
import { ArticleService } from "../../services";
import NavHomePage from "../NavHomePage/index";
import Footer from "../Footer/index";
import love from "../../assets/images/love.png";
import "../../assets/stylesheets/articleDetails.scss";

export default class VisitorArticleDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
    };
  }

  async componentDidMount() {
    this.GetAnArticle();
  }
  //
  GetAnArticle = async () => {
    const articleId = this.props.match.params.article_id;

    try {
      const getAnArticle = await ArticleService.VisitorGetOneArticle(articleId);
      
      this.setState({
        data: getAnArticle.data,
      });
      console.log("DATA2", this.state.title);
      //
    } catch (error) {
      this.setState({ error: error });
    }
  };
  render() {
    return (
      <div>
        <NavHomePage url={this.props.match.url} />
        <section style={{ padding: 0, marginTop: "6%" }}>
     
              <div>
                <article className="articleDetailsContainer">
                  <div>
                    <h2 className="visitorTitle" style={{ fontSize: "143%" }}>
                      {this.state.data.title}
                    </h2>
                    <div
                      size="7"
                      width="70%"
                      color="#ff7e92"
                      border="1px solid black"
                      padding-bottom="10px"
                    ></div>
                    {/* <strong><p className="pStylingVisitor">{element.resume_article}</p></strong> */}
                    <div>
                      <p
                        className="pStylingVisitor"
                        style={{ textAlign: "justify" }}
                      >
                        {this.state.data.content_article}
                      </p>
                    </div>
                    <em>
                      <p
                        className="pStylingVisitor"
                        style={{ fontSize: "88%" }}
                      >
                        {this.state.data.author_article}
                      </p>
                    </em>
                  </div>

                  <div>
                    <img
                      src={love}
                      alt="heart Logo"
                      style={{ marginBottom: "408px", marginRight: "-15px" }}
                    />
                    {/* <p>1</p> */}
                    <img
                      style={{ marginTop: "86px" }}
                      src={this.state.data.img}
                      alt="article illustration photo"
                      className="imgcard actualityHover imgVisitor"
                    />
                  </div>
                  {/* <div style={{ width: "1px", color: "black", border: "1px solid black", transform: "rotate(90deg)"}}></div> */}
                </article>
              </div>
        </section>
        <Footer />
      </div>
    );
  }
}
