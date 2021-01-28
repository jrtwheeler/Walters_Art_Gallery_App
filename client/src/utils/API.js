import axios from "axios";

export default {
  getResults: function () {
    const BASEURL = "http://api.thewalters.org/v1/objects.json?keyword=";
    const KEY ="&apikey=9O0bCwuMxTEBqTM1j2rJixcd0w4kuBFdCNCXJyNSGuGhtcS5QUj3gq5ClMaFr9Rm";
    let search = "painting";
    return axios.get(BASEURL + search + KEY).then((data) => console.log(data));
  },
};
