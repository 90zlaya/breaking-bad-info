export default {
  map: {
    quotes: 'BreakingBadInfoApp:Quotes',
    characters: 'BreakingBadInfoApp:Characters',
    activeLanguage: 'BreakingBadInfoApp:ActiveLanguage'
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
  },
  getActiveLanguage() {
    return localStorage.getItem(this.map.activeLanguage);
  },
  setActiveLanguage(activeLanguage) {
    localStorage.setItem(this.map.activeLanguage, JSON.stringify(activeLanguage));
  }
};
