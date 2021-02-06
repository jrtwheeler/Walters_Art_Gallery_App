// Establish dependencies
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema } = mongoose;

// Create User schema
const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
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

UserSchema.pre("save", async function (next) {
  const user = this;

  try {
    if (!user.isModified("password")) next();
    // Hash the user's password and store it in "hash"; replace password with hash variable
    let hash = await bcrypt.hash(user.password, 13); // bcrypt takes 2 arguments: plain text password (user.password), and hash round (13)
    user.password = hash;
    next();
  } catch (error) {
    console.error(error);
    next(error);
  }
});
// Compare hash password with plain text password
UserSchema.methods.comparePassword = async function (password) {
  try {
    let result = await bcrypt.compare(password, this.password); // result will be true if passwords match

    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
