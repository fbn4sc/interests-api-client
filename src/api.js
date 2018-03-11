const axios = require("axios");

const apiHost = process.env.REACT_APP_API_HOST;

module.exports = {
  getInterests: searchTerm => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${apiHost}/interests?searchTerm=${searchTerm}`)
        .then(response => resolve(response.data));
    });
  }
};
