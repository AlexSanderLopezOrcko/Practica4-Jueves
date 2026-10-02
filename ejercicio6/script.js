let boton = document.getElementById("btnBuscar");
let input = document.getElementById("pokemon");

let imagen = document.getElementById("imagen");
let nombre = document.getElementById("nombre");
let tipo = document.getElementById("tipo");
let altura = document.getElementById("altura");
let peso = document.getElementById("peso");

boton.addEventListener("click", function() {

    let pokemonBuscado = input.value;

    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonBuscado)
        .then(respuesta => respuesta.json())
        .then(pokemon => {

            imagen.src = pokemon.sprites.front_default;
            nombre.textContent = pokemon.name;
            tipo.textContent = pokemon.types[0].type.name;
            altura.textContent = pokemon.height;
            peso.textContent = pokemon.weight;

        });

});