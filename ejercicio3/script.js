//
const nombre = document.getElementById("nombre");
const boton = document.getElementById("botonSaludar");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {
  resultado.textContent = "Hola, " + nombre.value;
});
