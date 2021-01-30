// Establish dependency
const mongoose = require("mongoose");

// Create user schema
const user = new mongoose.Schema({
  username: String,
  password: String,
});

module.exports = mongoose.model("User", user);
