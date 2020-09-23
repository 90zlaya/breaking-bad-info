import pages from './../mixins/pages.js';
import data from './../mixins/data.js';

export default {
  characters: {
    imagePath(characterDetails='', imageName='') {
      let imagePath = '';
      const {
        root,
        characters,
        defaultCharacter,
        defaultExtension
      } = data.config.images;

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
  },
  conversions: {
    listOfTypes(items, moduleName) {
      const listOfTypes = [];
      const itemsArray = items;
    
      if (itemsArray && itemsArray[0]) {
        itemsArray.forEach((item) => {
          listOfTypes.push(new moduleName(item));
        });
      }
    
      return listOfTypes;
    }
  },
  images: {
    dotLoader() {
      const {
        root,
        loader
      } = data.config.images;
      return root + loader.dot;
    },
    circleLoader() {
      const {
        root,
        loader
      } = data.config.images;
      return root + loader.circle;
    }
  }
};
