<template>
  <div class="body-content">
    <!-- <PageHeader :header="`CryptoTracker`" /> -->
    <div class="coin-data" v-if="status === `LOADING`">
      <AppBanner :status="status" :message="message" />
    </div>

    <!-- Complete info like name,image, price, market cap etc -->
    <div class="coin-data" v-else-if="status === `LOADED`">
      <!-- Name,image, url, github link -->
      <div class="coin-info">
        <div class="coin-name">
          <img :src="coinData.image.small" :alt="coinId" class="image" />
          <div class="name">{{ coinName.toUpperCase() }}</div>
          <div class="id">{{ coinId.toUpperCase() }}</div>
        </div>
        <div class="rank">COIN RANK : #{{ coinData.market_cap_rank }}</div>
        <div class="coin-url">
          <div class="homepage ">
            <a :href="coinData.links.homepage[0]" class="link">
              <font-awesome-icon :icon="['fa', 'link']" class="icon" />{{
                coinName
              }}</a
            >
          </div>
          <div class="reddit ">
            <a :href="coinData.links.subreddit_url" class="link">
              <font-awesome-icon
                :icon="['fab', 'reddit']"
                class="icon"
              />reddit</a
            >
          </div>
          <div class="github ">
            <a :href="coinData.links.repos_url.github[0]" class="link">
              <font-awesome-icon
                :icon="['fab', 'github']"
                class="icon"
              />github</a
            >
          </div>
        </div>
      </div>
      <!-- current price, %age increase/decrease, fully_diluted_valuation, total_volume -->
      <div class="coin-price">
        <div class="price-data">
          <div class="current-price">
            ₹{{
              (currentPrice = coinData.market_data.current_price.inr.toFixed(2))
            }}
          </div>
          <div class="change">
            <div class="price-change" :class="priceStyle">
              ₹{{
                (priceChange = coinData.market_data.price_change_24h_in_currency.inr.toFixed(
                  2
                ))
              }}
            </div>
            <div class="pct-change" :class="percentageStyle">
              {{
                (pctChange = coinData.market_data.price_change_percentage_24h_in_currency.inr.toFixed(
                  2
                ))
              }}%
            </div>
          </div>
        </div>

        <div class="market-data" v-if="showStats">
          <div class="market-cap md">
            <div class="title">Market Cap</div>
            <div class="value">₹{{ coinData.market_data.market_cap.inr }}</div>
          </div>
          <div class="diluted-cap md">
            <div class="title">Fully diluted valuation</div>
            <div class="value">
              ₹{{ coinData.market_data.fully_diluted_valuation.inr }}
            </div>
          </div>
          <div class="market-volume md">
            <div class="title">Total Volume</div>
            <div class="value">
              {{ coinData.market_data.total_volume.inr }}
            </div>
          </div>
        </div>
      </div>
      <div class="toggle-stats">
        <button @click="toggleStats()" class="submit">
          <span v-if="showStats">Hide</span>
          <span v-else-if="!showStats">Show</span>
          Stats
        </button>
      </div>
    </div>
    <div class="coin-data" v-else-if="status === `ERROR`">
      <AppBanner :status="status" :message="message" />
    </div>
    <!-- Candlestick chart -->
    <div class="candlestick">
      <VueTradingView
        :options="{
          symbol: `COINBASE:${coinId.toUpperCase()}USD`,
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
// import PageHeader from '@/components/utils/PageHeader';
import { getCryptoData } from '@/services/getCryptoData';
import AppBanner from '@/components/utils/AppBanner';

export default {
  name: 'CryptoPage',
  components: {
    VueTradingView,
    // PageHeader,
    AppBanner,
  },
  data() {
    return {
      coinName: this.$route.params.coin,
      coinId: this.$route.params.symbol,

      coinData: {},
      currentPrice: 0,
      priceChange: 0,
      pctChange: 0,
      showStats: false,

      // AppSpinner data
      status: 'LOADING',
      error: null,
      message: 'FETCHING LIST ... ',
    };
  },
  methods: {
    async callGetCryptoData() {
      try {
        this.status = 'LOADING';
        this.message = 'FETCHING PRICES ...';

        const data = await getCryptoData(this.coinName);
        this.coinData = data;
        this.message = 'DATA FETCHED';
        this.status = 'LOADED';
      } catch (error) {
        this.error = error;
        this.message = 'CANNOT FETCH THE DATA';
        this.status = 'ERROR';
      }
    },
    toggleStats() {
      this.showStats = !this.showStats;
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
  created() {
    this.callGetCryptoData();
  },
};
</script>

<style scoped>
.body-content {
  display: grid;
  grid-template-rows: 0.1fr 1fr;
}

.coin-data {
  grid-area: 'coin-data';
  display: grid;
  margin: 8px;
  border-radius: 5px;
  gap: 10px;
}

.coin-info {
  grid-area: 'coin-info';
  display: grid;
  grid-template-columns: 1fr;
  border-bottom: 2px solid #202020;
  padding: 8px;
}
.coin-name {
  grid-area: 'coin-name';
  display: grid;
  grid-auto-flow: column;
  gap: 5px;
}
.image {
  justify-self: end;
  align-self: center;
}
.name {
  font-size: 28px;
  justify-self: center;
  align-self: center;
}
.id {
  font-size: 14px;
  background: #202020;
  padding: 8px;
  border-radius: 5px;
  justify-self: center;
  align-self: center;
}
.rank {
  font-size: 14px;
  place-self: center;
  background: #202020;
  padding: 8px;
  border-radius: 5px;
}
.coin-url {
  display: grid;
  align-items: center;
  font-size: 14px;
  row-gap: 10px;
}

.link {
  text-decoration: none;
  color: white;
  background: #202020;
  padding: 2px;
  border-radius: 5px;
}
.icon {
  margin-right: 2px;
}
.coin-price {
  display: grid;
  grid-template-columns: 1fr;
}
.price-data {
  display: grid;
  grid-template-columns: 0.4fr 0.4fr 1fr;
  gap: 10px;
  border-bottom: none;
}

.current-price {
  font-size: 32px;
  grid-area: 'current-price';
  /* align-self: stretch; */
}
.change {
  font-size: 14px;
  place-self: start center;
}
.price-change {
  grid-area: 'price-change';
  font-weight: 600;
  margin-bottom: 5px;
}
.pct-change {
  grid-area: 'pct-change';
  font-weight: 700;
  border-radius: 5px;
  text-align: center;
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
.market-data {
  display: grid;
  gap: 5px;
}
.md {
  display: grid;
}
.title {
  font-size: 12px;
}
.value {
  font-size: 16px;
}
.submit {
  background-color: #08d;
  border-radius: 5px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  text-align: center;
  width: 120px;
  padding: 8px;
}
.candlestick {
  margin: 16px 0;
}

@media only screen and (min-width: 768px) {
  .coin-data {
    grid-auto-flow: column;
    grid-template-rows: 1fr;
    grid-template-columns: 0.4fr 1fr;
  }

  .coin-info {
    border-bottom: none;
    border-right: 2px solid #202020;
  }
  .coin-price {
    grid-template-rows: 0.5fr 1fr;
  }

  .current-price {
    font-size: 42px;
  }
  .price-data {
    border-bottom: 2px solid #202020;
  }
  .market-data {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(3, 1fr);
  }
  .md {
    border-right: 2px solid #202020;
    place-items: center;
  }
  .title {
    font-size: 16px;
  }
  .value {
    font-size: 18px;
  }
}
@media only screen and (min-width: 1100px) {
  .value {
    font-size: 25px;
  }
}
</style>
