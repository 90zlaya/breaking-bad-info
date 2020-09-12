import { routerRoutes } from './../mixins/data.js';

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
      path: routerRoutes.home.path,
      name: routerRoutes.home.name,
      component: Home,
      props: true
    },
    {
      path: routerRoutes.character.path,
      name: routerRoutes.character.name,
      component: () => import(/* webpackChunkName: "character" */ './../views/Character.vue'),
      props: true
    }
  ]
});
