// Import all dependencies here
import Vue from 'vue';
import 'normalize.css';

import Router from 'vue-router';
Vue.use(Router);

import VueCookies from 'vue-cookies';
Vue.use(VueCookies);

import Vuex from 'vuex';
Vue.use(Vuex);

import VueApexCharts from 'vue-apexcharts';
Vue.use(VueApexCharts);
Vue.component('apexchart', VueApexCharts);

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faUser,
  faBell,
  faLink,
} from '@fortawesome/free-solid-svg-icons';
import {
  faBitcoin,
  faReddit,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faHome, faUser, faBitcoin, faBell, faLink, faReddit, faGithub);

Vue.component('font-awesome-icon', FontAwesomeIcon);

import VueScreen from 'vue-screen';
Vue.use(VueScreen);
