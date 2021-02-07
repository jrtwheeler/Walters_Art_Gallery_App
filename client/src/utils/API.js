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
  // Get user from Mongo database
  getUser: async function () {
    let val = await axios.get("/api/auth/user");
    console.log(val);
    return val;
  },
  // PLACEHOLDER CODE
  // // Post user favorite to their collection
  // saveFavorites: function (favoriteData) {
  //   return axios.post("/api/users", favoriteData);
  // },
  // // Get user favorites and display in their collection - id is for unique user
  // getFavorites: function (id) {
  //   return axios.get("/api/users" + id);
  // },
};

export default API;
