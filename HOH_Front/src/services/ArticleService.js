import api from "./api";
//
const token = localStorage.getItem('token')
//
const config = {headers: { Authorization: `${token}`}}
//
const ArticleService = {

  //post
  publishArticle: async ( title, img, tags, resume_article, content_article, author_article, video) => {
    const article = { title, img, tags, resume_article, content_article, author_article, video };
    return await api.post("/article", article, config);
  },
  //get
  getAllArticle: async () => {
    return await api.post("/articles", config);
  },
  getOneArticle: async (articleId) => {
    const id = articleId;
    return await api.post(`/adminArticleDetails/${id}`, config);
  },
  //delete
  deleteOneArticle: async (articleId) => {
    const id = articleId;
    return await api.delete(`/article/${id}`, config)
  },
  //uptdate
  updateOneArticle: async (articleId, title, img, tags, resume_article, content_article, author_article, video) => {
    const newArticle = {title, img, tags, resume_article, content_article, author_article, video};
    const id = articleId; 
    return await api.put(`/article/${id}`, newArticle,  config)
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
    return await api.get("/allArticles")
  },
  
};
export default ArticleService;
