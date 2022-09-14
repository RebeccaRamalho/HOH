import { User } from "../User/entity";
import UserDTO from "../User/dto";

class ArticleDTO {
  article_id;
  title;
  img;
  tags;
  resume_article;
  content_article;
  author_article;
  video;
  users;

  constructor({
    article_id,
    title,
    img,
    tags,
    resume_article,
    content_article,
    author_article,
    video,
    users = [],
  }: {
    article_id: number;
    title: string;
    img: string;
    tags: string;
    resume_article: string;
    content_article: string;
    author_article: string;
    video: string;
    users?: User[];
  }) {
    this.article_id = article_id;
    this.title = title;
    this.img = img;
    this.tags = tags;
    this.resume_article = resume_article;
    this.content_article = content_article;
    this.author_article = author_article;
    this.video = video;
    this.users = users.map((users: any) => new UserDTO(users));
  }
}
export default ArticleDTO;
