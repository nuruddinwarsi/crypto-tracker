// All dependencies imported in init
import './init';

import Vue from 'vue';
import App from './App.vue';

import router from './router';

Vue.config.productionTip = true;

import store from '@/stores';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
