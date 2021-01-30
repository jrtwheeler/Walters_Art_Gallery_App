// Establish dependencies
const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const db = require("../models");
const passport = require("../config/passportConfig");
const isAuthenticated = require("../config/middleware/isAuthenticated");

// Authentication routes
module.exports = function (app) {
  app.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("No user exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send("Successfully authenticated!");
          console.log(req.user);
        });
      }
    })(req, res, next); // add re-routing to landing page on click
  });
  app.post("/signup", (req, res) => {
    console.log("test");
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
  // Need to consider how this plugs in to overall functionality
  app.get("/user", (req, res) => {});
};
