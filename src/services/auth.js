import axios from 'axios';
import AppConfig from '@/config';

const { apiBaseUrl } = AppConfig;

const login = async (credentials) => {
  const response = await axios.post(`${apiBaseUrl}/v1/login`, credentials, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data;
};
const register = async (credentials) => {
  const response = await axios.post(`${apiBaseUrl}/v1/register`, credentials, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data;
};
export { login, register };
