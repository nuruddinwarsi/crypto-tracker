import axios from 'axios';
import AppConfig from '@/config';

const { apiBaseUrl } = AppConfig;

const addToPortfolio = async (
  coinId,
  coinName,
  quantity,
  amount,
  boughtAt,
  boughtFrom,
  inputDate
) => {
  const response = await axios.post(
    `${apiBaseUrl}/v1/addToPortfolio`,
    {
      coinId: coinId,
      coinName: coinName,
      quantity: quantity,
      amount: amount,
      boughtAt: boughtAt,
      boughtFrom: boughtFrom,
      date: inputDate,
    },
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export { addToPortfolio };
