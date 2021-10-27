import axios from 'axios';
import AppConfig from '@/config';

const { apiBaseUrl } = AppConfig;

const getPortfolio = async () => {
  const response = await axios.get(`${apiBaseUrl}/v1/getPortfolio`, {
    withCredentials: true,
  });
  return response.data;
};

export { getPortfolio };
