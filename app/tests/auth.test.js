const request = require("supertest");
const app = require("../server");

describe("Auth API Tests", () => {
  it("should register a new user", async () => {
    const res = await request(app).post("/api/auth/signup").send({
      username: "testuser",
      email: "testuser@example.com",
      password: "password123",
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("User was registered successfully!");
  });

  it("should not register with duplicate username", async () => {
    const res = await request(app).post("/api/auth/signup").send({
      username: "admin",
      email: "newadmin@example.com",
      password: "newpassword",
    });

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("Failed! Username is already in use!");
  });

  it("should login successfully", async () => {
    const res = await request(app).post("/api/auth/signin").send({
      username: "admin",
      password: "adminpassword",
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.accessToken).toBeDefined();
  });
});
