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
  for (let i = 0; i < 3; i++) {
    correo.forEach(function (element, index, arreglo) {
      if (element.includes("@")) {
        arrayCorreosAdmitidos += correo.splice(index, index + 1);
      } else {
        arrayCorreosDescartados += correo.splice(index, index + 1);
      }
    });
  }
}
console.log("--- Array de correos admitidos: " + "longitud de array" + " ---");
console.log(arrayCorreosAdmitidos);
console.log();
console.log("---Array de correos Descartados:" + "longitud de array" + " ---");
console.log(arrayCorreosDescartados);
