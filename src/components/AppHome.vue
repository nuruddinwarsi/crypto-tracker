<template>
  <div class="body-content">
    <div class="header">
      <h2>CryptoTracker</h2>
    </div>
    <div v-for="crypto in cryptoList" :key="crypto.id">
      <img :src="crypto.image" :alt="crypto.name" class="coin-image" />
      <span>{{ crypto.name }}</span>
      <span> : INR {{ crypto.current_price }}</span>
      <span> : {{ crypto.price_change_percentage_24h }}%</span>
    </div>
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

      cryptoList: [],
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
        this.cryptoList = data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    // Call API on page load
    // this.getCryptoList();
  },
};
</script>

<style scoped>
.header {
  display: grid;
  justify-content: center;
}

.coin-image {
  width: 10%;
}
</style>
