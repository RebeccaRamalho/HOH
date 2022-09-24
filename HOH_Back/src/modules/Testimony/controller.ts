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
import TestimonyDTO from "./dto";
import { ITestimonyService } from "../../helpers/interfaces/testimony.interfaces";

@Controller("api")
class TestimonyController {
  private testimonyService;
  private jwtService;
  constructor(testimonyService: ITestimonyService, jwtService: JwtService) {
    this.testimonyService = testimonyService;
    this.jwtService = jwtService;
  }

  //admin
  @Post("votrePetitMot")
  @Middleware(auth.isAuth)
  add = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const testimony = await this.testimonyService.add({ ...req.body });
      res.status(201).json(new TestimonyDTO(testimony));
    } catch (err) {
      next(err);
    }
  };

  @Get("votrePetitMot/:id")
  @Middleware(auth.isAuth)
  getOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const testimony_id = req.params.id;

      console.log("ID", testimony_id);
      const testimony = await this.testimonyService.getOne(testimony_id);
      res.status(200).json(new TestimonyDTO(testimony));
    } catch (err) {
      next(err);
    }
  };

  @Get("derniersPetitMots")
  @Middleware(auth.isAuth)
  get3LastTestimony = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const testimonies = await this.testimonyService.get3LastTestimony();
      const result = testimonies.map(
        (testimony) => new TestimonyDTO(testimony)
      );

      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };

  //VISITOR
  @Get("votrePetitMot")
  @Middleware(auth.isAuth)
  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const testimonies = await this.testimonyService.getAll();
      const result = testimonies.map(
        (testimony) => new TestimonyDTO(testimony)
      );

      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };
}
export default TestimonyController;
