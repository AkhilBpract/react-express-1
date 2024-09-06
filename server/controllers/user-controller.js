const Users = require("../models/users");

exports.createItem = async (req, res) => {
  const data = new Users(req.body);
  try {
    const {
      first_name,
      last_name,
      username,
      email,
      country,
      message,
      profile,
      privacy,
    } = data;
  } catch (err) {
    res.status(400).json({ message: error.message });
  }
};
