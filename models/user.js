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
      // primaryImage: String,
      // title: String,
      // displayLocation: String,
      // description: String,
    }
  ],
});

const User = mongoose.model("User", user);

module.exports = User;
