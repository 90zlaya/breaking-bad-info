import data from './mixins/data.js';
import messages from './locales/messages.js';
import router from './router/router.js';

import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App.vue';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: data.config.locales.default,
  messages
});

new Vue({
  i18n,
  router,
  el: '#app',
  render: h => h(App)
});
