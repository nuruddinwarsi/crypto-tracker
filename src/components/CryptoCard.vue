<template>
  <div class="crypto">
    <img :src="crypto.image" :alt="crypto.name" class="coin-image" />
    <div class="name">{{ crypto.name }}</div>
    <div class="price">{{ crypto.current_price }}</div>
    <div class="change">
      <span
        >₹
        {{
          Math.round((crypto.price_change_24h + Number.EPSILON) * 100) / 100
        }}</span
      >
      <span>{{ crypto.price_change_percentage_24h }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CryptoCard',
  props: {
    crypto: {
      type: Object,
      default: () => {},
    },
  },
  filter: {},
};
</script>

<style scoped>
.crypto {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  /* row-gap: 1000px; */
  /* grid-template-areas:
    'coin-image name price'
    'coin-image name change'; */
  padding: 16px 1px;
  border-bottom: 0.1px solid grey;
  font-size: 14px;
  align-items: center;
  text-decoration: none;
  color: #f9f9f9;
}

.name {
  grid-area: 'name';
}
.price {
  grid-area: 'price';
}
.change {
  display: grid;
  grid-area: 'change';
}

.coin-image {
  grid-area: 'coin-image';
  width: 35%;
}
</style>
