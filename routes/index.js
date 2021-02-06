// // -------------Passport Authentication Routing-------------
// Import dependencies
const express = require("express");
const passport = require("passport");
const { check, validationResult } = require("express-validator");

// Import controllers
const {
  login,
  logout,
  signup,
  user,
} = require("../controllers/AuthController");

// Create router
const router = express.Router();

// Endpoint routing: signup, login, logout, user
// /api/auth/signup endpoint
router.post(
  "/signup",
  [
    check("username") // validate username
      .isLength({ min: 3 })
      .withMessage("Username must have a minimum length of 3")
      .trim(),

    check("password") // validate password
      .isLength({ min: 6, max: 12 })
      .withMessage("Password should be between 6-12 characters in length")
      .matches(/\d/)
      .withMessage("Password should have at least one number")
      .matches(/[!@#$%^&*(),.-=?":{}|<>]~'/)
      .withMessage("Password should have at least one special character"),
  ],
  (req, res, next) => {
    // console.log(req, res);

    // Error handling and formatting
    const error = validationResult(req).formatWith(({ msg }) => msg);
    const hasError = !error.isEmpty();
    debugger;
    if (hasError) {
      res.status(422).json({ error: error.array() });
    } else {
      next();
    }
  },
  signup // specify controller for /api/auth/signup
);

// /api/auth/login endpoint
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/collections",
    failureRedirect: "/",
    failureFlash: "Invalid username or password.",
  }),
  login // specify controller for /api/auth/login
);

// /api/auth/logout endpoint
router.get("/logout", logout); // specify controller for /api/auth/logout

// /api/auth/user endpoint - get logged in user's info
router.get("/user", user); // specify controller for /api/auth/user

// module.exports = router; // we already have this at the bottom of the file

// -----------------------App Routing-----------------------
// Establish dependencies
const axios = require("axios");
const db = require("../models");
const path = require("path");

// API Routes
const apiRoutes = require("./api");
router.use("/api", apiRoutes);

// Get search results on landing page
router.get("/api/art/:query", (req, res) => {
  const BASEURL = "http://api.thewalters.org/v1/objects.json?keyword=";
  const KEY = "&apikey=" + process.env.WALTERSAPIKEY;
  axios
    .get(BASEURL + req.params.query + KEY)
    .then((results) => res.json(results.data));
});

// Get logged in user and send back their favorites collection data
router.get("/api/users", (req, res) => {
  db.User.findOne({
    where: {
      username: req.user.username,
    },
  }).then((data) => {
    console.log(data.favorites);
    res.json(data.favorites);
  });
});

// router.get("/artapp", (req, res) => {
//   db.User.find({})
//     .then(dbUser => {
//       console.log(dbUser)
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// General routing to home page
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
