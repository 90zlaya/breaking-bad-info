import dictionary from './dictionary.js';

const i18n = {
  // Install language
  install(Vue, options) {
    const t = this.getTranslation(options);
    const RTL_LOCALES = ['ar', 'he'];

    Vue.prototype.$t = (key, parameters) => {
      return this.getTranslationLine(t, key, parameters) || '';
    };

    Vue.prototype.$rtl = () => {
      return RTL_LOCALES.indexOf(options.locale.toLowerCase()) > -1
        ? 'rtl'
        : 'ltr';
    };
  },
  // Get translation line (dynamic translation lines support)
  getTranslationLine(translation, propertyName, propertyParameters) {
    const line = propertyName.split('.').reduce((a, b) => {
      return a[b];
    }, translation);

    if (propertyParameters === undefined) {
      return line;
    } else {
      const key = Object.keys(propertyParameters);
      const value = Object.values(propertyParameters);
      const replaced = line.replace(`{${ key }}`, value);

      return replaced;
    }
  },
  // Get translation from dictionary
  getTranslation(options) {
    const translation =
      options && options.locale
        ? dictionary[options.locale.split('-')[0]] || dictionary['en']
        : dictionary['en'];

    return translation;
  },
};

export default i18n;
