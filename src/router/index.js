// imported vue-router
import Router from 'vue-router';

// Import all pages/components
import AppHome from '@/components/AppHome';
import AppPortfolio from '@/components/AppPortfolio';
import AddToPortfolio from '@/components/AddToPortfolio';
import CryptoPage from '@/components/CryptoPage';
import SignUpForm from '@/components/SignUpForm';
import LoginForm from '@/components/LoginForm';
import PageNotFound from '@/components/PageNotFound';

import store from '@/stores';

const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'AppHome',
      path: '/',
      component: AppHome,
    },
    {
      name: 'SignUpForm',
      path: '/register',
      component: SignUpForm,
    },
    {
      name: 'LoginForm',
      path: '/login',
      component: LoginForm,
    },
    {
      name: 'AppPortfolio',
      path: '/portfolio',
      component: AppPortfolio,
    },
    {
      name: 'AddToPortfolio',
      path: '/alerts',
      component: AddToPortfolio,
    },

    // Dynamic route for individual cryptocurrency
    {
      name: 'CryptoPage',
      path: '/crypto/:coin/symbol/:symbol',
      component: CryptoPage,
      props: true,
    },
    {
      name: 'PageNotFound',
      path: '/*',
      component: PageNotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const allowedRoutes = ['AppHome', 'SignUpForm', 'LoginForm', 'CryptoPage'];
  if (!allowedRoutes.includes(to.name) && !store.getters.isAuthenticated) {
    next({
      name: 'LoginForm',
    });
  } else next();
});

export default router;
