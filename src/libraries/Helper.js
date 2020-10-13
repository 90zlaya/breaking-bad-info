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
    // TODO: Check if needed later in project
    idFromPageName(pageName) {
      return pages
        .filter(page => Object.is(page.page_name, pageName))
        .map(pageItem => pageItem.char_id);
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
    blurLoader() {
      const {
        root,
        loader
      } = data.config.images;
      return root + loader.blur;
    }
  }
};
