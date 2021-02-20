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
router.get("/users", isAuthenticated, (req, res) => {
  db.User.find({}).then((result) => res.json(result));
});

// Post route for login
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/collections",
    failureRedirect: "/",
    failureFlash: "Invalid username or password.",
  })
);

// Post route for signup
router.post("/signup", async (req, res) => {
  let user = await db.User.findOne({ username: req.body.username });
  if (user) return res.send("Username already exists");
  res.redirect("/signup");

  req.body.password = await bcrypt.hash(req.body.password, 10);
  user = await db.User.create(req.body);
});

// Get route for logout
router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    // req.logOut();
    res.redirect("/landing");
    res.json(["log", "out"]);
  });
});

// -----------------------App Routing-----------------------
// Get route for search results
router.get("/api/art/:query", (req, res) => {
  const BASEURL = "http://api.thewalters.org/v1/objects.json?keyword=";
  const KEY = "&apikey=" + process.env.WALTERSAPIKEY;
  axios
    .get(BASEURL + req.params.query + KEY)
    .then((results) => res.json(results.data));
});

// Get route for exhibition
router.get("/api/art/:exhibitions", (req, res) => {
  const BASEURL = "http://api.thewalters.org/v1/exhibitions.json?title=";
  const KEY = "&apikey=" + process.env.WALTERSAPIKEY;
  axios
    .get(BASEURL + req.params.exhibitions + KEY)
    .then((results) => res.json(results.data));
});

// Update user object witih favorited art object
router.put("/api/users/:id", (req, res) => {
  const id = req.params.id;
  const favorite = req.body.favorites;
  db.User.findByIdAndUpdate(
    id,
    { $push: { favorites: favorite } },
    { new: true }
  )
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

// Catchall routing to home page - if none of the above routes fire, this is the default
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
