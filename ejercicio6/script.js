console.log('script.js cargado correctamente');

const inputBusqueda = document.getElementById('pokemon');
const btnBuscar = document.getElementById('btnBuscar');

const imagenElemento = document.getElementById('imagen');
const nombreElemento = document.getElementById('nombre');
const estadoElemento = document.getElementById('tipo');
const especieElemento = document.getElementById('altura');
const generoElemento = document.getElementById('peso');

btnBuscar.addEventListener('click', () => {
  const nombre = inputBusqueda.value.trim();

  if (!nombre) {
    alert('Ingresa el nombre de un personaje');
    return;
  }

  fetch(`https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(nombre)}`)
    .then(res => res.json())
    .then(data => {
      console.log('Respuesta API:', data);
      
      if (data.results && data.results.length > 0) {
        const personaje = data.results[0];
        
        imagenElemento.src = personaje.image;
        imagenElemento.alt = personaje.name;
        nombreElemento.textContent = personaje.name;
        estadoElemento.textContent = personaje.status;
        especieElemento.textContent = personaje.species;
        generoElemento.textContent = personaje.gender;
      } else {
        alert('Personaje no encontrado');
      }
    })
    .catch(err => {
      console.error('Error:', err);
    });
});