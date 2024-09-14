const jwt = require("jsonwebtoken");
const Users = require("../models/users");

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Assuming token is passed as 'Bearer <token>'

  if (!token) {
    return res.status(401).json({ message: "Access denied, token missing" }); // Unauthorized
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await Users.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" }); // Not Found
    }

    req.user = user; // Attach user to request object
    next(); // Move to the next middleware or route handler
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Invalid token", error: error.message }); // Unauthorized
  }
};

module.exports = authMiddleware;
