import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';

// Install router
Vue.use(Router);

// New Router instance
export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    console.log('To', to);
    console.log('From', from);
    console.log('savedPosition', savedPosition);
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: true,
    },
    {
      path: '/character/:pageName',
      name: 'character',
      component: () => import('../views/Character.vue'),
      props: true,
    },
  ],
});
