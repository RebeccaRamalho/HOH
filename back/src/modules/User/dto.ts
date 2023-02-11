import { Article } from "../Article/entity";
import ArticleDTO from "../Article/dto";

class UserDTO {
  //A CORRIGER ADMIN_ID ET PASSWORD EN PUBLIC????
  public admin_id;
  public user_name;
  public email;
  public password;
  constructor({
    admin_id,
    user_name,
    email,
    password,
  }: {
    admin_id: number;
    user_name: string;
    email: string;
    password: string;
  }) {
    this.admin_id = admin_id;
    this.user_name = user_name;
    this.email = email;
    this.password = password;
  }
}
export default UserDTO;
