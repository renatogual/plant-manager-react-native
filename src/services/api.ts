import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.39.229:3333',
});

export default api;
