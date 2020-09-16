import data from './../mixins/data.js';

import Vue from 'vue';
import Router from 'vue-router';
import Home from './../views/Home.vue';

// Install router
Vue.use(Router);

// New Router instance
export default new Router({
  mode: 'history',
  routes: [
    {
      path: data.routerRoutes.home.path,
      name: data.routerRoutes.home.name,
      component: Home,
      props: true
    },
    {
      path: data.routerRoutes.character.path,
      name: data.routerRoutes.character.name,
      component: () => import(/* webpackChunkName: "character" */ './../views/Character.vue'),
      props: true
    },
    {
      path: data.routerRoutes.fourZeroFour.path,
      name: data.routerRoutes.fourZeroFour.path,
      component: () => import(/* webpackChunkName: "character" */ './../views/404.vue'),
      props: false
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
});
