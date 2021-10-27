<template>
  <div class="body-content">
    <PageHeader :header="`Portfolio`" />
  </div>
</template>

<script>
import PageHeader from '@/components/utils/PageHeader';
import { getPortfolio } from '@/services/getPortfolio';

export default {
  name: 'AppPortfolio',
  components: {
    PageHeader,
  },
  methods: {
    async callGetPortfolio() {
      try {
        const data = await getPortfolio();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.callGetPortfolio();
  },
};
</script>

<style scoped></style>
