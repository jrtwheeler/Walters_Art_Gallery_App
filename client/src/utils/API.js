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
    let user = await axios.get("/api/auth/user");
    return user;
  },
  // Update a user object with favorite data
  updateUser: async function (userId, newUserData) {
    const res = await fetch(`/api/users/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUserData),
    });
    const updated = await res.json();
    console.log("check updated", updated);
    return updated;
  },
  // PLACEHOLDER - may need for rendering favorites
  // Get user favorites and display in their collection - id is for unique user
  // getFavorites: function () {

  // },
};

export default API;
