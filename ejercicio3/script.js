let boton = document.getElementById("boton");

boton.addEventListener("click", function() {

    let nombre = document.getElementById("nombre").value;

    document.getElementById("resultado").textContent = "Hola " + nombre;

});