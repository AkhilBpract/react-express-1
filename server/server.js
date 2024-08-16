const express = require("express");
const mongoose = require("mongoose");
const Item = require("./models/Item");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ data: ["user one", "user two", "user three"] });
});

app.listen(5001, () => {
  console.log("Server starts on port 5001");
});

mongoose
  .connect(
    "mongodb+srv://akhilcvb:pIf1wsncQ8pg4ljj@cluster0.d1bidpl.mongodb.net",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Connection error", error);
  });

app.post("/items", async (req, res) => {
  console.log(req.body, "post .........");
  const newItem = new Item(req.body);
  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
