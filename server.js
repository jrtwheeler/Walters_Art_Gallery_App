// Establish dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const password = requires("passport");
const passportlocal = require("passport-local").Storage;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware
app.use(bodyParser.json()); // replaced express with bodyParser
app.use(bodyParser.urlencoded({ extended: true })); // replaced express with bodyParser
app.use(
  cors({
    origin: "http://localhost:3000", // location of react app we're connecting to
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

// Authenticate routes
app.post("/login", (req, res) => {
  console.log(req.body);
});
app.post("/signup", (req, res) => {
  console.log(req.body);
});
app.get("/user", (req, res) => {});

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://pindellk:BhePPs4ozZFMMm6f@cluster0.bwwyi.mongodb.net/collections?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  }
);

// Use apiRoutes
app.use(routes);

// Send every request to the React app - may not need
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now listening on port ${PORT}!`);
});
