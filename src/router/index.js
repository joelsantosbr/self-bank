import Vue from 'vue';
import Router from 'vue-router';
import Default from '../containers/Default';

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: 'home',
  },
  {
    path: '/home',
    name: 'home',
    component: Default,
  },
];

const router = new Router({
  routes,
  mode: 'history',
  base: '/',
  linkActiveClass: 'active-section',
  linkExactActiveClass: 'current-section',
});

export default router;
