// Import MongoDB model
const db = require("../models");

// Login process is carried out by the passport.authenticate middleware;
// this controller only gets called when the authentication is successful
const login = (req, res) => {
  return res.status(200).json({ msg: "Successfully logged in!" });
};

// If the user does not exist, create account via mongoose
const signup = async (req, res) => {
  let user = await db.User.findOne({ username: req.body.username });
  if (user) return res.send("Username already exists");
  res.redirect("/signup");

  req.body.password = await bcrypt.hash(req.body.password, 10);
  user = await db.User.create(req.body);
};

const logout = (req, res) => {
  req.logout();
  res.status(200).json({ msg: "Logged out" });
};

// If the user exists, send user info; otherwise, we throw an error
const user = (req, res) => {
  if (!req.user)
    return res
      .status(403)
      .json({ errors: ["Login to view a personal collection"] });

  return res.status(200).json({ user: req.user });
};

module.exports = {
  login,
  signup,
  logout,
  user,
};
