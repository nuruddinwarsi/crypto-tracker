<template>
  <div class="body-content">
    <PageHeader :header="`Portfolio`" />

    <div v-if="status === 'LOADING'">
      <AppBanner :status="status" :message="message" />
    </div>

    <div class="portfolio" v-if="status === 'LOADED'">
      <div v-for="(coinGroup, index) in coinData" :key="index">
        <CoinGroup :coinGroup="coinGroup" />
      </div>
    </div>

    <div v-if="status === 'ERROR'">
      <AppBanner
        :status="status"
        :message="message"
        v-show="isBannerVisible"
        @close="closeBanner"
      />
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/utils/PageHeader';
import { getPortfolio } from '@/services/getPortfolio';
import CoinGroup from '@/components/CoinGroup';
import AppBanner from '@/components/utils/AppBanner';

export default {
  name: 'AppPortfolio',
  components: {
    PageHeader,
    CoinGroup,
    AppBanner,
  },
  data() {
    return {
      portfolioData: '',
      coinData: {},

      // AppSpinner data
      status: 'LOADING',
      error: null,
      message: 'FETCHING LIST ... ',

      isBannerVisible: false,
    };
  },
  methods: {
    closeBanner() {
      this.isBannerVisible = false;
    },
    async callGetPortfolio() {
      try {
        this.status = 'LOADING';
        this.message = 'FETCHING PRICES ...';

        const response = await getPortfolio();
        if (response.status === false) {
          this.status = 'ERROR';
          this.message = response.message;
          this.isBannerVisible = true;
        } else {
          this.isBannerVisible = false;
          this.portfolioData = response.data;
          this.createPortfolioSummary(this.portfolioData);
          this.message = 'DATA FETCHED';
          this.status = 'LOADED';
        }
      } catch (error) {
        this.isBannerVisible = true;
        this.status = 'ERROR';
        this.error = error;
        this.message = 'CANNOT FETCH YOUR PORTFOLIO';
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

.portfolio {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr;
  max-height: 250px;
}

@media only screen and (min-width: 700px) {
  .portfolio {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media only screen and (min-width: 1100px) {
  .portfolio {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
