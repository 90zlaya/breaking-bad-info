import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Character from './views/Character.vue';

// Install router
Vue.use(Router);

// New Router instance
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/character',
      name: 'character',
      component: Character,
    },
  ],
});
