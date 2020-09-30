import Quotes from './../modules/Quotes.js';
import Characters from './../modules/Characters.js';

export default {
  baseUrl: "https://www.breakingbadapi.com/api",
  endpoints: {
    quotes: "/quotes",
    characters: "/characters",
    character: "/characters/:characterId"
  },
  async getAllQuotes() {
    const response = await fetch(this.baseUrl + this.endpoints.quotes);
    const allQuotes = await response.json();
    const { quotes } = new Quotes(allQuotes);
    return quotes;
  },
  async getAllCharacters() {
    const response = await fetch(this.baseUrl + this.endpoints.characters);
    const allCharacters = await response.json();
    const { characters } = new Characters(allCharacters);
    return characters;
  }
};
