import Quotes from './../modules/Quotes.js';
import Characters from './../modules/Characters.js';

const API_URL = 'https://www.breakingbadapi.com/api';

export default {
  async getAllQuotes() {
    const response = await fetch(`${ API_URL }/quotes`);
    const allQuotes = await response.json();
    const { quotes } = new Quotes(allQuotes);
    return quotes;
  },
  async getAllCharacters() {
    const response = await fetch(`${ API_URL }/characters`);
    const allCharacters = await response.json();
    const { characters } = new Characters(allCharacters);
    return characters;
  }
};
