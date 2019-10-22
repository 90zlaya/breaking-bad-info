import Translations from './../../translations.js';
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
      translations: Translations,
      subtitle: '',
    };
  },

  /* ------------------------------------------------------------------------ */

  created() {},

  /* ------------------------------------------------------------------------ */

  mounted() {},

  /* ------------------------------------------------------------------------ */

  updated() {},

  /* ------------------------------------------------------------------------ */

  methods: {
    addSubtitle() {
      this.subtitle = this.translations.subtitle;
    },
  },

  /* ------------------------------------------------------------------------ */
}

export default App;
