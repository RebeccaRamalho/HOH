import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Header from "../../components/Header";
import ArticleForm from "../../components/ArticleForm/index";
import connectedUser2 from "../../assets/images/connectedUser2.jpg";
import { ArticleService } from "../../services";

import "../../assets/stylesheets/TestimonyForm.scss";

export class ArticleUpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      img: "",
      resume_article: "",
      content_article: "",
      author_article: "",
      video: "",
      admin_id: "",
      error: null,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  handleChangeImage = (e) => {
    const img = e.target.files[0];
    const reader = new FileReader();

    if (img) {
      reader.readAsDataURL(img);
      //
      reader.addEventListener("load", () => {
        const img = reader.result;
        this.setState({ img });
        //
      });
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const articleId = this.props.match.params.article_id;

    try {
      const response = await ArticleService.updateOneArticle(
        articleId,
        this.state.title,
        this.state.img,
        this.state.resume_article,
        this.state.content_article,
        this.state.author_article,
        this.state.video
        // this.state.admin_id,
      );
      //
      localStorage.setItem("token", response.data.token);
      //
      this.props.history.push("/articles");
    } catch (error) {
      console.error("erreurFront", error);
      this.setState({ error: error });
    }
  };
  render() {
    return (
      <div>
        <Header url={this.props.match.url} />
        <form
          action="POST"
          className="ui form"
          onSubmit={this.handleSubmit}
          style={{ width: "80%", marginLeft: "216px" }}
        >
          <div class=" fiels">
            <label htmlFor="title">Titre</label>
            <input
              type="text"
              id="title"
              name="title"
              required
              onChange={this.handleChange}
              value={this.state.title}
            />

            <label htmlFor="img">Image</label>
            <input
              type="file"
              id="img"
              name="img"
              require
              onChange={this.handleChangeImage}
              // value={this.handleChangeImage}
            />

            <label htmlFor="resume_article">Résumé</label>
            <input
              name="resume_article"
              id="resume_article"
              required
              onChange={this.handleChange}
              value={this.state.resume_article}
            />

            <label htmlFor="content_article">Contenu de l'article</label>
            <input
              name="content_article"
              id="content_article"
              required
              onChange={this.handleChange}
              value={this.state.content_article}
            />

            <label htmlFor="author_article">Autheur</label>
            <input
              name="author_article"
              id="author_article"
              required
              onChange={this.handleChange}
              value={this.state.author_article}
            />

            <label htmlFor="video">Vidéo</label>
            <input
              name="video"
              id="video"
              required
              onChange={this.handleChange}
              value={this.state.video}
            />
          </div>

          <button
            type="submit"
            class="ui blue label submit icon button"
            onClick={this.handleSubmit}
          >
            <i class="icone edit"></i> Envoyer
          </button>
        </form>
      </div>
      // <div class="all">
      //   <div class="admin-header">
      //     <div class="header-text">
      //       <h3>Back-office</h3>

      //       <div class="header-greet">
      //         <span>Bonjour Mizu</span>

      //         <a href="/logout" onClick={this.logout} class="logout-btn white">
      //           <img
      //             src={connectedUser2}
      //             alt="admin profil picture"
      //             class="AdminPhoto"
      //           />
      //         </a>
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
      //         <a href="/logout" onClick={this.logout} class="white">
      //           Déconnexion
      //         </a>
      //       </li>
      //     </ul>
      //   </div>

      //   <div class="center-content">
      //     <div class="all-border">
      //       <div class="shows-location">
      //         <div class="location-text">
      //           <span class="location">Modifier votre article</span>
      //         </div>
      //       </div>
      //     </div>

      //     {/* <ArticleForm /> */}

      //     <form action="POST" className="ui form" onSubmit={this.handleSubmit}>
      //       <div class=" fiels">
      //         <label htmlFor="title">Titre</label>
      //         <input
      //           type="text"
      //           id="title"
      //           name="title"
      //           required
      //           onChange={this.handleChange}
      //           value={this.state.title}
      //         />

      //         <label htmlFor="img">Image</label>
      //         <input
      //           type="file"
      //           id="img"
      //           name="img"
      //           require
      //           onChange={this.handleChangeImage}
      //           // value={this.handleChangeImage}
      //         />

      //         <label htmlFor="tags">Tags</label>
      //         <input
      //           type="text"
      //           id="tags"
      //           name="tags"
      //           required
      //           onChange={this.handleChange}
      //           value={this.state.tags}
      //         />

      //         <label htmlFor="resume_article">Résumé</label>
      //         <input
      //           name="resume_article"
      //           id="resume_article"
      //           required
      //           onChange={this.handleChange}
      //           value={this.state.resume_article}
      //         />

      //         <label htmlFor="content_article">Contenu de l'article</label>
      //         <input
      //           name="content_article"
      //           id="content_article"
      //           required
      //           onChange={this.handleChange}
      //           value={this.state.content_article}
      //         />

      //         <label htmlFor="author_article">Autheur</label>
      //         <input
      //           name="author_article"
      //           id="author_article"
      //           required
      //           onChange={this.handleChange}
      //           value={this.state.author_article}
      //         />

      //         <label htmlFor="video">Vidéo</label>
      //         <input
      //           name="video"
      //           id="video"
      //           required
      //           onChange={this.handleChange}
      //           value={this.state.video}
      //         />
      //       </div>

      //       <button
      //         type="submit"
      //         class="ui blue label submit icon button"
      //         onClick={this.handleSubmit}
      //       >
      //         <i class="icone edit"></i> Envoyer
      //       </button>
      //     </form>
      //   </div>
      // </div>

      //
    );
  }
}
