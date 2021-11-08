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
      <SummaryTable :coinData="coinData" />
    </div>
    <div v-else-if="status === 'ERROR'">
      <AppBanner :status="status" :message="message" />
    </div>
  </div>
</template>

<script>
import { getPortfolioSummary } from '@/services/getPortfolioSummary';
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
      // AppSpinner data
      status: 'LOADING',
      error: null,
      message: 'FETCHING DATA ... ',
    };
  },
  methods: {
    async portfolioSummaryCall() {
      try {
        this.status = 'LOADING';
        this.message = 'FETCHING PRICES ...';
        const response = await getPortfolioSummary(this.coinId);

        this.coinData = response.data;
        console.log(response);
        response.data.forEach((element) => {
          this.chartLabels.push(element.date.slice(0, 10));
          this.chartData.push(element.amount);
        });
        this.message = 'DATA FETCHED';
        this.status = 'LOADED';
      } catch (error) {
        this.error = error;
        this.message = 'Cannot fetch data, Please try again';
        this.status = 'ERROR';
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
