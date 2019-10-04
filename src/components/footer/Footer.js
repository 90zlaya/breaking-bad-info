import translations from './../../../translations.js';
import FooterTemplate from './FooterTemplate.js';

const Footer = {

  /* ------------------------------------------------------------------------ */

  template: FooterTemplate,

  /* ------------------------------------------------------------------------ */

  data() {
    return {
      translations: translations,
    };
  },

  /* ------------------------------------------------------------------------ */

}

export default Footer;
