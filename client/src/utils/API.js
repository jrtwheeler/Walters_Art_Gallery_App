import axios from "axios";
// Migrate API url/key to back end for enhanced security
const BASEURL = "http://api.thewalters.org/v1/objects.json?keyword=";
const KEY =
  "&apikey=9O0bCwuMxTEBqTM1j2rJixcd0w4kuBFdCNCXJyNSGuGhtcS5QUj3gq5ClMaFr9Rm";

export default {
  // Get search results from API
  getResults: function (query) {
    return axios.get(BASEURL + query + KEY);
  },
  // Get user id from Mongo database
  getUser: function (id) {
    return axios.get("/api/");
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
