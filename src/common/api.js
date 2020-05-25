import axios from 'axios';

export const API = axios.create({
  baseURL: `https://anapioficeandfire.com/`
})
API.interceptors.request.use(function (config) {
    // Set common parameters on each request
    config.params.APPID = 'f94dfd5b2f1eafbcc7cb05cf53a60520';
    config.params.units = 'imperial';
    return config;
  }, function (error) {
    return Promise.reject(error);
  });