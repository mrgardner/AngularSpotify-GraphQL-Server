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
  .then(res => {
    if(res.ok) {
      return res.json();
    } else {
      if (res.status === 401) {
        throw new Error('Token expired');
      }
    }
  })
  .catch(err => {throw new Error(err)});
};

exports.callApi = callApi;