import { User } from "../User/entity";
import UserDTO from "../User/dto";
import { auth } from "../../config/middlewares";

class TestimonyDTO {
  id;
  last_name;
  first_name;
  opinion;
  role;
  admin_id;

  constructor({
    id,
    last_name,
    first_name,
    opinion,
    role,
    admin_id = [],
  }: {
    id: number;
    last_name: string;
    first_name: string;
    opinion: string;
    role: string;
    admin_id?: User[];
  }) {
    this.id = id;
    this.last_name = last_name;
    this.first_name = first_name;
    this.opinion = opinion;
    this.role = role;
    this.admin_id = admin_id;
    // this.books = books.map((book: any) => new BookDTO(book));

    //admin_id.map((admin_id : any) => new UserDTO(admin_id ))
  }
}
export default TestimonyDTO;
