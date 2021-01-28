// Establish dependencies
const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/collections", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// This file empties the Collection collection and inserts the collection objects below

let collectionSeed = [
  // Add collection objects here based on desired data from Walters' API object structure
  {},
  {},
];

// Mongoose action - in this case do we need to delete the existing data and replace it?
db.Collection.remove({})
  .then(() => db.Collection.collection.insertMany(collectionSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(0);
  });
