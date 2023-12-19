// Importa el módulo 'get-age'. (Comentario: esta línea está comentada y no tiene efecto en el código actual)
// const getAgePlugin = require('get-age');

// Define una función llamada 'getAge' que calcula la edad basada en la fecha de nacimiento.
const getAge = (birthdate) => {
  // Verifica si la fecha de nacimiento no está presente, y en ese caso, devuelve un objeto Error indicando que se requiere la fecha de nacimiento.
  if (!birthdate) return new Error("birthdate is required");

  // Calcula la edad restando el año actual al año de nacimiento utilizando el objeto Date.
  // La versión comentada utilizaba un módulo externo 'get-age', pero ha sido sustituido por la lógica directa en este código.
  return new Date().getFullYear() - new Date(birthdate).getFullYear();
};

// Exporta la función 'getAge' como parte de un objeto para que pueda ser utilizada en otros archivos.
module.exports = {
  getAge,
};
