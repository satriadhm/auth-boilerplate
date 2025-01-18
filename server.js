// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const { limiter } = require("./app/utils/rateLimiter");
const swaggerUi = require("swagger-ui-express");
const swaggerConfig = require("./app/config/swagger.config");

const app = express();

// Middleware
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:8081" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));
app.use(limiter);

// Routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerConfig));

// Error handling middleware
const { errorHandler } = require("./app/middleware/errorHandler");
app.use(errorHandler);

// Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
