const inputNombre = document.getElementById("nombre");
const boton = document.getElementById("btnSaludar");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", () => {
    const nombre = inputNombre.value.trim();
    resultado.textContent = nombre ? "hola, " + nombre : "Por favor, escribe un nombre.";
});
