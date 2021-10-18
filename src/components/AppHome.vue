<template>
  <div>
    <h1>Homepage</h1>
  </div>
</template>

<script>
import { getCryptoList } from '@/services/getCryptoList';

export default {
  name: 'AppHome',
  methods: {
    async getCryptoList() {
      try {
        const data = await getCryptoList();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getCryptoList();
  },
};
</script>

<style scoped></style>
