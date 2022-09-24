import ApiError from "../../helpers/error";
import { IMailerService } from "../../libs/mailer";
import { Testimony } from "./entity";
import { testimony } from "../../helpers/types/testimony.types";
import {
  ITestimonyService,
  ITestimonyRepository,
} from "../../helpers/interfaces/testimony.interfaces";
import TestimonyRepository from "./repository";

export default class TestimonyService implements ITestimonyService {
  private testimonyRepo;
  private mailerService;
  constructor(
    testimonyRepository: ITestimonyRepository,
    mailerService: IMailerService
  ) {
    this.testimonyRepo = testimonyRepository;
    this.mailerService = mailerService;
  }
  async add(testimonyEntity: Testimony) {
    const newTestimony = await this.testimonyRepo.addNew(testimonyEntity);
    return newTestimony;
  }
  async get3LastTestimony() {
    const testimonies = await this.testimonyRepo.find3LastTestimony();
    return testimonies;
  }
  async getAll() {
    const testimonies = await this.testimonyRepo.findAll();
    return testimonies;
  }
  async getOne(testimony_id: string) {
    const testimony = await this.testimonyRepo.findOne(testimony_id);
    return testimony;
  }
}
