const input = document.getElementById("pokemon");
const boton = document.getElementById("btnBuscar");

const imagen = document.getElementById("imagen");
const nombre = document.getElementById("nombre");
const tipo = document.getElementById("tipo");
const altura = document.getElementById("altura");
const peso = document.getElementById("peso");

boton.addEventListener("click", function () {
  const pokemon = input.value.trim().toLowerCase();

  if (pokemon === "") {
    nombre.textContent = "Escribe un Pokémon";
    return;
  }

  fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Pokémon no encontrado");
      }

      return response.json();
    })
    .then((data) => {
      nombre.textContent = data.name;

      imagen.src = data.sprites.front_default;

      tipo.textContent = data.types.map((t) => t.type.name).join(", ");

      altura.textContent = data.height / 10 + " m";

      peso.textContent = data.weight / 10 + " kg";
    })
    .catch((error) => {
      nombre.textContent = "Pokémon no encontrado";
      imagen.src = "https://placehold.co/180x180?text=Pokemon";
      tipo.textContent = "";
      altura.textContent = "";
      peso.textContent = "";

      console.log(error);
    });
});
