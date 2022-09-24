import { EntityRepository, EntityManager } from "typeorm";
import { Testimony } from "./entity";
import { testimony } from "../../helpers/types/testimony.types";
import { ITestimonyRepository } from "../../helpers/interfaces/testimony.interfaces";

@EntityRepository()
class TestimonyRepository implements ITestimonyRepository {
  constructor(private manager: EntityManager) {}

  async addNew(testimonyEntity: Testimony) {
    const testimony = await this.manager.save(Testimony, testimonyEntity);
    return testimony;
  }
  async find3LastTestimony() {
    return await this.manager.find(Testimony, { take: 3 });
  }
  async findAll() {
    return await this.manager.find(Testimony);
  }
  async findOne(testimony_id: any) {
    return await this.manager.findOne(Testimony, testimony_id);
  }
}
export default TestimonyRepository;
