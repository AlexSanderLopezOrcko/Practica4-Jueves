fetch("datos.json")
    .then(respuesta => respuesta.json())
    .then(datos => {
        let tabla = "<table border='1'>";
        tabla += "<tr>";
        tabla += "<th>País</th>";
        tabla += "<th>Combustible</th>";
        tabla += "<th>Precio</th>";
        tabla += "</tr>";
        datos.forEach(dato => {
            tabla += "<tr>";
            tabla += "<td>" + dato.pais + "</td>";
            tabla += "<td>Gasolina</td>";
            tabla += "<td>" + dato.gasolina + "</td>";
            tabla += "</tr>";
            tabla += "<tr>";
            tabla += "<td>" + dato.pais + "</td>";
            tabla += "<td>Diesel</td>";
            tabla += "<td>" + dato.diesel + "</td>";
            tabla += "</tr>";
            tabla += "<tr>";
            tabla += "<td>" + dato.pais + "</td>";
            tabla += "<td>GNV</td>";
            tabla += "<td>" + dato.gnv + "</td>";
            tabla += "</tr>";
        });
        tabla += "</table>";
        document.getElementById("respuesta").innerHTML = tabla;
    });