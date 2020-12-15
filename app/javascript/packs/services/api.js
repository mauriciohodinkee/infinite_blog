import axios from 'axios';

const baseURL = process.env.API_BASE_URL;
const Api = axios.create({ baseURL });

axios.defaults.headers.common['Content-Type'] = 'text/json';

export default Api;
