import axios from 'axios';
import AppConfig from '@/config';

const { apiBaseUrl } = AppConfig;

const getPortfolioSummary = async (coinId) => {
  const response = await axios.get(`${apiBaseUrl}/v1/getPortfolioSummary`, {
    params: {
      coinId: coinId,
    },
    withCredentials: true,
  });
  return response.data;
};

export { getPortfolioSummary };
