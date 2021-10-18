import axios from 'axios';
import AppConfig from '@/config';

const { apiBaseUrl } = AppConfig;

const getCrypto = async () => {
  const response = await axios.get(`${apiBaseUrl}/v3/coins/markets`, {
    params: {
      vs_currency: 'inr',
    },
  });
  return response.data;
};

export { getCrypto };
