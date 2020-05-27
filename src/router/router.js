import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';

// Install router
Vue.use(Router);

// New Router instance
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: true,
    },
    {
      path: '/characters/:pageName',
      name: 'characters',
      component: () => import('../views/Character.vue'),
      props: true,
    },
  ],
});
