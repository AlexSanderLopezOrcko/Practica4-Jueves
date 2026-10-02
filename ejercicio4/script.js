fetch("datos.json")
  .then((response) => response.json())
  .then((datos) => {
    let tabla = `
            <table border="1">
                <tr>
                    <th>País</th>
                    <th>Gasolina</th>
                    <th>Diesel</th>
                    <th>GNV</th>
                </tr>
        `;

    datos.forEach((dato) => {
      tabla += `
                <tr>
                    <td>${dato.pais}</td>
                    <td>${dato.gasolina}</td>
                    <td>${dato.diesel}</td>
                    <td>${dato.gnv}</td>
                </tr>
            `;
    });

    tabla += `</table>`;

    document.getElementById("tabla").innerHTML = tabla;
  });
