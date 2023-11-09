const {get} = require("./httpClient")

async function getPokemon(pokemonId) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
  try {
    const getData = await get(url);
} catch (error) {
    console.error('Error:', error);
  }
}

module.exports = {getPokemon}