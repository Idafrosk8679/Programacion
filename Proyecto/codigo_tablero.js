
// var f = Number(prompt('Introduce numero de FILA'));
// var c = Number(prompt('Introduce numero de COLUMNA'));

// while (f > 6 || f < 1) {
//   alert('Introduce los datos de fila correctamente');
//   var f = Number(prompt('Introduce numero de FILA'));
// }
//
// while (c > 6 || c < 1) {
//   alert('Introduce los datos de columna correctamente');
//   var c = Number(prompt('Introduce numero de COLUMNA'));
// }

var columna=new Array();
columna[0]=1;
columna[1]=2;
columna[2]=3;
var filas=new Array();
filas[0]=1;
filas[1]=2;
filas[2]=3;

var tabla=new Array();
tabla[0]=columna;
tabla[1]=filas;

var columna1=new Array();
columna1[0]=1;
columna1[1]=2;
columna1[2]=3;
var filas1=new Array();
filas1[0]=1;
filas1[1]=2;
filas1[2]=3;

var tabla1=new Array();
tabla1[0]=columna1;
tabla1[1]=filas1;

function crearTabla(){
    let tbl = document.getElementById("tabla");
    let tblBody = document.createElement("tbody");
    for (let i = 0; i < columna.length; i++) {
        let fila = document.createElement("tr");
        for (let j = 0; j < filas.length; j++) {
            let celda = document.createElement("td");
            let textoCelda = document.createTextNode(i+"-"+j);
            celda.appendChild(textoCelda);
            fila.appendChild(celda);
        }
        tblBody.appendChild(fila);
    }
    tbl.appendChild(tblBody);
    tbl.setAttribute("border", "2");

}
// function crearTabla(){
//     let tbl = document.getElementById("tabla1");
//     let tblBody = document.createElement("tbody");
//     for (let i = 0; i < columna.length; i++) {
//         let fila1 = document.createElement("tr");
//         for (let j = 0; j < filas.length; j++) {
//             let celda1 = document.createElement("td");
//             let textoCelda1 = document.createTextNode(i+"-"+j);
//             celda.appendChild(textoCelda1);
//             fila1.appendChild(celda1);
//         }
//         tblBody.appendChild(fila1);
//     }
//     tbl.appendChild(tblBody);
//     tbl.setAttribute("border", "2");
//
// }
//


















































































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
