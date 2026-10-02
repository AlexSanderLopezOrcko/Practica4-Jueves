let imagen = document.getElementById("imagen");
let nombre = document.getElementById("nombre");
let tipo = document.getElementById("tipo");

fetch("https://pokeapi.co/api/v2/pokemon/727")
    .then((response) => response.json())
    .then((data) => {
        nombre.innerHTML = data.name;
        imagen.src = data.sprites.front_default;
        let tipos = "";
        for (let i = 0; i < data.types.length; i++) {
            tipos += data.types[i].type.name + " ";
        }
        tipo.innerHTML = tipos;
    });