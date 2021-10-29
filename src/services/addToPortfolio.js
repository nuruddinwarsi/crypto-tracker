import axios from 'axios';
import AppConfig from '@/config';
import Vue from 'vue';

const { apiBaseUrl } = AppConfig;

const jwtToken = Vue.$cookies.get('jwt');
const config = {
  headers: {
    Authorization: jwtToken,
  },
};
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
    config
  );
  return response.data;
};

export { addToPortfolio };
