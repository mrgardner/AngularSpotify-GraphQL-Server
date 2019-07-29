const fetch = require('node-fetch');

const callApi = (url, method = "GET", token) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token
  };
  return fetch(url, {
    method,
    headers
  })
  .then(res => res.json())
  .catch(err => console.log(err));
};

exports.callApi = callApi;