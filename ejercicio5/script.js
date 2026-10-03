const nombrePokemon = document.getElementById('nombrePokemon');
const tipoPokemon = document.getElementById('tipoPokemon');
const imagenPokemon = document.getElementById('imagenPokemon');

const URL_API = 'https://pokeapi.co/api/v2/pokemon/pikachu';

fetch(URL_API)
  .then(response => response.json()) 
  .then(data => {

    nombrePokemon.textContent = `NombrePokemon: ${data.name}`;

    const tipos = data.types.map(t => t.type.name).join(', ');
    tipoPokemon.textContent = `TipoPokemon: ${tipos}`;

    imagenPokemon.src = data.sprites.front_default;
    imagenPokemon.alt = data.name;
  })
  .catch(error => {
    console.error('Error al consumir la API:', error);
  });
