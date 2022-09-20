import { EntityRepository, EntityManager } from "typeorm";
import { Testimony } from "./entity";
import { IArticleRepository } from "../../helpers/interfaces/article.interfaces";

@EntityRepository()
class TestimonyRepository implements IArticleRepository {
    constructor(pivate manager: EntityManager){}

    
}