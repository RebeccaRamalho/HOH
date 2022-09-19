import { EntityRepository, EntityManager } from "typeorm";
import { Article } from "./entity";
import { IArticleRepository } from "../../helpers/interfaces/article.interfaces";
import { article } from "../../helpers/types/article.types";

//RÔLE: MODEL, REQUÊTES
@EntityRepository()
class ArticleRepository implements IArticleRepository {
  constructor(private manager: EntityManager) {}

  async addNew(articleEntity: any) {
    const article = await this.manager.save(Article, articleEntity);
    return article;
  }
  async findAll() {
    const articles = await this.manager.find(Article);
    return articles;
  }
  async findOne(article_id: any) {
    return await this.manager.findOne(Article, article_id);
  }
  async findLastOne(article_id: any) {
    return await this.manager.findOne(Article, article_id);
  }
  async deleteOne(article_id: string) {
    return await this.manager.delete(Article, article_id);
  }
  async modifyOne(article_id: string, articleData: Article) {
    return await this.manager.update(Article, article_id, articleData);
  }
}
export default ArticleRepository;