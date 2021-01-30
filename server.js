// Establish dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = requires("passport");
const passportlocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const User = require("./models");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://pindellk:BhePPs4ozZFMMm6f@cluster0.bwwyi.mongodb.net/artapp?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  }
);

// Define middleware
app.use(bodyParser.json()); // replaced express with bodyParser
app.use(bodyParser.urlencoded({ extended: true })); // replaced express with bodyParser
app.use(
  cors({
    origin: "http://localhost:3001", // location of react app we're connecting to
    credentials: true,
  })
);
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./config/passportConfig")(passport);

// Authentication routes
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
  })(req, res, next);
});
app.post("/signup", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User already exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("User created!");
    }
  });
});
// Need to consider how this plugs in to overall functionality
app.get("/user", (req, res) => {});

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Use routes
app.use(routes);

// Send every request to the React app
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now listening on port ${PORT}!`);
});
