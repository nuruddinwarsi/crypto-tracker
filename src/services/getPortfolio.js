import axios from 'axios';
import AppConfig from '@/config';
import Vue from 'vue';

const { apiBaseUrl } = AppConfig;

let jwtToken = Vue.$cookies.get('jwt');

const getPortfolio = async () => {
  const response = await axios.get(`${apiBaseUrl}/v1/getPortfolio`, {
    headers: {
      Authorization: jwtToken,
    },
    withCredentials: true,
  });
  return response.data;
};

export { getPortfolio };
