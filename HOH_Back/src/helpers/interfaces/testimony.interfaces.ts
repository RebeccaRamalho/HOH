import { Testimony } from "../../modules/Testimony/entity";
import { testimony } from "../types/testimony.types";

export interface ITestimonyService {
  getOne(testimony_id: string): Promise<Testimony>;
  getAll(): Promise<Testimony[]>;
  add(testimonyEntity: Testimony): Promise<Testimony>;
  // delete(testimony_id: string): Promise<any>;
  // update(testimony_id: string, testimonyData: Testimony): Promise<any>;
  get3LastTestimony(): Promise<Testimony[]>;
}
export interface ITestimonyRepository {
  findOne(testimony_id: any): Promise<Testimony>;
  findAll(): Promise<Testimony[]>;
  addNew(testimonyEntity: any): Promise<any>;
  // deleteOne(testimony_id: string): Promise<any>;
  // updateOne(testimony_id: string, testimonyData: Testimony): Promise<any>;
  find3LastTestimony(): Promise<Testimony[]>;
}
