class Character {
  constructor(characterItem) {
    this.characterItemRaw = characterItem;

    const {
      char_id = 0,
      name = '/',
      portrayed = '/',
      img = ''
    } = characterItem;

    this.char_id = char_id;
    this.name = name;
    this.portrayed = portrayed;
    this.img = img;
  }
}

export default Character;
