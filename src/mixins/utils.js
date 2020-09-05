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
