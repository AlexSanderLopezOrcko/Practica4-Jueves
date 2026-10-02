const entrada = document.getElementById("pokemon");
const boton = document.getElementById("buscar");

const nombre = document.getElementById("nombre");
const imagen = document.getElementById("imagen");
const tipo = document.getElementById("tipo");

boton.addEventListener("click", function () {
  const pokemon = entrada.value.toLowerCase();

  fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
    .then((response) => response.json())
    .then((data) => {
      nombre.textContent = data.name;

      imagen.src = data.sprites.front_default;

      tipo.textContent = data.types[0].type.name;
    })
    .catch((error) => {
      nombre.textContent = "Pokémon no encontrado";
      imagen.src = "";
      tipo.textContent = "";

      console.log(error);
    });
});
