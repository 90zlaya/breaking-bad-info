import Helper from './../libraries/Helper.js';
import Quote from './Quote.js';

class Quotes {
  constructor(quotes) {
    this.quotes = Helper.conversions.listOfTypes(quotes, Quote);
  }
}

export default Quotes;
