class Character {
  constructor(characterItem) {
    this.characterItemRaw = characterItem;

    const {
      char_id = 0,
      name = '/',
      portrayed = '/',
      img = '',
      birthday = '/',
      nickname = '/',
      status = '/',
      occupation = [],
      appearance = []
    } = characterItem;

    this.char_id = char_id;
    this.name = name;
    this.portrayed = portrayed;
    this.img = img;
    this.birthday = birthday;
    this.nickname = nickname;
    this.life_status = status;
    this.occupation = occupation.length > 0 ? occupation.join(', ').toString() : '/';
    this.appearance = appearance;
  }
}

export default Character;
