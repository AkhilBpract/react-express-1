const Users = require("../models/users");

exports.createItem = async (req, res) => {
  const data = new Users(req.body);
  try {
    // const {
    //   first_name,
    //   last_name,
    //   username,
    //   email,
    //   country,
    //   message,
    //   profile,
    //   privacy,
    // } = data;
    const save = await data.save();
    res.status(201).json(save);
  } catch (err) {
    res.status(400).json({ message: error.message });
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
