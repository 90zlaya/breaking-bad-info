import Character from './Character.js';

class Characters {
  constructor(characters) {
    this.characters = characters.map(character => new Character(character));
  }
}

export default Characters;
