const express = require("express");
const passport = require("passport");
const { check, validationResult } = require("express-validator");

const {
  login,
  logout,
  signup,
  user,
} = require("../../controllers/authController");

const router = express.Router();

// /api/auth/signup
router.post(
  "/signup",
  [
    check("username")
      .isLength({ min: 6 })
      .withMessage("the name must have minimum length of 6")
      .trim(),

    check("password")
      .isLength({ min: 8, max: 15 })
      .withMessage("your password should have min and max length between 8-15")
      .matches(/\d/)
      .withMessage("your password should have at least one number")
      .matches(/[!@#$%^&*(),.?":{}|<>]/)
      .withMessage("your password should have at least one sepcial character"),
  ],
  (req, res, next) => {
    const error = validationResult(req).formatWith(({ msg }) => msg);

    const hasError = !error.isEmpty();

    if (hasError) {
      res.status(422).json({ error: error.array() });
    } else {
      next();
    }
  },
  signup
);

// /api/auth/login
router.post(
  "/login",
  passport.authenticate("local", {
    failureMessage: "Invalid username or password",
  }),
  login
);

// /api/auth/logout
router.get("/logout", logout);

// /api/auth/user
router.get("/user", user);

module.exports = router;
