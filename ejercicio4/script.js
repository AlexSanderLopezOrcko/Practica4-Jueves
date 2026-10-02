const contenedor = document.getElementById("contenedor");
const COMBUSTIBLES = ["gasolina", "diesel", "gnv"];

function normalizar(datos) {
    if (Array.isArray(datos))  
        return datos;
    return Object.keys(datos).map(pais => ({ pais, ...datos[pais] }));
}

function construirTabla(datos) {
  let html = "<table border='1' cellpadding='6' cellspacing='0'>";
  html += "<tr><th>País</th><th>Combustible</th><th>Precio</th></tr>";

  datos.forEach(item => {
    const pais = item.pais || item.country || item.nombre;
    COMBUSTIBLES.forEach(tipo => {
      if (item[tipo] !== undefined) {
        html += `<tr><td>${pais}</td><td>${tipo.charAt(0).toUpperCase() + tipo.slice(1)}</td><td>${item[tipo]}</td></tr>`;
      }
    });
  });

  html += "</table>";
  contenedor.innerHTML = html;
}

fetch("datos.json")
    .then(res => res.json())
    .then(datos => construirTabla(normalizar(datos)))
    .catch(err => {
    contenedor.textContent = "Error al cargar datos.json: " + err.message;
  });
