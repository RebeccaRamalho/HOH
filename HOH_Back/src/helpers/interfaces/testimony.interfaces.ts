import { Testimony } from "../../modules/Testimony/entity";
import { testimony } from "../types/testimony.types";

export interface ITestimonyService {
  // getOne(article_id: string): Promise<Testimony>;
  // getAll(): Promise<Testimony[]>;
  add(testimonyEntity: Testimony): Promise<Testimony>;
  // delete(article_id: string): Promise<any>;
  // update(article_id: string, articleData: Testimony): Promise<any>;
  // getLastOne(article_id: string): Promise<Testimony>;
}
export interface ITestimonyRepository {
  // findOne(article_id: string): Promise<Testimony>;
  // findAll(): Promise<Testimony[]>;
  addNew(testimonyEntity: any): Promise<any>;
  // deleteOne(article_id: string): Promise<any>;
  // updateOne(article_id: string, articleData: Testimony): Promise<any>;
  // findLastOne(article_id: string): Promise<Testimony>;
}
