const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  favorites: [
    {
    }
  ],
});

const User = mongoose.model("User", user);

module.exports = User;
