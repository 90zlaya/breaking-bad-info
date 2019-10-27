import translations from './../../translations.js';
import appTemplate from './appTemplate.js';
import header from './header/header.js';
import content from './content/content.js';
import footer from './footer/footer.js';

const app = {

  /* ------------------------------------------------------------------------ */

  template: appTemplate,

  /* ------------------------------------------------------------------------ */

  components: {
    'app-header': header,
    'app-content': content,
    'app-footer': footer,
  },

  /* ------------------------------------------------------------------------ */

  data() {
    return {
      translations: translations,
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

export default app;
