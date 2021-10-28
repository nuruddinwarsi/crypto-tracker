<template>
  <div class="coin-group">
    <div class="coin-header" @click="toggleDropDown()">
      <img :src="coinSummary.imageUrl" class="coin-image" />
      <p class="coin-name">
        {{ coinSummary.coinName.toUpperCase() }}
      </p>
    </div>
    <div class="coin-body" v-if="showDescription">
      <div class="coin-div quantity">
        <span class="title">Purchased</span>
        <span class="value">{{ coinSummary.quantity }}</span>
      </div>
      <div class="coin-div amount-spent">
        <span class="title">Amount Spent</span>
        <span class="value">₹{{ coinSummary.amountSpent }}</span>
      </div>
      <div class="coin-div current-price">
        <span class="title">Current Price</span>
        <span class="value">₹{{ currentPrice }}</span>
      </div>
      <div class="coin-div current-holdings">
        <span class="title">Holdings</span>
        <span class="value">₹{{ coinSummary.currentHoldings }}</span>
      </div>
      <div class="coin-div net-profit">
        <span class="title">Net-Profit</span>
        <span class="value">₹{{ coinSummary.netProfit }}</span>
      </div>
      <div class="coin-div percent-change">
        <span class="title">% Change</span>
        <span class="value">{{ coinSummary.percentChange }}%</span>
      </div>

      <button class="summary">
        <span>Summary</span>
      </button>
    </div>
  </div>
</template>

<script>
import { getCryptoData } from '@/services/getCryptoData';

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
      coinSummary: {
        coinId: '', //eg:eth/btc/ada
        coinName: '', //eg: ethereum/bitcoin/cardano
        quantity: 0, //no of coins purchased
        amountSpent: 0, //total amount spent
        currentHoldings: 0,
        netProfit: 0, //total profit/loss incurred
        percentChange: 0, //percentage change in profit/loss incurred
        imageUrl: '',
      },
      currentPrice: 0, //current cryptocurrency price
    };
  },
  methods: {
    toggleDropDown() {
      this.showDescription = !this.showDescription;
    },

    async callGetCryptoData() {
      // Coin id and name
      this.coinSummary.coinId = this.coinGroup[0].coinId;
      this.coinSummary.coinName = this.coinGroup[0].coinName;

      let data = await getCryptoData(this.coinSummary.coinName);
      this.currentPrice = data.market_data.current_price.inr;

      this.coinSummary.imageUrl = data.image.thumb;

      // total coin qty purchased
      this.coinSummary.quantity = this.coinGroup
        .reduce((acc = 0, curr) => {
          return acc + curr.quantity;
        }, 0)
        .toFixed(5);

      // Total purchase amount
      this.coinSummary.amountSpent = this.coinGroup
        .reduce((acc = 0, curr) => {
          return acc + curr.amount;
        }, 0)
        .toFixed(2);

      //Current holdings - total amount in portfolio based on current price
      this.coinSummary.currentHoldings = (
        this.coinSummary.quantity * this.currentPrice
      ).toFixed(2);

      // total profit/loss incurred
      this.coinSummary.netProfit = (
        this.coinSummary.currentHoldings - this.coinSummary.amountSpent
      ).toFixed(2);

      // Amount spent per #coins purchased
      const costBasis = (
        this.coinSummary.amountSpent / this.coinSummary.quantity
      ).toFixed(2);

      // percentage change in profit/loss incurred
      this.coinSummary.percentChange = (
        (this.currentPrice - costBasis) /
        costBasis
      ).toFixed(2);
    },
  },
  created() {
    this.callGetCryptoData();
  },
};
</script>
<style scoped>
.coin-group {
  border: 1px solid rgb(223, 223, 223);
  border-radius: 5px;
  padding: 16px;
  margin: 12px;
}
.coin-header {
  border-radius: 5px;
  padding: 16px;
  background: linear-gradient(90deg, #fbc2eb, #a6c1ee 51%, #fbc2eb) var(--x, 0) /
    200%;
  color: white;
  margin-bottom: 8px;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 0.1fr 1fr;
  justify-items: center;
  place-items: center;
}

.coin-div {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(2, 1fr);
  margin: 8px;
}

.coin-div .value {
  justify-self: end;
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
