let input = document.getElementById("pokemon");
let btn = document.getElementById("btnBuscar");
let imagen = document.getElementById("imagen");
let nombre = document.getElementById("nombre");
let tipo = document.getElementById("tipo");
let altura = document.getElementById("altura");
let peso = document.getElementById("peso");
btn.addEventListener("click", (event) => {
    let busqueda = input.value.toLowerCase();

    fetch("https://pokeapi.co/api/v2/pokemon/" + busqueda)
        .then((response) => response.json())
        .then((data) => {
            nombre.innerHTML = data.name;
            imagen.src = data.sprites.front_default;
            let tipos = "";
            for (let i = 0; i < data.types.length; i++) {
                tipos += data.types[i].type.name + " ";
            }
            tipo.innerHTML = tipos;
            altura.innerHTML = data.height;
            peso.innerHTML = data.weight;
        })
        .catch((error) => {
            nombre.innerHTML = "Pokémon no encontrado";
        });
});