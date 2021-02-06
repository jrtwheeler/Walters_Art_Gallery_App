// Establish dependencies
const express = require("express");
const flash = require("connect-flash");
require("dotenv").config();

const app = express();
app.use(flash());
const PORT = process.env.PORT || 3001;

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to Mongo database"))
  .catch((e) => console.error(e));

// Middleware
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
    resave: false, // might need to change to true
    saveUninitialized: false, // might need to change to true
  })
);

const cookieParser = require("cookie-parser");
app.use(cookieParser("secretcode"));

// Passport
const passport = require("./services/passport");
app.use(passport.initialize()); // initialize passport
app.use(passport.session()); // tell passport to use session for the authentication process

app.use(require("./routes"));

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now listening on port ${PORT}!`);
});
