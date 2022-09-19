import request from "supertest";
import database from "../../config/database";
import App from "../../config/server";
import routes from "../../modules";
import middlewares from "../../config/middlewares";

let server = new App(routes, middlewares);

beforeAll(async () => {
  await database.connect();
});

afterAll(async () => {
  await database.close();
});

describe("POST /api/adminRegister", () => {
  it("Should return a 201 http status code and return an object of data", async () => {
    const res = await request(server.app)
      .post("/api/adminRegister")
      .send({
        user_name: "Amourlouleeree",
        email: "ameliakanufuree@gmail.com",
        password: "Hellopassworde.1993",
      })
      .expect(201);
    expect(res.body.user_name).toBe("Amourlouleeree");
    expect(res.body.email).toBe("ameliakanufuree@gmail.com");
  });
});
describe("POST /api/ladminlogin", () => {
  it("Should return a 201 https status code and return an object of data", async () => {
    const res = await request(server.app)
      .post("/api/adminlogin")
      .send({
        user_name: "Amourlouleer",
        email: "ameliakanufur@gmail.com",
        password: "Hellopassword.1993",
      })
      .expect(200);
    expect(res.body.user_name).toBe("Amourlouleer");
    expect(res.body.email).toBe("ameliakanufur@gmail.com");
  });
});
