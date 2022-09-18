import { Response, Request, NextFunction } from "express";
import {
  Controller,
  Middleware,
  Get,
  Post,
  Put,
  Delete,
} from "@overnightjs/core";
import JwtService from "../../libs/jwt";
import { auth } from "../../config/middlewares";
import ArticleDTO from "./dto";
import { IArticleService } from "../../helpers/interfaces/article.interfaces";

//RÔLE: porte d'entrée/donne accès aux réponses
@Controller("api")
class ArticleController {
  private articleService;
  private jwtService;
  constructor(articleService: IArticleService, jwtService: JwtService) {
    this.articleService = articleService;
    this.jwtService = jwtService;
  }
  @Post("articles")
  @Middleware(auth.isAuth)
  add = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const article = await this.articleService.add({ ...req.body });
      res.status(201).json(new ArticleDTO(article));
    } catch (err) {
      next(err);
    }
  };

  @Get("articles")
  @Middleware(auth.isAuth)
  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let articles = await this.articleService.getAll();
      const result = articles.map((article) => new ArticleDTO(article));
      res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  };

  ///limiter à 3 articles
  @Get("article")
  @Middleware(auth.isAuth)
  getLastOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const article_id = req.params.id;
      let article = await this.articleService.getLastOne(article_id);
      res.status(201).json(article);
    } catch (err) {
      next(err);
    }
  };

  @Get("adminArticleDetails/:article_id")
  @Middleware(auth.isAuth)
  getOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const article_id = req.params.article_id;
      let article = await this.articleService.getOne(article_id);
      res.status(201).json(new ArticleDTO(article));
    } catch (err) {
      next(err);
    }
  };

  @Delete("article/:id")
  @Middleware(auth.isAuth)
  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const article_id = req.params.id;
      let article = await this.articleService.delete(article_id);
      res.status(201).json(article);
    } catch (err) {
      next(err);
    }
  };

  @Put("article/:id")
  @Middleware(auth.isAuth)
  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const articleData = req.body;
      console.log("body", articleData);
      const article_id = req.params.id;
      console.log("article____id", article_id);

      const article = await this.articleService.update(article_id, articleData);
      res.status(201).json(article);
    } catch (err) {
      next(err);
    }
  };
}
export default ArticleController;
