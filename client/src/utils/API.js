import axios from "axios";
const BASEURL = "http://api.thewalters.org/v1/objects.json?keyword=";
const KEY ="&apikey=9O0bCwuMxTEBqTM1j2rJixcd0w4kuBFdCNCXJyNSGuGhtcS5QUj3gq5ClMaFr9Rm";

export default {
  getResults: function (query) {  
    return axios.get(BASEURL + query + KEY).then((data) => console.log(data));
  },
};
