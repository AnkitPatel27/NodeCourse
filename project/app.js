const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/post");
const reviewRoutes = require("./routes/review");
const { Post, Like, Dislike } = require("./models/Post");
const User = require("./models/User");
const { Review } = require("./models/Review");
const { sessionMiddleware, cookieParser } = require("./config/session");

const swaggerDocument = YAML.load("./swagger.yaml");

// Middleware
app.use(express.json());
app.use(cookieParser);
app.use(sessionMiddleware);

// Mount the auth routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/reviews", reviewRoutes);

// Serve Swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Start the server
app.listen(3000, () => {
  // User.sync();
  // Post.sync();
  // Like.sync();
  // Dislike.sync();
  Review.sync();
  console.log("Server started on port 3000");
});
