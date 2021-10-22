<template>
  <div class="body-content">
    <div class="page-title">
      <h2>
        {{ $route.params.coin.toUpperCase() }} /
        {{ $route.params.symbol.toUpperCase() }}
      </h2>
    </div>
    <div class="price-data">
      <div class="current-price">₹ 123</div>
      <div class="change">
        <div class="price-change">₹ 12</div>
        <div class="percentage-change">10 %</div>
      </div>
    </div>
    <div class="candlestick">
      <VueTradingView
        :options="{
          symbol: `COINBASE:${$route.params.symbol.toUpperCase()}USD`,
          theme: 'dark',
          interval: '240',
          autosize: true,
          height: '100%',
          timezone: 'Asia/Kolkata',
        }"
      />
    </div>
  </div>
</template>

<script>
// import VueApexCharts from 'vue-apexcharts';
import VueTradingView from 'vue-trading-view';

export default {
  name: 'CryptoPage',
  components: {
    VueTradingView,
  },
};
</script>

<style scoped>
.body-content {
  grid-area: body;
  overflow-y: scroll;
  margin: 0 8px;
  display: grid;
  grid-template-rows: 0.1fr 0.1fr 1fr; /* justify-items: center; */
}
.page-title {
  /* justify-content: center; */
  /* margin-bottom: 5rem; */
  grid-area: 'page-title';
  place-self: center;
  color: white;
}
.price-data {
  display: grid;
  grid-template-columns: repeat(2, 0.5fr);
}
.current-price {
  color: #00b061;
  font-size: 32px;
  grid-area: 'current-price';
}
.change {
  color: #00b061;
  display: grid;
  justify-items: end;
  padding-right: 8px;
  grid-area: 'change';
}

.candlestick {
  margin: 1rem 0;
}

@media only screen and (min-width: 500px) {
  /* .crypto {
    font-size: 16px;
  } */
  /* .body-content {
    justify-items: start;
    grid-template-areas: 'page-title current-price';
  } */
}
</style>
