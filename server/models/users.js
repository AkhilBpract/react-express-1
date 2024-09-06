const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  country: {
    type: String,
  },
  message: {
    type: String, // Textarea content will be stored as a String
  },
  profile: {
    type: String, // Store file URL or path in String format
  },
  privacy: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("User", userSchema);
