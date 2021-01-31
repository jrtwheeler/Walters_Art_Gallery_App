// Establish dependencies
const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const db = require("../models");
const passport = require("passport");
// const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");

// Authentication routes
module.exports = function (app) {
  // -------------Passport Authentication Routing-------------
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the "My Collections" page.
  // Otherwise the user will be sent an error
  app.post("/login", passport.authenticate("local"), (req, res, next) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect("/login");
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      return res.redirect("/collections");
    })(req, res, next);
  });

  app.post("/signup", (req, res) => {
    db.User.create({ username: req.body.username }, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User already exists");
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new db.User({
          username: req.body.username,
          password: hashedPassword,
        });
        await newUser.save();
        res.send("User created!"); // add re-routing to landing page on click
      }
    });
  });

  // -----------------------App Routing-----------------------
  app.get("/collections", (req, res) => {
    // we need to validate user on link click - should we do it here?
    res.send("Insert favorites here");
    // db.User.findAll({
    //   where: {
    //     username: req.user.username
    //   }
    // }).then(function())
  });
};
