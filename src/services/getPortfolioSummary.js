import axios from 'axios';
import AppConfig from '@/config';
import Vue from 'vue';

const { apiBaseUrl } = AppConfig;
let jwtToken = Vue.$cookies.get('jwt');

const getPortfolioSummary = async (coinId) => {
  const response = await axios.get(`${apiBaseUrl}/v1/getPortfolioSummary`, {
    params: {
      coinId: coinId,
    },
    withCredentials: true,
    headers: {
      Authorization: jwtToken,
    },
  });
  return response.data;
};

export { getPortfolioSummary };
