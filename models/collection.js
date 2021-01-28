const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Model for user-created collection
const collectionSchema = new Schema({
  // Name of collection
  title: {
    type: String,
    required: true,
  },
  // Favorites array
  favorites: [],
});

const Collection = mongoose.model("Collection", collectionSchema);

module.exports = Collection;
