import { getCustomRepository } from "typeorm";
import ArticleRepository from "./repository";
import ArticleService from "./service";
import ArticleController from "./controller";
import { jwtService, mailerService } from "../../libs";

const articleRepository = getCustomRepository(ArticleRepository);
const articleService = new ArticleService(articleRepository, mailerService);
const articleController = new ArticleController(articleService, jwtService);

export { articleController };
