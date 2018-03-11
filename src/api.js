const axios = require("axios");

const apiHost = "https://interests-api.herokuapp.com";

module.exports = {
  getInterests: searchTerm => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${apiHost}/interests?searchTerm=${searchTerm}`)
        .then(response => resolve(response.data));
    });
  }
};
