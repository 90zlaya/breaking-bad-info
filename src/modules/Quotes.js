import Quote from './Quote.js';

class Quotes {
  constructor(quotes) {
    this.quotesRaw = quotes;
    this.quotes = quotes.map(quote => new Quote(quote));
  }
}

export default Quotes;
