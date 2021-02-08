const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  username: {
    type: String,
    trim: true,
    required: "String is Required",
  },
  password: {
    type: String,
    validate: [({ length }) => length >= 6, "Longstring should be longer."],
  },
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
