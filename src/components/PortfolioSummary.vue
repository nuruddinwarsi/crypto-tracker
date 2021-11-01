<template>
  <div class="body-content">
    <PageHeader :header="`${coinId} Summary`" />
  </div>
</template>

<script>
import PageHeader from '@/components/utils/PageHeader';

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
};
</script>

<style scoped>
.body-content {
  grid-template-rows: 0.1fr 1fr;
}
</style>
