// Importa el objeto 'http' del módulo '../plugins'
const { http } = require('../plugins');

// Declara una función asíncrona llamada 'getPokemonById' que obtiene información de un Pokémon por su ID
const getPokemonById = async (id) => {
  // Construye la URL de la API utilizando el ID proporcionado
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  // Realiza una solicitud GET a la URL utilizando el objeto 'http' y espera la respuesta
  const pokemon = await http.get(url);

  // Las líneas comentadas a continuación muestran una forma alternativa de realizar la misma operación utilizando 'fetch' en lugar de 'http'
  // const resp = await fetch(url);
  // const pokemon = await resp.json();

  // Puedes lanzar un error si el Pokémon no existe (comentado para evitar que se ejecute)
  // throw new Error('Pokemon no existe');
  // Devuelve el nombre del Pokémon obtenido de la respuesta
  return pokemon.name;

  // Las líneas comentadas a continuación muestran una forma alternativa utilizando 'fetch' en lugar de 'http'
  // return fetch(url)
  //   .then((resp) => resp.json())
  //   .then((pokemon) => pokemon.name);
  
}

// Exporta la función 'getPokemonById' para que pueda ser utilizada en otros archivos
module.exports = getPokemonById;
