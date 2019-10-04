import translations from './../../../translations.js';
import HeaderTemplate from './HeaderTemplate.js';

const Header = {

  /* ------------------------------------------------------------------------ */

  template: HeaderTemplate,

  /* ------------------------------------------------------------------------ */

  data() {
    return {
      translations: translations,
    };
  },

  /* ------------------------------------------------------------------------ */

}

export default Header;
