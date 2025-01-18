const request = require("supertest");
const app = require("../server");

describe("User API Tests", () => {
  let token;

  beforeAll(async () => {
    const res = await request(app).post("/api/auth/signin").send({
      username: "admin",
      password: "adminpassword",
    });
    token = res.body.accessToken;
  });

  it("should access public content", async () => {
    const res = await request(app).get("/api/test/all");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Public Content.");
  });

  it("should access user content with token", async () => {
    const res = await request(app)
      .get("/api/test/user")
      .set("x-access-token", token);

    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("User Content.");
  });

  it("should return 403 for admin content without admin role", async () => {
    const res = await request(app)
      .get("/api/test/admin")
      .set("x-access-token", token);

    expect(res.statusCode).toBe(403);
    expect(res.body.message).toBe("Require Admin Role!");
  });
});
