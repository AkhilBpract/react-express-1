const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/users");
const taskRoutes = require("./routes/taskRoutes");

require("dotenv").config();

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());

// Middleware for request timeout
app.use((req, res, next) => {
  res.setTimeout(120000, () => {
    res.status(408).json({ message: "Request timed out" });
  });
  next();
});
const cors = require("cors");

const corsOptions = {
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"], // Allows all common methods
  allowedHeaders: "*",
  credentials: true,
};

app.use(cors(corsOptions));
app.use("/api", userRoutes);
app.use("/api/task", taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
