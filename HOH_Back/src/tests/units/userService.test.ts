import UserService from "../../modules/User/service";
import UserRepositoryMock from "../mocks/userRepository.mock";
import { mailerService } from "../../libs";

// import { User } from "../../modules/User/entity";
// import { IUserRepository } from "../../helpers/interfaces/article.interfaces";
let emailTestValues = [
    "",
    "k",
    "k@gmail.com",
    "kanu_@gmail.com",
    "kanu__@gmail.com",
    "_kanu@gmail.com",
    "kanurebecca@_gmail.com",
    "kanurebecca@gmail_.com",
    "kanurebecca@gmail.c",
    "kanurebecca@gmail.c_",
    "kanu.-rebecca..@gmail.c_",
];
let passwordTestValues = [
  "",
  "k",
  "kanuAmelia",
  "KANUEMMANUELLE1899",
  "kanuemmanuelle1899",
  "1989189918911",
  "KANUEMMANUELLE1899.",
  "kanuemmanuelle1899.",
  "1989189918911.",
];

const userService = new UserService(new UserRepositoryMock(), mailerService);

describe("Admin service USE-CASE: ", () => {
  describe("add admin use case:", () => {
    test("register function exist", () => {
      expect(userService.register).toBeDefined();
    });

    // test.each([[1, 1, 2], [1, 2, 3], [2, 1, 3]])(
    //     '.add(%i, %i)',
    //     (a, b, expected) => {
    //       expect(a + b).toBe(expected);
    //     },
    //   );

    //répéter le test autant de fois qu'il y'a de valeur dans la variable emailTestValues

    it("Should throw an error if if the email is not in the good format", async () => {
      try {
        for (let index = 0; index >= emailTestValues.length; index++) {
          await userService.register({
            user_name: "Amélia",
            email: emailTestValues[index],
            password: "rebecca2009GOOD",
          });
        }
      } catch (e: any) {
        expect(e.statusCode).toBe(400);
        expect(e.message).toBe(
          "Le mot de Passe n'est pas au bon format. Il doit contenir au moins 8 caractères composés à minima d'une lettre minuscule, majuscule, d'un chiffre et d'un caractère spéciale" ||
            "Le mail n'est pas au bon format."
        );
      }
    });

    // it("Should throw an error if if the email is not in the good format", async () => {
    //   try {
    //     const user = await userService.register({
    //       user_name: "Amélia",
    //       email: emailTestValues,
    //       password: "rebecca2009GOOD",
    //     });
    //   } catch (e: any) {
    //     expect(e.statusCode).toBe(400);
    //     expect(e.message).toBe(
    //       "Le mot de Passe n'est pas au bon format. Il doit contenir au moins 8 caractères composés à minima d'une lettre minuscule, majuscule, d'un chiffre et d'un caractère spéciale" ||
    //         "Le mail n'est pas au bon format."
    //     );
    //   }
    // });

    // it("Should throw an error if the password is not in the good format", async () => {
    //   try {
    //     await userService.register({
    //       user_name: "Amélia",
    //       email: "kanuAmélia@gmail.com",
    //       password: passwordTestValues,
    //     });
    //   } catch (e: any) {
    //     expect(e.statusCode).toBe(400);
    //     expect(e.message).toBe(
    //       "Le mot de Passe n'est pas au bon format. Il doit contenir au moins 8 caractères composés à minima d'une lettre minuscule, majuscule, d'un chiffre et d'un caractère spéciale" ||
    //         "Le mail n'est pas au bon format."
    //     );
    //   }
    // });
    //   expect(typeof user.password).toBe("string");
  });
});
