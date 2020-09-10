export default {
  map: {
    quotes: "BreakingBadInfoApp:Quotes",
    characters: "BreakingBadInfoApp:Characters"
  },
  getQuotes() {
    return localStorage.getItem(this.map.quotes);
  },
  setQuotes(quotes) {
    localStorage.setItem(this.map.quotes, JSON.stringify(quotes));
  },
  getCharacters() {
    return localStorage.getItem(this.map.characters);
  },
  setCharacters(characters) {
    localStorage.setItem(this.map.characters, JSON.stringify(characters));
  }
};
