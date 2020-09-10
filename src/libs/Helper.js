import config from './../../.config.json';
import pages from "./../mixins/pages.js";

export default {
  characters: {
    imagePath(characterDetails='', imageName='') {
      let imagePath = '';
      const {
        root,
        characters,
        defaultCharacter,
        defaultExtension
      } = config.images;

      imagePath += root;
      imagePath += characters;
      imagePath += characterDetails ? imageName : defaultCharacter;
      imagePath += '.';
      imagePath += defaultExtension;

      return imagePath;
    },
    idFromPageName(pageName) {
      let characterId = null;
      pages.forEach((page) => {
        if (!characterId && page.page_name === pageName) {
          characterId = page.char_id;
        }
      });
  
      return characterId;
    }
  }
};
