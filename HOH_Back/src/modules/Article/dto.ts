import { User } from "../User/entity";
import UserDTO from "../User/dto";
import { auth } from "../../config/middlewares";

class ArticleDTO {
  article_id;
  title;
  img;
  resume_article;
  content_article;
  author_article;
  video;
  admin_id;

  constructor({
    article_id,
    title,
    img,
    resume_article,
    content_article,
    author_article,
    video,
    admin_id = [],
  }: {
    article_id: number;
    title: string;
    img: string;
    resume_article: string;
    content_article: string;
    author_article: string;
    video: string;
    admin_id?: User[];
  }) {
    this.article_id = article_id;
    this.title = title;
    this.img = img;
    this.resume_article = resume_article;
    this.content_article = content_article;
    this.author_article = author_article;
    this.video = video;
    this.admin_id = admin_id.map((admin_id: any) => new UserDTO(admin_id));
    // this.books = books.map((book: any) => new BookDTO(book));

    //admin_id.map((admin_id : any) => new UserDTO(admin_id ))
  }
}
export default ArticleDTO;
