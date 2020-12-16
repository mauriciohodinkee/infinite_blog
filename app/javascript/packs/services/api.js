import axios from 'axios';

const baseURL = process.env.API_BASE_URL;
const headers = { 'Content-type': 'application/json', Accept: 'application/json' };
const Api = axios.create({ baseURL, headers });

export default Api;
