import { User } from "../../modules/User/entity";
import { user } from "../types/user.types";

export interface IUserService {
  getAll(): Promise<User[]>;
  register(userData: User | user): Promise<User>;
  login(userData: User): Promise<User>;
}

export interface IUserRepository {
  findAll(): Promise<User[]>;
  addNew(userEntity: any): Promise<any>;
  findByEMail(userEntity: any): Promise<User | undefined>;
//   findUser(userEntity: any): Promise<User | undefined>
  compareHash(password: string, hash: string): Promise<boolean>;
}
