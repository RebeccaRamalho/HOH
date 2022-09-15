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
  it("Should return a 201 http status code and retun an object of data", async () => {
    const res = await request(server.app)
      .post("/api/adminRegister")
      .send({
        user_name: "giblibaby",
        email: "gibliforevera@gmail.com",
        password: "kdkkA.100000",
      })
      .expect(201);
    expect(res.body.user_name).toBe("giblibaby");
    expect(res.body.email).toBe("gibliforevera@gmail.com");
  });
});
