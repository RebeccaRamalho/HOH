import api from "./api";

const token = localStorage.getItem("token");

const config = { headers: { Authorization: `${token}` } };

const ArticleService = {
  //post
  publishArticle: async (
    title,
    img,
    resume_article,
    content_article,
    author_article,
    video
  ) => {
    const article = {
      title,
      img,
      resume_article,
      content_article,
      author_article,
      video,
    };
    return await api.post("/articles", article, config);
  },
  //get
  getAllArticle: async () => {
    return await api.get("/articles", config);
  },
  getOneArticle: async (articleId) => {
    const id = articleId;
    console.log("Iddd", id);
    return await api.get(`/adminArticleDetails/${id}`, config);
  },
  //delete
  deleteOneArticle: async (articleId) => {
    const id = articleId;
    return await api.delete(`/article/${id}`, config);
  },
  //uptdate
  updateOneArticle: async (
    articleId,
    title,
    img,
    resume_article,
    content_article,
    author_article,
    video
  ) => {
    const newArticle = {
      title,
      img,
      resume_article,
      content_article,
      author_article,
      video,
    };
    const id = articleId;
    return await api.put(`/article/${id}`, newArticle, config);
  },
  //VISITOR
  //get
  getLastArticle: async () => {
    return await api.get("/derniersArticles");
  },
  VisitorGetOneArticle: async (articleId) => {
    const id = articleId;
    return await api.get(`/visitorArticle/${id}`);
  },
  getAllVisitorArticle: async () => {
    return await api.get("/allArticles");
  },
};
export default ArticleService;
