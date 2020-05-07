import Vue from 'vue';
import App from './App.vue';
import i18n from './translations/i18n.js';

// Install languages to Vue.js instance
Vue.use(i18n, {
  locale: 'en',
});

// New Vue.js instance
new Vue({
  el: '#app',
  render: h => h(App),
});
