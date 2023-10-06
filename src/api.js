// src/utils/api.js

import axios from 'axios';

const baseURL = 'http://20.244.56.144/train';

const api = axios.create({
  baseURL,
});

export default api;
