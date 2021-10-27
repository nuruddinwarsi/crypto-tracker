<template>
  <div class="body-content">
    <PageHeader :header="`CryptoTracker`" />
    <div v-if="status === 'LOADING'" class="crypto-data">
      <img class="rotate" src="../assets/btc_logo.png" alt="" />
      <div class="banner">
        <p>{{ message }}</p>
      </div>
    </div>
    <div class="crypto-data" v-if="status === 'LOADED'">
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
    <div v-if="status === 'ERROR'" class="crypto-data banner">
      {{ error }}
    </div>
  </div>
</template>

<script>
import { getCryptoList } from '@/services/getCryptoList';
import CryptoCard from '@/components/CryptoCard';
import PageHeader from '@/components/utils/PageHeader';

export default {
  name: 'AppHome',
  components: {
    CryptoCard,
    PageHeader,
  },
  data() {
    return {
      // getCryptoList API data
      vs_currency: 'inr', //price in specified currency
      order: 'market_cap_desc',
      per_page: '10', //list 10 cryptos
      price_change_percentage: '1h', //1h, 24h, 7d, 14d, 30d, 200d,comma seperated accepted

      cryptoList: [],

      // AppSpinner data
      status: 'LOADING',
      error: null,
      message: 'FETCHING LIST ... ',
    };
  },

  methods: {
    async getCryptoList() {
      try {
        this.status = 'LOADING';
        const data = await getCryptoList(
          this.vs_currency,
          this.order,
          this.per_page,
          this.price_change_percentage
        );
        this.cryptoList = data;
        this.status = 'LOADED';
        // console.log(data);
      } catch (error) {
        this.error = error;
        this.status = 'ERROR';
        // console.log(error);
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
.rotate {
  width: 50%;
  place-self: center;
  animation: rotation 5s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
.banner {
  margin: 0.5rem;
  padding: 1rem;
  background-color: #666666;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(108, 104, 108, 0.5);
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
