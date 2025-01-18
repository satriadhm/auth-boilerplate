
# Node.js Auth Boilerplate with MongoDB and JWT

This boilerplate provides a robust starting point for implementing authentication and authorization in Node.js applications using MongoDB and JWT. 

## Features
- **JWT Authentication & Authorization** with Role-based Access Control (RBAC)
- **Rate Limiting** to prevent brute-force attacks (via `express-rate-limit`)
- **Centralized Logging** using `winston`
- **Swagger API Documentation** for interactive API testing
- **Error Handling Middleware** for consistent error responses
- **Database Seeding** for initializing roles and an admin user
- **Unit Testing** with `Jest` and `Supertest`
- **CI/CD Integration** using GitHub Actions for automated testing

---

## Directory Structure
```
satriadhm-auth-boilerplate/
├── README.md
├── package.json
├── .env
├── server.js
├── app/
│   ├── config/
│   │   ├── auth.config.js
│   │   ├── db.config.js
│   │   └── swagger.config.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── user.controller.js
│   ├── middleware/
│   │   ├── authJwt.js
│   │   ├── errorHandler.js
│   │   ├── index.js
│   │   └── verifySignUp.js
│   ├── models/
│   │   ├── index.js
│   │   ├── role.model.js
│   │   └── user.model.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── user.routes.js
│   │   └── docs.routes.js
│   ├── seeds/
│   │   └── seed.js
│   └── utils/
│       ├── logger.js
│       └── rateLimiter.js
├── tests/
│   ├── auth.test.js
│   ├── user.test.js
└── .github/
    └── workflows/
        └── ci.yml
```

---

## Installation

### Prerequisites
1. **Node.js** version >= 14.x
2. **MongoDB** installed locally or accessible remotely

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/auth-boilerplate.git
   cd auth-boilerplate
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create an `.env` file:
   ```env
   PORT=8000
   DB_URI=mongodb://127.0.0.1:27017/auth_service
   CLIENT_ORIGIN=http://localhost:8081
   JWT_SECRET=supersecretkey
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. Seed the database:
   ```bash
   npm run seed
   ```

---

## API Documentation
Interactive API documentation is available via Swagger:
```
http://localhost:8000/api/docs
```

---

## Testing

Run all unit tests with coverage:
```bash
npm test
```

---

## CI/CD Integration

This project includes a CI/CD pipeline powered by **GitHub Actions**.  
The pipeline automatically:
1. Runs all tests on each push or pull request to the `main` branch.
2. Uses a MongoDB service for integration testing in an isolated environment.

You can find the configuration in `.github/workflows/ci.yml`.

---

## Seeding the Database

The `npm run seed` command initializes the database with:
- Default roles (`user`, `admin`, `moderator`)
- An admin user with the following credentials:
  - **Username:** `admin`
  - **Password:** `adminpassword`

---

## Contribution

Contributions are welcome! Please:
1. Fork this repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a clear description.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Maintainers
- [Glorious Satria](https://github.com/satriadhm)
```
