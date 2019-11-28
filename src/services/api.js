import axios from 'axios';

const api = axios.create({
  baseURL: 'https://data.messari.io/api/v1/assets/',
});

export default api;
