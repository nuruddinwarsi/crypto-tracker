<template>
  <div class="coinGroup">
    <div v-for="(coin, index) in coinGroup" :key="index">
      {{ coin }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoinGroup',
  props: {
    coinGroup: {
      type: Array,
    },
  },
};
</script>
<style scoped>
.coinGroup {
  border: 1px solid red;
}
</style>
