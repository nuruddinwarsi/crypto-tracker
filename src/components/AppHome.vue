<template>
  <div class="body-content">
    <PageHeader :header="`CryptoTracker`" />
    <div v-if="status === 'LOADING'">
      <div class="crypto-data">
        <img class="rotate" src="../assets/btc_logo.png" alt="loading icon" />
      </div>
      <AppBanner :status="status" :message="message" />
    </div>
    <div class="crypto-data" v-else-if="status === 'LOADED'">
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
    <div v-else-if="status === 'ERROR'">
      <!-- <div class="crypto-data">
        <img class="rotate" src="../assets/btc_logo.png" alt="loading icon" />
      </div> -->
      <AppBanner :status="status" :message="message" />
    </div>
  </div>
</template>

<script>
import { getCryptoList } from '@/services/getCryptoList';
import CryptoCard from '@/components/CryptoCard';
import PageHeader from '@/components/utils/PageHeader';
import AppBanner from '@/components/utils/AppBanner';

export default {
  name: 'AppHome',
  components: {
    CryptoCard,
    PageHeader,
    AppBanner,
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
        this.message = 'FETCHING PRICES ...';
        const data = await getCryptoList(
          this.vs_currency,
          this.order,
          this.per_page,
          this.price_change_percentage
        );
        this.cryptoList = data;
        this.message = 'DATA FETCHED';
        this.status = 'LOADED';
      } catch (error) {
        this.error = error;
        this.message = 'Cannot fetch prices, Please try again';
        this.status = 'ERROR';
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
.body-content {
  grid-template-columns: 1fr;
  grid-template-rows: 0.1fr 1fr;
}

.rotate {
  width: 50%;
  place-self: center;
  animation: rotation 5s infinite linear;
}

@-webkit-keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
@-moz-keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
@-o-keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
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
  margin: 10px;
}
</style>
