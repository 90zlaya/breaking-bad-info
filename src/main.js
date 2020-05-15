import Vue from 'vue';
import i18n from './translations/i18n.js';
import router from './router/router.js';
import App from './App.vue';

// Install languages to Vue.js instance
Vue.use(i18n, {
  locale: 'en',
});

// New Vue.js instance
new Vue({
  router,
  el: '#app',
  render: h => h(App),
});
