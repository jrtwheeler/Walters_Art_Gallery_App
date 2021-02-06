// Establish dependencies
const router = require("express").Router();
const axios = require("axios");
const bcrypt = require("bcryptjs");
const db = require("../models");
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const path = require("path");
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

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
    failureRedirect: "/",
    failureFlash: "Invalid username or password.",
  })
);

router.post("/signup", async (req, res) => {
  let user = await db.User.findOne({ username: req.body.username });
  if (user) return res.send("Username already exists");
  res.redirect("/signup");

  req.body.password = await bcrypt.hash(req.body.password, 10);
  user = await db.User.create(req.body);
  // Rerouting does not yet work
  // res.redirect("/login");
  // res.json(user.username);
});

router.get("/logout", (req, res) => {
  req.logOut();
  res.redirect("/landing");
});

// -----------------------App Routing-----------------------
router.get("/api/art/:query", (req, res) => {
  const BASEURL = "http://api.thewalters.org/v1/objects.json?keyword=";
  const KEY = "&apikey=" + process.env.WALTERSAPIKEY;
  axios
    .get(BASEURL + req.params.query + KEY)
    .then((results) => res.json(results.data));
});

router.get("/api/art/:exhibitions", (req, res) => {
  const BASEURL = "http://api.thewalters.org/v1/exhibitions.json?title=";
  const KEY = "&apikey=" + process.env.WALTERSAPIKEY;
  axios
    .get(BASEURL + req.params.exhibitions + KEY)
    .then((results) => res.json(results.data));
});

// General routing to home page
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
