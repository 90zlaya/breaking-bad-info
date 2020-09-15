import Helper from './../libraries/Helper.js';
import Character from './Character.js';

class Characters {
  constructor(characters=[]) {
    this.characters = Helper.conversions.listOfTypes(characters, Character) || [];
  }
}

export default Characters;
