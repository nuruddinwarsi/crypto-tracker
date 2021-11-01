<template>
  <div class="body-content">
    <PageHeader :header="`${coinId} Summary`" />
  </div>
</template>

<script>
import PageHeader from '@/components/utils/PageHeader';
import { getPortfolioSummary } from '@/services/getPortfolioSummary';

export default {
  name: 'PortfolioSummary',
  components: {
    PageHeader,
  },
  data() {
    return {
      coinId: this.$route.params.coinId,
    };
  },
  methods: {
    async portfolioSummaryCall() {
      try {
        const data = await getPortfolioSummary(this.coinId);
        console.log(data);
      } catch (error) {
        console.log(error);
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
</style>
