import { EntityRepository, EntityManager } from "typeorm";
import { Testimony } from "./entity";
import { testimony } from "../../helpers/types/testimony.types";
import { ITestimonyRepository } from "../../helpers/interfaces/testimony.interface";

@EntityRepository()
class TestimonyRepository implements ITestimonyRepository {
  constructor(private manager: EntityManager) {}

  async addNew(testimonyEntity: Testimony) {
    const testimony = await this.manager.save(Testimony, testimonyEntity);
    return testimony;
  }
}
export default TestimonyRepository;
