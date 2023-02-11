import { Response, Request, NextFunction } from "express";
import {
  Controller,
  Middleware,
  Get,
  Post,
  Put,
  Delete,
} from "@overnightjs/core";
import JwtService from "../../libs/jwt";
import { auth } from "../../config/middlewares";
import UserDTO from "./dto";
import { IUserService } from "../../helpers/interfaces/user.interfaces";

//RÔLE => PORTE D'ENTRÉE/DONNE ACCÈS AUX RÉPONSES
@Controller("api")
class UserController {
  private userService;
  private jwtService;
  constructor(userService: IUserService, jwtService: JwtService) {
    this.userService = userService;
    this.jwtService = jwtService;
  }

  @Get("admins")
  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let users = await this.userService.getAll();
      const result = users.map((user) => new UserDTO(user));
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };

  @Post("adminRegister")
  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.userService.register({ ...req.body });
      res.status(201).json(new UserDTO(user));
    } catch (err) {
      next(err);
    }
  };

  @Post("adminlogin")
  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      // response.status(200).json({
      //   token: token, //envoie dans les headers
      //   Admin: {
      //     admin_id: result[0].admin_id,
      //     user_name: result[0].user_name,
      //     password: result[0].password,
      //     email: result[0].email,
      //   },
      // });

      const user = await this.userService.login({ ...req.body });
      const token = await this.jwtService.generateToken({ id: user.admin_id });
      res.cookie("auth-cookie", token, {
        expires: new Date(Date.now() + 30 * 86400 * 1000),
      });
      res.status(200).json(new UserDTO(user));
    } catch (err) {
      next(err);
    }
  };
}
export default UserController;

// Admin_routes

//   /*CREATE*/
//   .post("/api/adminRegister", adminController.signUp)
//   .post("/api/adminlogin", adminController.login)
//   .post("/api/article", isAuth, adminController.publishArticles)
//   /*READ*/
//   .post("/api/votrePetitMot", isAuth, adminController.getReview)
//   .post("/api/articles", isAuth, adminController.getArticles)
//   .post(
//     "/api/adminArticleDetails/:article_id", isAuth,
//     adminController.articleDetails
//   )
//   .post("/api/votrePetitMot/:id", isAuth, adminController.getOneReview)//

//   /*UPDATE*/
//   .put("/api/article/:article_id", isAuth, adminController.updateArticles)

//   /*DELETE*/
//   .delete("/api/article/:article_id", isAuth, adminController.deleteArticles)
//   .delete("/api/votrePetitMot/:id", isAuth, adminController.deleteReview); //ok!
//   .delete("/api/votrePetitMot/:id", isAuth, adminController.deleteReview); //L

//Visiteur_routes

//   /*CREATE*/
//   .post("/api/votrePetitMot", controller.postReview)

//   /*READ*/
//   .get("/api/derniersArticles", controller.getLastArticles) //ok back and front!
//   .get("/api/derniersPetitMots", controller.get3Reviews) //ok back and front
//   .get("/api/allArticles", controller.getArticles) //ok!
//   .get("/api/visitorArticle/:article_id", controller.articleDetails); //ok
