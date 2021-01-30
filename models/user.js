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
      collectionArt: String, // change this @ source
      displayLocation: String,
      description: String,
    },
  ],
});

module.exports = mongoose.model("User", user);
