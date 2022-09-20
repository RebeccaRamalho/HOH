import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Link } from "react-router-dom";
import { ArticleService } from "../../services";
import App from "../../App";
import { withCookies } from "react-cookie";

import "../../assets/stylesheets/TestimonyForm.scss";

class ArticleForm extends React.Component {
  constructor(props) {
    super(props);
    // this.state = initialState;
    this.state = {
      title: "",
      img: "", /////////////////////////////////// remettre à ""
      resume_article: "",
      content_article: "",
      author_article: "",
      video: "",
      admin_id: "",
      error: null,
      file: null,
      base64URL: "",
      titleError: "",
      imgError: "",
      resume_articleError: "",
      content_articleError: "",
      author_articleError: "",
      videoError: "",
      token: "",
    };
  }
  //form validator
  validate = () => {
    let titleError = "";
    let imgError = "";
    let resume_articleError = "";
    let content_articleError = "";
    let author_articleError = "";
    let videoError = "";

    if (!this.state.title) {
      titleError = "vous devez remplir le champs titre";
    }
    if (!this.state.img) {
      imgError = "vous devez télécharger une image";
    }
    if (!this.state.resume_article) {
      resume_articleError = "vous devez remplir le champs résumé";
    }
    if (!this.state.content_article) {
      content_articleError = "vous devez remplir le champs contenu";
    }
    if (!this.state.author_article) {
      author_articleError = "vous devez remplir le champs contenu";
    }
    //

    if (
      titleError ||
      imgError ||
      resume_articleError ||
      content_articleError ||
      author_articleError
    ) {
      this.setState({
        titleError,
        imgError,
        resume_articleError,
        content_articleError,
        author_articleError,
      });
      return false;
    }
    return true;
  };
  //
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

    const isValid = this.validate();
    if (isValid) {
      //cear the form
      // this.setState(initialState);
      this.setState({
        title: "",
        img: "", /////////////////////////////////// remettre à ""
        resume_article: "",
        content_article: "",
        author_article: "",
        video: "",
        admin_id: "",
        error: null,
        file: null,
        base64URL: "",
        titleError: "",
        imgError: "",
        resume_articleError: "",
        content_articleError: "",
        author_articleError: "",
        videoError: "",
      });
    }

    try {
      const data = await ArticleService.publishArticle(
        this.state.title,
        this.state.img,
        this.state.resume_article,
        this.state.content_article,
        this.state.author_article,
        this.state.video
      );
      this.setState({
        token: this.props.cookies.get("auth-cookie"),
      });
      localStorage.setItem("token", this.state.token);
      console.log("history", this.props);
      this.props.history.push("/articles/");
    } catch (error) {
      this.setState({ error: error });
    }
  };

  render() {
    return (
      <>
        <h1>Votre article</h1>

        <form
          action="POST"
          className="ui form"
          id="form1"
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
              // value={this.state.title}
            />
            {this.state.titleError ? (
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.titleError}
              </div>
            ) : null}

            <label htmlFor="img">Image</label>
            <input
              type="file"
              id="img"
              name="img"
              require
              onChange={this.handleChangeImage}
              // value={this.handleChangeImage}
            />
            {this.state.imgError ? (
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.imgError}
              </div>
            ) : null}

            <label htmlFor="resume_article">Résumé</label>
            <input
              name="resume_article"
              id="resume_article"
              required
              onChange={this.handleChange}
              // value={this.state.resume_article}
            />
            {this.state.resume_articleError ? (
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.resume_articleError}
              </div>
            ) : null}

            <label htmlFor="content_article">Contenu de l'article</label>
            <input
              name="content_article"
              id="content_article"
              required
              onChange={this.handleChange}
              // value={this.state.content_article}
            />
            {this.state.content_articleError ? (
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.content_articleError}
              </div>
            ) : null}

            <label htmlFor="author_article">Autheur</label>
            <input
              name="author_article"
              id="author_article"
              required
              onChange={this.handleChange}
              // value={this.state.author_article}
            />
            {this.state.author_articleError ? (
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.author_articleError}
              </div>
            ) : null}

            <label htmlFor="video">Vidéo</label>
            <input
              name="video"
              id="video"
              required
              onChange={this.handleChange}
              // value={this.state.video}
            />

            {this.state.videoError ? (
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.videoError}
              </div>
            ) : null}
          </div>

          <button
            type="submit"
            class="ui blue label submit icon button"
            onClick={this.handleSubmit}
          >
            <i class="icone edit"></i> Envoyer
          </button>
        </form>
      </>
    );
  }
}
export default withCookies(ArticleForm);
