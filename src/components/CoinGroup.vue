<template>
  <div class="coin-group">
    <div class="coin-header" @click="toggleDropDown()">
      <div class="coin-name">ETH</div>
    </div>
    <div class="coin-body" v-if="showDescription">
      <div class="coin-div coins-purchased">
        <span class="title">Purchased</span>
        <span class="value">0.0652</span>
      </div>
      <div class="coin-div amount-spent">
        <span class="title">Amount Spent</span>
        <span class="value">₹16,653.00</span>
      </div>
      <div class="coin-div cost-basis">
        <span class="title">Cost Basis</span>
        <span class="value">₹255,414.11</span>
      </div>
      <div class="coin-div current-price">
        <span class="title">Current Price</span>
        <span class="value">₹299,992.70</span>
      </div>
      <div class="coin-div percent-change">
        <span class="title">% Change</span>
        <span class="value">17.45%</span>
      </div>
      <div class="coin-div current-holdings">
        <span class="title">Holdings</span>
        <span class="value">₹19,559.52</span>
      </div>
      <div class="coin-div net-profit">
        <span class="title">Net-Profit</span>
        <span class="value">₹2,906.52</span>
      </div>
      <button class="summary">
        <span>Summary</span>
      </button>
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
  data() {
    return {
      coinData: [],
      showDescription: false,
    };
  },
  methods: {
    toggleDropDown() {
      this.showDescription = !this.showDescription;
    },
  },
  created() {
    this.coinData = this.coinGroup;
  },
};
</script>
<style scoped>
.coin-group {
  margin: 12px;
}
.coin-header {
  border-radius: 5px;
  padding: 16px;
  background: linear-gradient(90deg, #fbc2eb, #a6c1ee 51%, #fbc2eb) var(--x, 0) /
    200%;
  color: white;
  margin-bottom: 8px;
  text-align: center;
}

.coin-div {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  align-content: space-around;
  margin: 8px;
}
.summary {
  border-radius: 5px;
  background: linear-gradient(90deg, #a1c4fd, #c2e9fb 51%, #a1c4fd) var(--x, 0) /
    200%;
  border: none;
  color: #ffffff;
  text-align: center;
  padding: 10px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 2px;
}

.summary span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.summary span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.summary:hover span {
  padding-right: 25px;
}

.summary:hover span:after {
  opacity: 1;
  right: 0;
}
</style>
