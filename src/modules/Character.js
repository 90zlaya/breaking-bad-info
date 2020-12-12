import Helper from './../libraries/Helper.js';

class Character {
  constructor(characterItem) {
    this.characterItemRaw = characterItem;

    const {
      char_id,
      name,
      portrayed,
      img,
      birthday,
      nickname,
      status,
      occupation,
      appearance
    } = characterItem;

    this.char_id = char_id || 0;
    this.name = name || '/';
    this.portrayed = portrayed || '/';
    this.img = img || '';
    this.birthday = birthday === 'Unknown' ? birthday : Helper.formatters.formatDate(birthday);
    this.nickname = nickname || '/';
    this.life_status = status || '/';
    this.occupation = Helper.converters.convertArrayToString(occupation);
    this.appearance = Helper.converters.convertArrayToString(appearance);
  }
}

export default Character;
