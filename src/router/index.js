// imported vue-router
import Router from 'vue-router';

// Import all pages/components
import AppHome from '@/components/AppHome';
import AppPortfolio from '@/components/AppPortfolio';
import AppAlerts from '@/components/AppAlerts';

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
      name: 'AppAlerts',
      path: '/alerts',
      component: AppAlerts,
    },
  ],
});

export default router;
