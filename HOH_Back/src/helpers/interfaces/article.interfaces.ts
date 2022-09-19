import { Article } from "../../modules/Article/entity";
import { article } from "../types/article.types";

export interface IArticleService {
  getOne(article_id: string): Promise<Article>;
  getAll(): Promise<Article[]>;
  add(articleData: Article | article): Promise<Article>;
  delete(article_id: string): Promise<any>;
  update(article_id: string, articleData: Article): Promise<any>;
  getLastOne(article_id: string): Promise<Article>;
  getAllVisitorArticle(): Promise<Article[]>;
  visitorGetOneArticle(article_id: string): Promise<Article>;
}

export interface IArticleRepository {
  findOne(article_id: string): Promise<Article>;
  findAll(): Promise<Article[]>;
  addNew(articleEntity: any): Promise<any>;
  deleteOne(article_id: string): Promise<any>;
  modifyOne(article_id: string, articleData: Article): Promise<any>;
  findLastOne(article_id: string): Promise<Article>;
  findAllVisitorArticle(): Promise<Article[]>;
  findOneVisitorArticle(article_id: string): Promise<Article>;
}
