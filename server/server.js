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

// Use item routes
app.use("/api/items", itemRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
