<template>
  <div class="body-content">
    <div class="page-title">
      <h2>CryptoTracker</h2>
    </div>
    <div class="crypto-data">
      <div class="column-header">
        <div></div>
        <div>Coin</div>
        <div>Price</div>
        <div>Change</div>
      </div>
      <div v-for="crypto in cryptoList" :key="crypto.id">
        <CryptoCard :crypto="crypto" :key="crypto.id" />
      </div>
    </div>
  </div>
</template>

<script>
import { getCryptoList } from '@/services/getCryptoList';
import CryptoCard from '@/components/CryptoCard';

export default {
  name: 'AppHome',
  components: {
    CryptoCard,
  },
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
    this.getCryptoList();
  },
};
</script>

<style scoped>
/* From App.vue */
.body-content {
  grid-area: body;
  color: white;
  overflow-y: scroll;
}

.page-title {
  display: grid;
  justify-content: center;
  margin-bottom: 5rem;
}
.crypto-data {
  display: grid;
  justify-content: center;
}
.column-header {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.crypto-list {
  /* display: grid; */
  margin: 10px;
}
/* .coin-image {
  width: 50px;
} */
</style>
