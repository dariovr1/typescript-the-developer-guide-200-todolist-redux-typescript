import axios from 'axios';

const BASE_URL = "https://jsonplaceholder.typicode.com";

const apiClient = axios.create({
  baseURL: `${BASE_URL}`,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default  apiClient;
