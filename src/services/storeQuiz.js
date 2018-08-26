import axios from 'axios';

const store = (data) => {
  const url = 'XXX';
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  };
  return axios({
    method: 'post',
    url,
    data,
    responseType: 'json',
    headers,
  })
    .then(response => response)
    .catch(error => Promise.reject(error.response));
};

export default store;
