import data from './../mixins/data.js';
import pages from './../mixins/pages.js';

import Vue from 'vue';
import Router from 'vue-router';
import HomeView from './../views/HomeView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: data.routerRoutes.home.path,
      name: data.routerRoutes.home.name,
      component: HomeView
    },
    {
      path: data.routerRoutes.pageNotFound.path,
      name: data.routerRoutes.pageNotFound.path,
      component: () => import(/* webpackChunkName: "page-not-found" */ './../views/PageNotFoundView.vue'),
      beforeEnter: (to, from, next) => {
        // Overwrite path if redirected
        if (to.redirectedFrom) {
          window.location.href = data.routerRoutes.pageNotFound.path;
        } else {
          next();
        }
      }
    },
    {
      path: data.routerRoutes.character.path,
      name: data.routerRoutes.character.name,
      component: () => import(/* webpackChunkName: "character" */ './../views/CharacterView.vue'),
      props: true,
      beforeEnter: (to, from, next) => {
        // Validate character route
        if (pages.map(page => page.page_name).includes(to.params.pageName)) {
          next();
        } else {
          window.location.href = data.routerRoutes.pageNotFound.path;
        }
      }
    }
  ]
});
