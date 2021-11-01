import axios from 'axios';
import AppConfig from '@/config';
// import Vue from 'vue';

const { apiBaseUrl } = AppConfig;

// const jwtToken = Vue.$cookies.get('jwt');
// const config = {
//   headers: {
//     Authorization: jwtToken,
//   },
// };
const getPortfolio = async () => {
  const response = await axios.get(`${apiBaseUrl}/v1/getPortfolio`, {
    withCredentials: true,
  });
  return response.data;
};

export { getPortfolio };
