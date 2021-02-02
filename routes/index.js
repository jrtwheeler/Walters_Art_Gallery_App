// Establish dependencies
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const db = require("../models");
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");

// -------------Passport Authentication Routing-------------
// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the "My Collections" page.
// Otherwise the user will be sent an error
router.get("/users", isAuthenticated, (req, res) => {
  db.User.find({}).then((result) => res.json(result));
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/collections",
    failureRedirect: "/landing",
    failureFlash: "Invalid username or password.",
  }),
  (req, res) => {
    res.json(req.user);
  }
);

router.post("/signup", async (req, res) => {
  let user = await db.User.findOne({ username: req.body.username });
  if (user) return res.send("Username already exists");

  req.body.password = await bcrypt.hash(req.body.password, 10);
  user = await db.User.create(req.body);

  res.json(user);
});

router.get("/logout", (req, res) => {
  req.logOut();

  res.json(req.user);
});

// -----------------------App Routing-----------------------
router.get("/collections", (req, res) => {
  // we need to validate user on link click - should we do it here?
  res.send("Insert favorites here");
  // db.User.findAll({
  //   where: {
  //     username: req.user.username
  //   }
  // }).then(function())
});

module.exports = router;
