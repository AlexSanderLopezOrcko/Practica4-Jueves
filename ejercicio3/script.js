let inputNombre = document.getElementById("inputNombre");
let btn = document.getElementById("btn");
let Saludo = document.getElementById("Saludo");
btn.addEventListener("click", function() {
    let nombre = inputNombre.value;
    Saludo.textContent = "Hola: " + nombre;
});
