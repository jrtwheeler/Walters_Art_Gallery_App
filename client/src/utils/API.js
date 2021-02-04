import axios from "axios";

const API = {
  // Get search results from API
  getResults: function (query) {
    return axios.get("/api/art/" + query);
  },
  // Get user id from Mongo database
  getUser: function () {
    return axios.get("/api/collections");
  },
  // Post user favorite to their collection
  saveFavorites: function (favoriteData) {
    return axios.post("/api/collections", favoriteData);
  },
  // Get user favorites and display in their collection - id is for unique user
  getFavorites: function (id) {
    return axios.get("/api/collections" + id);
  },
};

export default API;
