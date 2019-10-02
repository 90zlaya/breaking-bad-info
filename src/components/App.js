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
      title: 'Vue.js Playground',
      subtitle: '',
    };
  },

  /* ------------------------------------------------------------------------ */

  methods: {
    addSubtitle() {
      this.subtitle = 'Example of a subtitle';
    },
  },

  /* ------------------------------------------------------------------------ */
}

export default App;
