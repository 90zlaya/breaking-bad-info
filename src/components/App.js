import Translations from './../../translations.js';
import AppTemplate from './AppTemplate.js';
import Header from './header/Header.js';
import Content from './content/Content.js';
import Footer from './footer/Footer.js';

const App = {

  /* ------------------------------------------------------------------------ */

  template: AppTemplate,

  /* ------------------------------------------------------------------------ */

  components: {
    'app-header': Header,
    'app-content': Content,
    'app-footer': Footer,
  },

  /* ------------------------------------------------------------------------ */

  data() {
    return {
      translations: Translations,
    };
  },

  /* ------------------------------------------------------------------------ */

  created() {},

  /* ------------------------------------------------------------------------ */

  mounted() {},

  /* ------------------------------------------------------------------------ */

  updated() {},

  /* ------------------------------------------------------------------------ */

  methods: {},

  /* ------------------------------------------------------------------------ */
}

export default App;
