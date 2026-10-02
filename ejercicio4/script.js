
let elemento = document.getElementById("tabla");
fetch("datos.json")
  .then(respuesta => respuesta.json())
  .then(datos => {
    let tablaString = "<table border= 1>";
    tablaString += "<tr><th>País</th><th>Combustible</th><th>Precio</th><th>Gnv</th></tr>";
    for (let i = 0; i < datos.length; i++) {
      tablaString += "<tr>";
      tablaString += "<td>" + datos[i].pais + "</td>";
      tablaString += "<td>" + datos[i].gasolina + "</td>";
      tablaString += "<td>" + datos[i].diesel + "</td>";
      tablaString +=  "<td>" + datos[i].gnv+"</td>";
      tablaString += "</tr>";
    }
    tablaString += "</table>";
    elemento.innerHTML = tablaString;
  });