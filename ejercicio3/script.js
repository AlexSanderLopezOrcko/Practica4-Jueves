const nombreInput = document.getElementById('nombreInput');
const saludarBtn = document.getElementById('saludarBtn');
const mensaje = document.getElementById('mensaje');

saludarBtn.addEventListener('click', () => {
  const nombre = nombreInput.value;

  if (nombre.trim() !== '') {
    mensaje.textContent = `hola: ${nombre}`;
  } else {
    mensaje.textContent = 'hola: ';
  }
});