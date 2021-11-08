// Import all dependencies here

import './plugins';

import Vue from 'vue';
import 'normalize.css';
import '@/services/configureAxios';
import VueApexCharts from 'vue-apexcharts';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faUser,
  faBell,
  faLink,
  faPlusSquare,
} from '@fortawesome/free-solid-svg-icons';
import {
  faBitcoin,
  faReddit,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueScreen from 'vue-screen';

Vue.use(VueApexCharts);
Vue.component('apexchart', VueApexCharts);

library.add(
  faHome,
  faUser,
  faBitcoin,
  faBell,
  faLink,
  faReddit,
  faGithub,
  faPlusSquare
);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueScreen);
