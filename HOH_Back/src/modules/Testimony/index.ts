import { getCustomRepository } from "typeorm";
import TestimonyRepository from "./repository";
import TestimonyController from "./controller";
import TestimonyService from "./service";
import { jwtService, mailerService } from "../../libs";

const testimonyRepository = getCustomRepository(TestimonyRepository);
const testimonyService = new TestimonyService(testimonyRepository, mailerService);
const testimonyController = new TestimonyController(testimonyService, jwtService);

export { testimonyController};
