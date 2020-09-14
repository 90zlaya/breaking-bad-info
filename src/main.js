import Vue from 'vue';
import VueI18n from 'vue-i18n';
import router from './router/router.js';
import messages from './locales/messages.js';
import App from './App.vue';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en',
  messages
});

new Vue({
  i18n,
  router,
  el: '#app',
  render: h => h(App)
});
