const axios = require("axios");

const apiHost = "https://interests-api.herokuapp.com";

module.exports = {
  getSuggestions: () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${apiHost}/suggestions`)
        .then(response => resolve(response.data));
    });
  },

  getInterests: searchTerm => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${apiHost}/interests?searchTerm=${searchTerm}`)
        .then(response => resolve(response.data));
    });
  }
};
