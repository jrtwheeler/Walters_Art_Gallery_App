// Establish dependences
const bcrypt = require("bcryptjs");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const db = require("../models");

const local = new localStrategy((username, password, done) => {
  db.User.findOne({ username: username }, (err, user) => {
    if (err) {
      throw err;
    }
    if (!user) {
      return done(null, false, {
        message: "Incorrect username",
      });
    }
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        throw err;
      }
      if (result === true) {
        return done(null, user);
      } else {
        return done(null, false, {
          message: "Incorrect password",
        });
      }
    });
  });
})

passport.use("local", local);

passport.serializeUser((user, cb) => {
  cb(null, user);
});

// Only send back username in object
passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

module.exports = passport