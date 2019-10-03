import dictionary from './../i18n/dictionary.js';
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
      dictionary: {},
      subtitle: '',
    };
  },

  /* ------------------------------------------------------------------------ */

  created() {
    // Set dictionary
    this.dictionary = dictionary['en'];
  },

  /* ------------------------------------------------------------------------ */

  methods: {
    addSubtitle() {
      this.subtitle = this.dictionary.examples.subtitle;
    },
  },

  /* ------------------------------------------------------------------------ */
}

export default App;
