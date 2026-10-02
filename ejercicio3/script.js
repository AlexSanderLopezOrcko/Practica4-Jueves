let nombre = document.getElementById("nombre");
let btn = document.getElementById("Saludar");
let result = document.getElementById("respuesta");
btn.addEventListener("click", (event) => {
    result.innerHTML = "Hola: " + nombre.value;
    console.log(nombre.value);
});