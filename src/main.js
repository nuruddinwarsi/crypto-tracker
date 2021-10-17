// All dependencies imported in init
import './init';

import Vue from 'vue';
import App from './App.vue';

import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
