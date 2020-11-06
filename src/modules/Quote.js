class Quote {
  constructor(quoteItem) {
    this.quoteItemRaw = quoteItem;
    
    const {
      quote_id = 0,
      quote = '/',
      author = '/',
      series = '/'
    } = quoteItem;
  
    this.quote_id = quote_id;
    this.quote = quote;
    this.author = author;
    this.series = series;
  }
}

export default Quote;
