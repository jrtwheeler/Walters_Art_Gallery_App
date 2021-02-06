// Establish dependencies
const passport = require("passport");
const LocalStrategy = require("passport-local");
const mongoose = require("mongoose");
const db = require("../models");

// Tell passport what user data should be stored in the session
passport.serializeUser((user, done) => {
  done(null, user._id);
});

// Get user's information based on serializeUser configuration
passport.deserializeUser(async (id, done) => {
  try {
    let user = await User.findbyId(id, "username");

    if (!user) return done(new Error("User not found"));
    return done(null, user);
  } catch (error) {
    console.error(error);
    done(error);
  }
});

passport.use(
  new LocalStrategy(
    { usernameField: "username" },
    async (username, password, done) => {
      try {
        const user = await db.User.findOne({ username });
        if (!user) return done(null, false);
        const passwordMatch = await user.comparePassword(password);

        if (!passwordMatch) return done(null, false);
        // If the password matches, we tell passport to create a session for this specific user
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

module.exports = passport;
