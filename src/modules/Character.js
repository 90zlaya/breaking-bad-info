class Character {
  constructor(characterItem={}) {
    const {
      char_id,
      name,
      portrayed,
      img
    } = characterItem;

    this.char_id = char_id || 0;
    this.name = name || '/';
    this.portrayed = portrayed || '/';
    this.img = img || '';
  }
}

export default Character;
