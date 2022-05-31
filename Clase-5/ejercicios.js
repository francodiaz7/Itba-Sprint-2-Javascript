let arrayCorreosPendientes = [
  "iroman@itbank.com",
  "loki%itbank.com",
  "loki@itbank.com",
  "@thanositbank.com",
  "thanos@itbank.com",
];
/* array de correos admitidos */
let arrayCorreosAdmitidos = [
  "thor@itbank.com",
  "tucuMan@itbank.com",
  "wanda@itbank.com",
];

let arrayCorreosDescartados = [];

function verificarCorreo(correo) {
    
  correo.forEach(function (element, index, arreglo) {
    if (element.includes("@")) {
      arrayCorreosAdmitidos += correo.splice(index, index);
    } else {
      arrayCorreosDescartados += correo.splice(index, index);
    }
  });
  console.log('Los correos admitidos son: ');
  console.log(arrayCorreosAdmitidos);
  console.log('Los correos descartados son: ');
  console.log(arrayCorreosDescartados);
  console.log('Los correos pendientes son: ');
  console.log(arrayCorreosPendientes);
  arrayCorreosPendientes = [];
  console.log(arrayCorreosPendientes);
}
console.log("--- Array de correos admitidos: " + "longitud de array" + " ---");
console.log(arrayCorreosAdmitidos);
console.log();
console.log("---Array de correos Descartados:" + "longitud de array" + " ---");
console.log(arrayCorreosDescartados);
