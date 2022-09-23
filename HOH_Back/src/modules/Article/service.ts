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
    const imgRegex = new RegExp(
      "^[a-zA-Z0-9]+.{1}(png|PNG|jpg|JPG|jpeg|JPEG|gif|GIF|bpm|BPM)$",
      "m"
    );
    //IMG
    // if (!imgRegex.test(articleData.img)) {
    //   throw new ApiError(400, "L'image n'est pas au bon format.");
    // } else
    // if (
    //   !articleData.author_article ||
    //   !articleData.content_article ||
    //   !articleData.resume_article ||
    //   !articleData.title
    // ) {
    //   throw new ApiError(
    //     400,
    //     "Vous devez à minima remplir les champs auteur, contenu, résumé et titre"
    //   );
    // } else {
    const newArticle = await this.articleRepo.addNew(articleData);
    // await this.mailerService.sendMail(userData);
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
  async visitorGetOneArticle(article_id: string) {
    const article = await this.articleRepo.findOneVisitorArticle(article_id);
    return article;
  }
  async getLastOne() {
    const article = await this.articleRepo.findLastOne();
    return article;
  }
  async delete(article_id: string) {
    const article = await this.articleRepo.deleteOne(article_id);
    return article;
  }
  async update(article_id: string, articleData: Article) {
    const article = await this.articleRepo.modifyOne(article_id, articleData);
    return article;
  }
  async getAllVisitorArticle() {
    const articles = await this.articleRepo.findAllVisitorArticle();
    return articles;
  }
}
