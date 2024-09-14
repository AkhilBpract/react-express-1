const Users = require("../models/users");

exports.createItem = async (req, res) => {
  const { password, confirm_password } = req.body;
  if (password !== confirm_password) {
    return res
      .status(400)
      .json({ message: "Passwords do not match", error: 400 });
  }

  const data = new Users(req.body);
  try {
    const save = await data.save();
    res.status(201).json({ message: "Registration Successful" });
  } catch (error) {
    res.status(400).json({ message: "Error", error: error });
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
