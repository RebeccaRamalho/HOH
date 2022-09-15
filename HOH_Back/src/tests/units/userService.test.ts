import UserService from "../../modules/User/service";
import UserRepositoryMock from "../mocks/userRepository.mock";
import { mailerService } from "../../libs";

// import { User } from "../../modules/User/entity";
// import { IUserRepository } from "../../helpers/interfaces/article.interfaces";

const userService = new UserService(new UserRepositoryMock(), mailerService);

describe("Admin service USE-CASE: ", () => {
  describe("add admin use case:", () => {
    //SUCCESS
    it("Should thrown an error if the register function doesn't exist", async () => {
      expect(userService.register).toBeDefined();
    });

    //ERROR
    it("Should throw an error if the email is empty", async () => {
      try {
        await userService.register({
          user_name: "Amélia",
          email: "",
          password: "Rebecca2009.",
        });
      } catch (e: any) {
        expect(e.statusCode).toBe(400);
        expect(e.message).toBe("Le mail n'est pas au bon format.");
      }
    });
    it("Should throw an error if the email is too short", async () => {
      try {
        await userService.register({
          user_name: "Amélia",
          email: "k@gmail.com",
          password: "Rebecca2009.",
        });
      } catch (e: any) {
        expect(e.statusCode).toBe(400);
        expect(e.message).toBe("Le mail n'est pas au bon format.");
      }
    });
    it("Should throw an error if the email have two consecutive special characters", async () => {
      try {
        await userService.register({
          user_name: "Amélia",
          email: "kanu__@gmail.com",
          password: "Rebecca2009.",
        });
      } catch (e: any) {
        expect(e.statusCode).toBe(400);
        expect(e.message).toBe("Le mail n'est pas au bon format.");
      }
    });
    it("Should throw an error if the @ of the mail is preceded by a special character", async () => {
      try {
        await userService.register({
          user_name: "Amélia",
          email: "kanu_@gmail.com",
          password: "Rebecca2009.",
        });
      } catch (e: any) {
        expect(e.statusCode).toBe(400);
        expect(e.message).toBe("Le mail n'est pas au bon format.");
      }
    });
    it("Should throw an error if the mail begin with a special character", async () => {
      try {
        await userService.register({
          user_name: "Amélia",
          email: "_kanu@gmail.com",
          password: "Rebecca2009.",
        });
      } catch (e: any) {
        expect(e.statusCode).toBe(400);
        expect(e.message).toBe("Le mail n'est pas au bon format.");
      }
    });
    it("Should throw an error if the @ of the mail is followed by a special character", async () => {
      try {
        await userService.register({
          user_name: "Amélia",
          email: "kanurebecca@_gmail.com",
          password: "Rebecca2009.",
        });
      } catch (e: any) {
        expect(e.statusCode).toBe(400);
        expect(e.message).toBe("Le mail n'est pas au bon format.");
      }
    });
    it("Should throw an error if the . of the mail is preceded by a special character", async () => {
      try {
        await userService.register({
          user_name: "Amélia",
          email: "kanurebecca@gmail_.com",
          password: "Rebecca2009.",
        });
      } catch (e: any) {
        expect(e.statusCode).toBe(400);
        expect(e.message).toBe("Le mail n'est pas au bon format.");
      }
    });
    it("Should throw an error if the domain name of the mail too short", async () => {
      try {
        await userService.register({
          user_name: "Amélia",
          email: "kanurebecca@gmail.c",
          password: "Rebecca2009.",
        });
      } catch (e: any) {
        expect(e.statusCode).toBe(400);
        expect(e.message).toBe("Le mail n'est pas au bon format.");
      }
    });
    it("Should throw an error if the domain name of the mail is followed by a special character", async () => {
      try {
        await userService.register({
          user_name: "Amélia",
          email: "kanurebecca@gmail.com_",
          password: "Rebecca2009.",
        });
      } catch (e: any) {
        expect(e.statusCode).toBe(400);
        expect(e.message).toBe("Le mail n'est pas au bon format.");
      }
    });
    //
    it("Should throw an error if if the password is empty", async () => {
      try {
        await userService.register({
          user_name: "Amélia",
          email: "kanuAmélia@gmail.com",
          password: "",
        });
      } catch (e: any) {
        expect(e.statusCode).toBe(400);
        expect(e.message).toBe(
          "Le mot de Passe n'est pas au bon format. Il doit contenir au moins 8 caractères composés à minima d'une lettre minuscule, majuscule, d'un chiffre et d'un caractère spéciale"
        );
      }
    });
    it("Should throw an error if if the password is too short", async () => {
      try {
        await userService.register({
          user_name: "Amélia",
          email: "kanuAmélia@gmail.com",
          password: "kR1.",
        });
      } catch (e: any) {
        expect(e.statusCode).toBe(400);
        expect(e.message).toBe(
          "Le mot de Passe n'est pas au bon format. Il doit contenir au moins 8 caractères composés à minima d'une lettre minuscule, majuscule, d'un chiffre et d'un caractère spéciale"
        );
      }
    });
    it("Should throw an error if the password have not lower case", async () => {
      try {
        await userService.register({
          user_name: "Amélia",
          email: "kanuAmélia@gmail.com",
          password: "KANUEMMANUELLE1899.",
        });
      } catch (e: any) {
        expect(e.statusCode).toBe(400);
        expect(e.message).toBe(
          "Le mot de Passe n'est pas au bon format. Il doit contenir au moins 8 caractères composés à minima d'une lettre minuscule, majuscule, d'un chiffre et d'un caractère spéciale"
        );
      }
    });
    it("Should throw an error if the password have not upper case", async () => {
      try {
        await userService.register({
          user_name: "Amélia",
          email: "kanuAmélia@gmail.com",
          password: "kanuemmanuelle1899.",
        });
      } catch (e: any) {
        expect(e.statusCode).toBe(400);
        expect(e.message).toBe(
          "Le mot de Passe n'est pas au bon format. Il doit contenir au moins 8 caractères composés à minima d'une lettre minuscule, majuscule, d'un chiffre et d'un caractère spéciale"
        );
      }
    });
    it("Should throw an error if the password have no numbers", async () => {
      try {
        await userService.register({
          user_name: "Amélia",
          email: "kanuAmélia@gmail.com",
          password: "KanuAmélia_",
        });
      } catch (e: any) {
        expect(e.statusCode).toBe(400);
        expect(e.message).toBe(
          "Le mot de Passe n'est pas au bon format. Il doit contenir au moins 8 caractères composés à minima d'une lettre minuscule, majuscule, d'un chiffre et d'un caractère spéciale"
        );
      }
    });
    it("Should throw an error if the password have ony numbers", async () => {
      try {
        await userService.register({
          user_name: "Amélia",
          email: "kanuAmélia@gmail.com",
          password: "20020020022002",
        });
      } catch (e: any) {
        expect(e.statusCode).toBe(400);
        expect(e.message).toBe(
          "Le mot de Passe n'est pas au bon format. Il doit contenir au moins 8 caractères composés à minima d'une lettre minuscule, majuscule, d'un chiffre et d'un caractère spéciale"
        );
      }
    });
    it("Should throw an error if the password have no special characters", async () => {
      try {
        await userService.register({
          user_name: "Amélia",
          email: "kanuAmélia@gmail.com",
          password: "KanuAmélia1",
        });
      } catch (e: any) {
        expect(e.statusCode).toBe(400);
        expect(e.message).toBe(
          "Le mot de Passe n'est pas au bon format. Il doit contenir au moins 8 caractères composés à minima d'une lettre minuscule, majuscule, d'un chiffre et d'un caractère spéciale"
        );
      }
    });
    //   expect(typeof user.password).toBe("string");
  });
});
