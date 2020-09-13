import Vue from 'vue';
import App from './App.vue';

import i18n from './translations/i18n.js';
import router from './router/router.js';

Vue.use(i18n, {
  locale: 'en'
});

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
