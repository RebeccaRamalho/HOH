import { User } from "../../modules/User/entity";
import { user } from "../../helpers/types/user.types";
import { IUserRepository } from "../../helpers/interfaces/user.interfaces";

const users: User[] = [];

export default class UserRepositoryMock implements IUserRepository {
  async findAll() {
    return users;
  }

  async addNew(user: user) {
    const result = new User();
    result.user_name = user.user_name;
    result.email = user.email;
    result.password = user.password;
    users.push(result);
    return users[users.length - 1];
  }

  async findUser(user: user) {
    return users;
  }

  async findByEMail(userEntity: user) {
    const results = users.filter((user) => user);
    return results[0];
  }

  async compareHash(password: string, hash: string): Promise<boolean> {
    return true;
  }
}
