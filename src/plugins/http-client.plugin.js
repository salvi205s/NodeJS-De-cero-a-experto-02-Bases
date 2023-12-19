// Importa la librería 'axios' que proporciona funcionalidades para hacer solicitudes HTTP.
const axios = require("axios");

// Declara un objeto llamado 'httpClientPlugin' que contiene funciones para realizar operaciones HTTP.
const httpClientPlugin = {
  // Define una función 'get' que realiza una solicitud GET a la URL proporcionada y devuelve los datos obtenidos.
  get: async (url) => {
    // Realiza una solicitud GET utilizando 'axios' y espera la respuesta.
    const { data } = await axios.get(url);
    // Devuelve los datos obtenidos de la respuesta.
    return data;

    // Las líneas comentadas a continuación muestran una forma alternativa de realizar la misma operación utilizando 'fetch' en lugar de 'axios'.
    // const resp = await fetch(url);
    // return await resp.json();
  },

  // Define funciones para realizar operaciones HTTP, como 'post', 'put', y 'delete'. Actualmente, estas funciones están vacías y deben implementarse según sea necesario.
  post: async (url, body) => {},
  put: async (url, body) => {},
  delete: async (url) => {},
};

// Exporta el objeto 'httpClientPlugin' como parte de un objeto 'http' para que pueda ser utilizado en otros archivos.
module.exports = {
  http: httpClientPlugin,
};
