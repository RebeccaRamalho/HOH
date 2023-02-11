import { Request, Response, NextFunction } from "express";
import JwtService from "../libs/jwt";

class AuthMiddleware {
  private jwt;
  constructor(jwtService: JwtService) {
    this.jwt = jwtService;
  }

  isAuth = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
      const token = req.cookies["auth-cookie"];

      //La personne a t-elle un token?
      if (!token) {
        return res.status(401).json("Access denied. Your session expired");
      }

      //Le cas échéant on: Vérifie le token
      const decoded = await this.jwt.decodeToken(token);

      //if user has permissions
      req.currentUserId = decoded.id;
      //AC
      next();
    } catch (e) {
      return res.status(401).json("Authentification failed: \n" + e);
    }
  };
}
export default AuthMiddleware;
