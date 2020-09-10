import config from './../../.config.json';

export const isSet = (item) => {
  const notSetIdentifiers = [
    undefined,
    null,
    "",
    "-",
    "undefined"
  ];
  return !notSetIdentifiers.includes(item);
};

export const characterImagePath = (characterDetails='', imageName='') => {
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
};
