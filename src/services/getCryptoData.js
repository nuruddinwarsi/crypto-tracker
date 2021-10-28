import axios from 'axios';
import AppConfig from '@/config';

const { cryptoApi } = AppConfig;

const getCryptoData = async (coinName) => {
  const response = await axios.get(`${cryptoApi}/v3/coins/${coinName}`);
  return response.data;
};

export { getCryptoData };
