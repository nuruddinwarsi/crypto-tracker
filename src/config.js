const AppConfig = {
  cryptoApi: process.env.VUE_APP_CRYPTO_API,
  // apiBaseUrl: 'https://crypt0-portfolio-tracker.herokuapp.com/api',
  apiBaseUrl: process.env.VUE_APP_LOCAL_URL,
};

export default AppConfig;
