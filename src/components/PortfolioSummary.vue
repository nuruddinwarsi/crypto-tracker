<template>
  <div class="body-content">
    <PageHeader :header="`${coinId} Summary`" />
    <div v-if="status === 'LOADING'">
      <AppBanner :status="status" :message="message" />
    </div>
    <div v-else-if="status === 'LOADED'" class="user-data">
      <LineChart
        :chartLabels="chartLabels"
        :chartData="chartData"
        :coinId="coinId"
        class="line-chart"
      />
      <SummaryTable
        :coinData="coinData"
        @deleteEntry="deletePurchase($event)"
      />
    </div>
    <div v-else-if="status === 'ERROR'">
      <AppBanner :status="status" :message="message" />
    </div>
  </div>
</template>

<script>
import { getPortfolioSummary } from '@/services/getPortfolioSummary';
import { deletePurchase } from '@/services/deletePurchase';
import PageHeader from '@/components/utils/PageHeader';
import LineChart from '@/components/utils/LineChart';
import AppBanner from '@/components/utils/AppBanner';
import SummaryTable from '@/components/SummaryTable';

export default {
  name: 'PortfolioSummary',
  components: {
    PageHeader,
    LineChart,
    AppBanner,
    SummaryTable,
  },
  data() {
    return {
      coinId: this.$route.params.coinId,
      chartLabels: [],
      chartData: [],

      coinData: [],

      // AppBanner data
      status: 'LOADING',
      error: null,
      message: 'FETCHING DATA ... ',

      isBannerVisible: false,
    };
  },
  methods: {
    closeBanner() {
      this.isBannerVisible = false;
    },
    async portfolioSummaryCall() {
      try {
        this.status = 'LOADING';
        this.message = 'FETCHING PRICES ...';

        const response = await getPortfolioSummary(this.coinId);

        if (response.status === false) {
          this.status = 'ERROR';
          this.message = response.message;
          this.isBannerVisible = true;
        } else {
          this.isBannerVisible = false;
          this.coinData = response.data;
          response.data.forEach((element) => {
            this.chartLabels.push(element.date.slice(0, 10));
            this.chartData.push(element.amount);
          });
          this.message = 'DATA FETCHED';
          this.status = 'LOADED';
        }
      } catch (error) {
        this.error = error;
        this.message = 'Cannot fetch data, Please try again';
        this.status = 'ERROR';
      }
    },

    async deletePurchase(id) {
      try {
        this.status = 'LOADING';
        this.message = 'FETCHING PRICES ...';

        const response = await deletePurchase(id);

        if (response.status === false) {
          this.status = 'ERROR';
          this.message = response.message;
          this.isBannerVisible = true;
        } else {
          this.isBannerVisible = false;
          this.portfolioSummaryCall();
          this.message = 'DATA FETCHED';
          this.status = 'LOADED';
        }
      } catch (error) {
        this.isBannerVisible = true;

        this.status = 'ERROR';
        this.error = error;
        this.message = `Couldn't delete. Please try again`;
      }
    },
  },
  created() {
    this.portfolioSummaryCall();
  },
  mounted() {},
};
</script>

<style scoped>
.body-content {
  grid-template-rows: 0.05fr 1fr;
}

.user-data {
  width: 80%;
  margin: 0 8px;
  /*   display: grid;
  grid-template-rows: repeat(2, 1fr);
 */
}

@media only screen and (min-width: 500px) {
  .user-data {
    width: 95%;
  }
}
</style>
