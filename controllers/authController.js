const db = require("../models");

const login = (req, res) => {
  return res.status(200).json({ msg: "Sucessfully logged in" });
};

const signup = async (req, res) => {
  const { username, password } = req.body;
  try {
    let user = await db.User.findOne({ username });
    if (!user) {
      let newUser = new db.User({ username, password });
      await newUser.save();
      return res.status(200).json({ msg: "Successfully created" });
    }
    return res
      .status(422)
      .json({ errors: ["the user with this email already exists"] });
  } catch (error) {
    console.error(error);

    return res.status(500).json({ errors: ["some error occured"] });
  }
};

const logout = (req, res) => {
  req.logout();
  res.status(200).json({ msg: "Logged out" });
};

const user = (req, res) => {
  if (!req.user)
    return res.status(403).json({ errors: ["Login to get the info"] });
  const userToSend = {
    username: req.user.username,
    favorites: req.user.favorites,
  };
  return res.status(200).json({ user: userToSend });
};

module.exports = {
  login,
  signup,
  logout,
  user,
};
