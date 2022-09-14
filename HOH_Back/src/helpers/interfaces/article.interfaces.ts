import { Article } from "../../modules/Article/entity";
import { article } from "../types/article.types";

export interface IArticleService {
    getAll():Promise<Article[]>
    add(articleData:article): Promise<Article>
}

export interface IUserRepository {
    findAll(): Promise<Article[]>
    addNew(article: article): Promise<Article>
    findByUser(email: string): Promise<Article | undefined>
}