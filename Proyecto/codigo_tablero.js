function genera_tabla() {
  // Obtener la referencia del elemento body
  var body = document.getElementsByTagName("body")[0];

  // Crea un elemento <table> y un elemento <tbody>
  var tabla   = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // Crea las celdas
  for (var i = 0; i < 2; i++) {
    // Crea las hileras de la tabla
    var hilera = document.createElement("tr");

    for (var j = 0; j < 2; j++) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      var celda = document.createElement("td");
      var textoCelda = document.createTextNode("+i+");
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }

    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
  }

  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tabla);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  tabla.setAttribute("border", "2");
}







































// var f = Number(prompt('Introduce numero de FILA'));
// var c = Number(prompt('Introduce numero de COLUMNA'));
//
// while (f > 6 || f < 1) {
//   alert('Introduce los datos de fila correctamente');
//   var f = Number(prompt('Introduce numero de FILA'));
// }
//
// while (c > 6 || c < 1) {
//   alert('Introduce los datos de columna correctamente');
//   var c = Number(prompt('Introduce numero de COLUMNA'));
// }

// var columna=new Array();
// columna[0]=1;
// columna[1]=2;
// columna[2]=3;
// var filas=new Array();
// filas[0]=1;
// filas[1]=2;
// filas[2]=3;
//
// var tabla=new Array();
// tabla[0]=columna;
// tabla[1]=filas;
//
// // var columna1=new Array();
// // columna1[0]=1;
// // columna1[1]=2;
// // columna1[2]=3;
// // var filas1=new Array();
// // filas1[0]=1;
// // filas1[1]=2;
// // filas1[2]=3;
// //
// // var tabla1=new Array();
// // tabla1[0]=columna1;
// // tabla1[1]=filas1;
//
// function crearTabla(){
//     let tbl = document.getElementById("tabla");
//     let tblBody = document.createElement("tbody");
//     for (let i = 0; i < columna.length; i++) {
//         let fila = document.createElement("tr");
//         for (let j = 0; j < filas.length; j++) {
//             let celda = document.createElement("td");
//             let textoCelda = document.createTextNode(i+"-"+j);
//             celda.appendChild(textoCelda);
//             fila.appendChild(celda);
//         }
//         tblBody.appendChild(fila);
//     }
//     tbl.appendChild(tblBody);
//     tbl.setAttribute("border", "2");
//
// }

// function crearTabla(){
//     let tbl = document.getElementById("tabla1");
//     let tblBody = document.createElement("tbody");
//     for (let i = 0; i < columna.length; i++) {
//         let fila1 = document.createElement("tr");
//         for (let j = 0; j < filas.length; j++) {
//             let celda1 = document.createElement("td");
//             let textoCelda1 = document.createTextNode(i+"-"+j);
//             celda1.appendChild(textoCelda1);
//             fila1.appendChild(celda1);
//         }
//         tblBody.appendChild(fila1);
//     }
//     tbl.appendChild(tblBody);
//     tbl.setAttribute("border", "2");
//
// }



















































































// document.write(<tr>);
/*
document.write(<table width="100%" border="1">)
document.write(<tr>)
document.write(<td>Fila</td>)
document.write(<td rowspan="1"></td>)
document.write(</tr>)
document.write(<tr>)
document.write(<td>Columna</td>)
document.write(<td rowspan="2"></td>)
document.write(</tr>)
document.write(</table>)
*/
