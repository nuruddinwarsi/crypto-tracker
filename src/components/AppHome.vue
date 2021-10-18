<template>
  <div>
    <h1>Homepage</h1>
  </div>
</template>

<script>
import { getCryptoList } from '@/services/getCryptoList';

export default {
  name: 'AppHome',

  data() {
    return {
      // getCryptoList API data
      vs_currency: 'inr', //price in specified currency
      order: 'market_cap_desc',
      per_page: '10', //list 10 cryptos
      price_change_percentage: '1h', //1h, 24h, 7d, 14d, 30d, 200d,comma seperated accepted
    };
  },
  methods: {
    async getCryptoList() {
      try {
        const data = await getCryptoList(
          this.vs_currency,
          this.order,
          this.per_page,
          this.price_change_percentage
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getCryptoList();
  },
};
</script>

<style scoped></style>
