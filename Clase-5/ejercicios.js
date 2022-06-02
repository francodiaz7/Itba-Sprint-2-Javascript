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
  for (let i = 0;correo.length != 0; i++) {
      if (correo[i].includes("@") && correo[i].indexOf('@') != 0) {
        arrayCorreosAdmitidos += correo.splice([i], [i] +1);
        i -= 1;
      } else {
        arrayCorreosDescartados += correo.splice([i], [i] +1);
        i -=1;
      }
    };
  }
console.log("--- Array de correos admitidos: " + "longitud de array" + " ---");
console.log(arrayCorreosAdmitidos);
console.log();
console.log("---Array de correos Descartados:" + "longitud de array" + " ---");
console.log(arrayCorreosDescartados);
console.log('correos pendientes');
console.log(arrayCorreosPendientes);