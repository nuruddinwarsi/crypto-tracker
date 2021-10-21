<template>
  <router-link class="crypto" :to="`/crypto/${crypto.id}`">
    <!-- :to="{ name: 'CryptoPage', params: { coin: key } }" -->
    <img :src="crypto.image" :alt="crypto.name" class="coin-image" />
    <div class="name">{{ crypto.name }}</div>
    <div class="price">₹ {{ crypto.current_price }}</div>
    <div class="change">
      <span class="changePrice" :class="priceStyle">
        ₹
        {{
          (priceChange =
            Math.round((crypto.price_change_24h + Number.EPSILON) * 100) / 100)
        }}</span
      >
      <span class="percentage" :class="percentageStyle"
        >{{
          Math.round(
            (crypto.price_change_percentage_24h + Number.EPSILON) * 100
          ) / 100
        }}%</span
      >
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'CryptoCard',
  data() {
    return {
      priceChange: 0,
    };
  },
  props: {
    crypto: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    percentageStyle() {
      return {
        percentagePositive: this.priceChange >= 0,
        percentageNegative: this.priceChange < 0,
      };
    },
    priceStyle() {
      return {
        pricePositive: this.priceChange >= 0,
        priceNegative: this.priceChange < 0,
      };
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

.changePrice {
  font-weight: 600;
}
.percentage {
  max-width: 78px;
  display: grid;
  justify-items: center;
  border-radius: 5px;
  font-weight: 700;
  margin-top: 14px;
}
.pricePositive {
  color: #00b061;
}
.priceNegative {
  color: #f0162f;
}
.percentagePositive {
  border: 0.5px solid #00351d;
  background-color: #00351d;
  color: #00b061;
}
.percentageNegative {
  border: 0.5px solid #48070e;
  background-color: #48070e;
  color: #f0162f;
}

/* background-color: #4f9320; */

@media only screen and (min-width: 500px) {
  .crypto {
    font-size: 16px;
  }
}
</style>
