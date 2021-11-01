<template>
  <div class="body-content">
    <PageHeader :header="`${coinId} Summary`" />
    <div v-if="status === 'LOADING'">
      <div class="coin-div">
        <img class="rotate" src="../assets/btc_logo.png" alt="loading icon" />
      </div>
      <AppBanner :status="status" :message="message" />
    </div>
    <div v-else-if="status === 'LOADED'">
      <LineChart
        :chartLabels="chartLabels"
        :chartData="chartData"
        :coinId="coinId"
      />
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

export default {
  name: 'PortfolioSummary',
  components: {
    PageHeader,
    LineChart,
    AppBanner,
  },
  data() {
    return {
      coinId: this.$route.params.coinId,
      chartLabels: [],
      chartData: [],

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
        const data = await getPortfolioSummary(this.coinId);

        data.data.forEach((element) => {
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
  grid-template-rows: 0.1fr 1fr;
}
.coin-div {
  display: grid;
  justify-content: center;
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
</style>
