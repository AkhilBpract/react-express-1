const Users = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register new user
exports.createItem = async (req, res) => {
  const { first_name, last_name, email, password, confirm_password } = req.body;

  // Check if passwords match
  if (password !== confirm_password) {
    return res
      .status(400)
      .json({ message: "Passwords do not match", error: 400 });
  }

  try {
    // Check if user already exists
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Encrypt password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new Users({
      first_name,
      last_name,
      email,
      password: hashedPassword,
    });

    // Save user in the database
    await newUser.save();
    res.status(201).json({ message: "Registration Successful" });
  } catch (error) {
    res.status(400).json({ message: "Error", error });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ token, message: "Login successful", status: 200 });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
};

exports.getItems = async (req, res) => {
  try {
    const data = await Users.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users", error: err });
  }
};
exports.getProfile = async (req, res) => {
  try {
    res.status(200).json({
      message: "User retrieved successfully",
      data: {
        id: req.user._id,
        first_name: req.user.first_name,
        last_name: req.user.last_name,
        email: req.user.email,
      },
      status: 200,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching user details", error: error.message }); // Internal Server Error
  }
};
