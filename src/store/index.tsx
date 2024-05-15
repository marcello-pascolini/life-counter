import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.scryfall.com/',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const fetchAutocompleteData = async (query: string) => {
  try {
    const response = await api.get(`cards/autocomplete?q=${query}`);
    return response.data.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const searchCards = async (selectedCards: {}) => {
    const apiUrl = 'https://api.scryfall.com/cards/search';
    const results = [];

    const cardNames = Object.values(selectedCards);

  
    for (let cardName of cardNames) {
      if (cardName) {
        try {
          const response = await axios.get(apiUrl, {
            params: {
              q: `!"${cardName}"`,
              unique: 'prints',
              format: 'json'
            }
          });
  
          if (response.data && response.data.data && response.data.data.length > 0) {
            results.push(response.data.data[0]);
          } else {
            console.log(`Nessuna carta trovata per: ${cardName}`);
          }
        } catch (error) {
          console.error('Errore nella ricerca della carta:', error);
        }
      }
    }
  
    return results;
  };