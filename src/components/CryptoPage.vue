<template>
  <div class="body-content">
    <div class="page-title">
      <h2>{{ $route.params.coin.toUpperCase() }}</h2>
    </div>
    <div class="price-data">
      <div class="current-price">₹ 123</div>
      <div class="change">
        <div class="price-change">₹ 12</div>
        <div class="percentage-change">10 %</div>
      </div>
    </div>
    <div class="candlestick"></div>
  </div>
</template>

<script>
export default {
  name: 'CryptoPage',
};
</script>

<style scoped>
.body-content {
  grid-area: body;
  color: white;
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
