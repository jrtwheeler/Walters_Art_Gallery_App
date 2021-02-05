// Establish dependency
const mongoose = require("mongoose");

// Create user schema
const artapp = new mongoose.Schema({
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


const Artapp = mongoose.model("Artapp", artapp);

module.exports = Artapp;