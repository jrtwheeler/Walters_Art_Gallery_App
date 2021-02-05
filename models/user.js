// Establish dependency
const mongoose = require("mongoose");

// Create user schema
const user = new mongoose.Schema({
  username: String,
  password: String,
  favorites: [
    {
      primaryImage: String,
      title: String,
      displayLocation: String,
      description: String,
    },
  ],
});


const User = mongoose.model("User", user);

module.exports = User;