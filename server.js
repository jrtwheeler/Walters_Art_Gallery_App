// Establish dependencies
const express = require("express");
const flash = require("connect-flash");
require("dotenv").config();

const app = express();
app.use(flash());
const PORT = process.env.PORT || 3001;

// Connect to the Mongo DB
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/artapp", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Define middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000", // location of react app we're connecting to
    credentials: true,
  })
);

const session = require("express-session");
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
const cookieParser = require("cookie-parser");
app.use(cookieParser("secretcode"));

const passport = require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());

app.use(require("./routes"));

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now listening on port ${PORT}!`);
});
