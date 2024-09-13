const express = require("express");
const connectDB = require("./config/db");
const itemRoutes = require("./routes/itemRoutes");
const userRoutes = require("./routes/users");
require("dotenv").config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware for request timeout
app.use((req, res, next) => {
  res.setTimeout(120000, () => {
    res.status(408).json({ message: "Request timed out" });
  });
  next();
});
// CORS Configuration
const cors = require("cors");

const corsOptions = {
  origin: "*", // Allows all origins
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"], // Allows all common methods
  allowedHeaders: "*", // Allows all headers
  credentials: true, // Allows credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions));
// Use item routes
app.use("/api/items", itemRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
