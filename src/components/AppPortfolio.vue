<template>
  <div class="body-content">
    <PageHeader :header="`Portfolio`" />
    <div class="portfolio">
      <div v-for="(coinGroup, index) in coinData" :key="index">
        <CoinGroup :coinGroup="coinGroup" />
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/utils/PageHeader';
import { getPortfolio } from '@/services/getPortfolio';
import CoinGroup from '@/components/CoinGroup';

export default {
  name: 'AppPortfolio',
  components: {
    PageHeader,
    CoinGroup,
  },
  data() {
    return {
      portfolioData: '',
      i: 0,
      coinData: {},
    };
  },
  methods: {
    async callGetPortfolio() {
      try {
        const response = await getPortfolio();
        this.portfolioData = response.data;
        this.createPortfolioSummary(this.portfolioData);
      } catch (error) {
        console.log(error);
      }
    },
    createPortfolioSummary(portfolioData) {
      this.coinData = portfolioData.reduce(
        (acc, cur) => ({
          ...acc,
          [cur.coinId]: [...(acc[cur.coinId] || []), cur],
        }),
        {}
      );
      console.log(this.coinData);
    },
  },

  created() {
    this.callGetPortfolio();
  },
};
</script>

<style scoped>
.body-content {
  grid-template-columns: 1fr;
  grid-template-rows: 0.1fr 1fr;
}
</style>
