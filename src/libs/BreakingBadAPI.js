export default {
  baseUrl: "https://www.breakingbadapi.com/api",
  endpoints: {
    quotes: "/quotes",
    characters: "/characters",
  },
  async getAllQuotes() {
    const response = await fetch(this.baseUrl + this.endpoints.quotes); 
    return await response.json();    
  },
  async getAllCharacters() {
    const response = await fetch(this.baseUrl + this.endpoints.characters); 
    return await response.json();    
  },
};
