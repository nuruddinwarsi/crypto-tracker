import axios from 'axios';
import AppConfig from '@/config';

const { cryptoApi } = AppConfig;

const getCryptoList = async (
  vs_currency,
  order,
  per_page,
  price_change_percentage
) => {
  const response = await axios.get(`${cryptoApi}/v3/coins/markets`, {
    params: {
      vs_currency: vs_currency,
      order: order,
      per_page: per_page,
      price_change_percentage: price_change_percentage,
    },
  });
  return response.data;
};

export { getCryptoList };
