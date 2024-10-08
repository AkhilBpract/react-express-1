const Users = require("../models/users");

exports.createItem = async (req, res) => {
  const { password, confirm_password } = req.body;
  console.log(password, confirm_password);
  if (password !== confirm_password) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  const data = new Users(req.body);
  try {
    const save = await data.save();
    res.status(201).json(save);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getItems = async (req, res) => {
  try {
    const data = await Users.find();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
};
