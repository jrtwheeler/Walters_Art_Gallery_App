import axios from "axios";

const API = {
  // Get search results from API
  getResults: function (query) {
    return axios.get("/api/art/" + query);
  },
  // Get search results from API
  getExhibitions: function (exhibitions) {
    return axios.get("/api/art/" + exhibitions);
  },
  // Get user id from Mongo database
  getUser: function () {
    let val = axios.get("/api/users");
    console.log(val)
    return val
  },
  // Post user favorite to their collection
  saveFavorites: function (favoriteData) {
    return axios.post("/api/users", favoriteData);
  },
  // Get user favorites and display in their collection - id is for unique user
  getFavorites: function (id) {
    return axios.get("/api/users" + id);
  },
};

export default API;
