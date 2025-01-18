module.exports = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "Auth API",
    description: "Authentication & Authorization API Documentation",
  },
  host: "localhost:8000",
  basePath: "/",
  tags: [
    { name: "Auth", description: "Authentication routes" },
    { name: "User", description: "User-related routes" },
  ],
  paths: {
    "/api/auth/signup": {
      post: {
        tags: ["Auth"],
        summary: "Register a new user",
        parameters: [
          {
            in: "body",
            name: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                username: { type: "string" },
                email: { type: "string" },
                password: { type: "string" },
              },
              required: ["username", "email", "password"],
            },
          },
        ],
        responses: { 200: { description: "User registered successfully" } },
      },
    },
    "/api/auth/signin": {
      post: {
        tags: ["Auth"],
        summary: "Sign in a user",
        parameters: [
          {
            in: "body",
            name: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                username: { type: "string" },
                password: { type: "string" },
              },
              required: ["username", "password"],
            },
          },
        ],
        responses: { 200: { description: "User signed in successfully" } },
      },
    },
  },
};
