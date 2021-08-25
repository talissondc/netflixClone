import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '10ebb4490f753d316a08335c7651b407',
  },
});

export default api;
