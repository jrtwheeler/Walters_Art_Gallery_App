// Establish dependencies
let mongoose = require("mongoose");
let db = require("../models");
const API = require("./seedDB.json");

mongoose.connect("mongodb://localhost/artapp", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// This file empties the Collection collection and inserts the collection objects below

let userSeed = [
  // Add collection objects here based on desired data from Walters' API object structure
  {username: "jim",
    password: "password",
    favorites: [
      {
        primaryImage: API.Items[0].PrimaryImage.Medium,
        title: API.Items[0].Title,
        displayLocation: API.Items[0].DisplayLocation,
        description: API.Items[0].Description,
      }
    ]},
    {username: "katie",
    password: "password2",
    favorites: [
      {
        primaryImage: API.Items[1].PrimaryImage.Medium,
        title: API.Items[1].Title,
        displayLocation: API.Items[1].DisplayLocation,
        description: API.Items[1].Description,
      }
    ]}
];

db.User.deleteMany({})
  .then(async () => {
    try {
      const inserted = userSeed.map(w => db.User.create(w));
      await Promise.all(inserted);
      mongoose.disconnect();
    } catch (error) {
      console.log(error);
      mongoose.disconnect();
    }
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
