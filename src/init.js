// Import all dependencies here
import Vue from 'vue';
import 'normalize.css';

import Router from 'vue-router';
Vue.use(Router);

import VueApexCharts from 'vue-apexcharts';
Vue.use(VueApexCharts);
Vue.component('apexchart', VueApexCharts);

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faUser, faBell } from '@fortawesome/free-solid-svg-icons';
import { faBitbucket } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faHome, faUser, faBitbucket, faBell);

Vue.component('font-awesome-icon', FontAwesomeIcon);
