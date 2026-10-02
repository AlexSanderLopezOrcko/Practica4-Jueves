
const inputNombre = document.getElementById('nombre');
const boton = document.getElementById('botonSaludar');
const saludo = document.getElementById('saludo');

function generarSaludo() {
    const nombre = inputNombre.value.trim();
    
    if (nombre === '') {
        saludo.textContent = 'hola:';
    } else {
        saludo.textContent = 'Hola, ' + nombre;
    }
}

boton.addEventListener('click', generarSaludo);

inputNombre.addEventListener('keydown', e => {
    if (e.key === 'Enter') generarSaludo();
});
