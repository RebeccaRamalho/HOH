import ApiError from "../../helpers/error";
import { IMailerService } from "../../libs/mailer";
import { Article } from "./entity";
import { article } from "../../helpers/types/article.types";
import {
  IArticleService,
  IArticleRepository,
} from "../../helpers/interfaces/article.interfaces";
import ArticleRepository from "../Article/repository";

export default class ArticleService implements IArticleService {
  private articleRepo;
  private mailerService;
  constructor(
    articleRepository: IArticleRepository,
    mailerService: IMailerService
  ) {
    this.articleRepo = articleRepository;
    this.mailerService = mailerService;
  }

  async add(articleData: Article | article) {
    const newArticle = await this.articleRepo.addNew(articleData);
    return newArticle;
  }

  async getAll() {
    const articles = await this.articleRepo.findAll();

    return articles;
  }
  async getOne(article_id: string) {
    const article = await this.articleRepo.findOne(article_id);
    return article;
  }
  async getLastOne(article_id: string) {
    const article = await this.articleRepo.findLastOne(article_id);
    return article;
  }
  async delete(article_id: string) {
    const article = await this.articleRepo.deleteOne(article_id);
    return article;
  }
  async update(article_id: string, articleData: Article) {
    const article = await this.articleRepo.modifyOne(article_id, articleData);
  }
}
