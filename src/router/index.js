// imported vue-router
import Router from 'vue-router';

// Import all pages/components
import AppHome from '@/components/AppHome';
import AppPortfolio from '@/components/AppPortfolio';
import AppAlerts from '@/components/AppAlerts';
import CryptoPage from '@/components/CryptoPage';
import SignUpForm from '@/components/SignUpForm';

const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'AppHome',
      path: '/',
      component: AppHome,
    },
    {
      name: 'AppPortfolio',
      path: '/portfolio',
      component: AppPortfolio,
    },
    {
      name: 'SignUpForm',
      path: '/register',
      component: SignUpForm,
    },
    {
      name: 'AppAlerts',
      path: '/alerts',
      component: AppAlerts,
    },

    // Dynamic route for individual cryptocurrency
    {
      name: 'CryptoPage',
      path: '/crypto/:coin/symbol/:symbol',
      component: CryptoPage,
      props: true,
    },
  ],
});

export default router;
