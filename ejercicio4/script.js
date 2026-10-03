const tablaCuerpo = document.getElementById('tabla-cuerpo');

fetch('datos.json')
  .then(respuesta => respuesta.json())
  .then(datos => {
    datos.forEach(item => {
      const combustibles = [
        { tipo: 'Gasolina', precio: item.gasolina },
        { tipo: 'Diesel', precio: item.diesel },
        { tipo: 'GNV', precio: item.gnv }
      ];

      combustibles.forEach(c => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
          <td>${item.pais}</td>
          <td>${c.tipo}</td>
          <td>${c.precio}</td>
        `;
        tablaCuerpo.appendChild(fila);
      });
    });
  })
  .catch(error => console.error('Error al cargar datos.json:', error));