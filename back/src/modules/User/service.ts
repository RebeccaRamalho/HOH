import ApiError from "../../helpers/error";
import { IMailerService } from "../../libs/mailer";
import  User  from "./entity";
import { user } from "../../helpers/types/user.types";
import {
  IUserService,
  IUserRepository,
} from "../../helpers/interfaces/user.interfaces";

//RÔLE => VALIDATION
export default class UserService implements IUserService {
  private userRepo;
  private mailerService;
  constructor(userRepository: IUserRepository, mailerService: IMailerService) {
    this.userRepo = userRepository;
    this.mailerService = mailerService;
  }

  async getAll() {
    const users = await this.userRepo.findAll();
    return users;
  }

  async register(userData: User | user) {
    //I_Vérification de l'existance de l'utilisateur dans la DB
    const passwordRegex =
      /^(?=.{8,24})(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[!#$%&?_.*^=+/&~#'`{"$£µ;(]).*$/;
    const emailRegexFirstPart =
      "(([a-zA-Z0-9]+[_.-]?[a-zA-Z0-9]+)+([_.-]?[a-zA-Z0-9]+)+)";
    const emailRegex = new RegExp(
      "^" +
        emailRegexFirstPart +
        "[@]{1}" +
        emailRegexFirstPart +
        "[.]{1}[a-z]{2,6}$",
      "g"
    );
    const user = await this.userRepo.findByEMail(userData);

    if (user) throw new ApiError(409, "L'utilisateur existe déjà");
    else {
      //PASSWORD
      if (!passwordRegex.test(userData.password)) {
        throw new ApiError(
          400,
          "Le mot de Passe n'est pas au bon format. Il doit contenir au moins 8 caractères composés à minima d'une lettre minuscule, majuscule, d'un chiffre et d'un caractère spéciale"
        );
      }
      //MAIL
      else if (!emailRegex.test(userData.email)) {
        throw new ApiError(400, "Le mail n'est pas au bon format.");
      }
      //CREATION USER
      else {
        const newUser = await this.userRepo.addNew(userData);
        // await this.mailerService.sendMail(userData);
        return newUser;
      }
    }
  }

  async login(userData: User | user) {
    if (!userData.user_name || !userData.password || ! userData.email)
      throw new ApiError(
        400,
        "Veuillez-renseignez votre email et/ou mot de passe"
      );

    const user = await this.userRepo.findByEMail(userData);

    if (!user) throw new ApiError(400, "Email inconnu");

    const passwordMatch = await this.userRepo.compareHash(
      userData.password,
      user.password
    );
    if (!passwordMatch) throw new ApiError(401, "Mot de passe inconnu.");

    return user;
  }
}
