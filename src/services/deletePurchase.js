import axios from 'axios';
import AppConfig from '@/config';

const { apiBaseUrl } = AppConfig;

const deletePurchase = async (id) => {
  const response = await axios.patch(
    `${apiBaseUrl}/v1/removeFromPortfolio/${id}`,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export { deletePurchase };
