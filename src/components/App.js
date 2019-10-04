import translations from './../../translations.js';
import AppTemplate from './AppTemplate.js';
import Header from './header/Header.js';
import Footer from './footer/Footer.js';

const App = {

  /* ------------------------------------------------------------------------ */

  template: AppTemplate,

  /* ------------------------------------------------------------------------ */

  components: {
    'app-header': Header,
    'app-footer': Footer,
  },

  /* ------------------------------------------------------------------------ */

  data() {
    return {
      translations: translations,
      subtitle: '',
    };
  },

  /* ------------------------------------------------------------------------ */

  created() {},

  /* ------------------------------------------------------------------------ */

  methods: {
    addSubtitle() {
      this.subtitle = this.translations.subtitle;
    },
  },

  /* ------------------------------------------------------------------------ */
}

export default App;
