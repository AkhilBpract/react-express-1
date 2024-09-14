const Users = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Register new user
exports.createItem = async (req, res) => {
  const { first_name, last_name, email, password, confirm_password } = req.body;

  if (password !== confirm_password) {
    return res.status(400).json({ message: "Passwords do not match", error: 400 });
  }

  try {
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Users({
      first_name,
      last_name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(201).json({ token, message: "Registration Successful", status: 200 });
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
    res.status(500).json({ message: "Error fetching user details", error: error.message });
  }
};

exports.googleLogin = async (req, res) => {
  const { idToken } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const { sub, email, name } = payload;

    let user = await Users.findOne({ email });

    if (!user) {
      user = new Users({
        googleId: sub,
        email,
        name,
      });
      await user.save();
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ token, message: "Google login successful", status: 200 });
  } catch (error) {
    res.status(500).json({ message: "Error logging in with Google", error });
  }
};
