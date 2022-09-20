import ApiError from "../../helpers/error";
import { IMailerService } from "../../libs/mailer";
import { Testimony } from "./entity";
import { testimony } from "../../helpers/types/testimony.types";
import {
  ITestimonyService,
  ITestimonyRepository,
} from "../../helpers/interfaces/testimony.interface";
import TestimonyRepository from "../Testimony/repository";

export default class TestimonyService implements ITestimonyService {
  private testimonyRepo;
  private maileService;
  constructor(
    testimonyRepository: ITestimonyRepository,
    mailerService: IMailerService
  ) {
    this.testimonyRepo = testimonyRepository;
    this.maileService = mailerService;
  }

  async addNew(testimonyEntity: any){
    
  }
}
