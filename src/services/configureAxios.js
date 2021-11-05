import axios from 'axios';
import store from '@/stores';

axios.interceptors.request.use(
  (request) => {
    if (request.url.includes('portfolio') || request.url.includes('alerts')) {
      request.headers['Authorization'] = store.state.auth.token;
    }

    return request;
  },
  (error) => Promise.reject(error)
);
