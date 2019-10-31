import vue from 'vue';
import i18n from './../i18n/i18n.js';
import app from './../components/app.js';

/* -------------------------------------------------------------------------- */

vue.use(i18n);

new vue({
  el: '#app',
  render: h => h(app),
});


/* -------------------------------------------------------------------------- */
