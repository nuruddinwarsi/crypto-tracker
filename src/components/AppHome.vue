<template>
  <div>
    <h1>Homepage</h1>
  </div>
</template>

<script>
import { getCrypto } from '@/services/getCryptos';

export default {
  name: 'AppHome',
  methods: {
    async getCryptos() {
      try {
        const data = await getCrypto();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getCryptos();
  },
};
</script>

<style scoped></style>
