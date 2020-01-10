import Vue from 'vue';
import App from './../components/App.js';
import i18n from './../translations/i18n.js';

/* -------------------------------------------------------------------------- */

// Install languages to Vue.js instance
Vue.use(i18n);

// New Vue.js instance
new Vue({
  el: '#app',
  render: h => h(App),
});

/* -------------------------------------------------------------------------- */
