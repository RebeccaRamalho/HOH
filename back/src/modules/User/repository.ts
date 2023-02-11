import { EntityRepository, EntityManager } from "typeorm";
import bcrypt from "bcrypt";
import User  from "./entity";
import { IUserRepository } from "../../helpers/interfaces/user.interfaces";
import { user } from "../../helpers/types/user.types";

//ROLE => MODEL, REQUÊTES
@EntityRepository()
class UserRepository implements IUserRepository {
  constructor(private manager: EntityManager) {}

  async findAll() {
    return await this.manager.find(User);
  }

  async addNew(userEntity: any) {
    const salt = bcrypt.genSaltSync(10);
    userEntity.password = bcrypt.hashSync(userEntity.password, salt);
    return await this.manager.save(User, userEntity);
  }

  async findUser(userEntity: user){
    return await this.manager.findOne(User, { email: userEntity.email });
  }

  async findByEMail(userEntity: user) {
    return await this.manager.findOne(User, { email: userEntity.email });
  }

  compareHash = async (password: string, hash: string) =>
    await bcrypt.compareSync(password, hash);
}

export default UserRepository;

//NOTES
//EntityManager is similar to Repository and used to manage database operations such as insert, update, delete and load data. While Repository handles single entity, EntityManager is common to all entities and able to do operations on all entities.
