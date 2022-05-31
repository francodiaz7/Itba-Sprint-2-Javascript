function ucFirst(str) {
  let resultado = str.charAt(0).toUpperCase() + ejemplo.slice(1);
  return resultado;
}

//console.log(ucFirst('ejemplodo'));

function checkSpam(str) {
  let resultado = str.toLowerCase();
  return resultado.includes("viagra") || resultado.includes("xxx");
}

//console.log(checkSpam('xxx'))
//console.log(checkSpam('Xxx'))
//console.log(checkSpam('viagra'))
//console.log(checkSpam('argentina xxx'))

function truncate(str, maxlength) {
  return str.length > maxlength ? (str = str.slice(0, maxlength) + "...") : str;
}

//console.log(truncate('argentina', 2))

function extractCurrencyValue(str) {
  return +str.slice(1);
}

//console.log(extractCurrencyValue('$534'));
// let variable = '10';
//console.log(220 + Number(variable));

// Tarea

let oracion = "hola,como,estas,otrapalabra";
let separado = oracion.split(",");
// Pueden ser una sola variable

console.log(separado[0]);
console.log(separado[1]);
console.log(separado[2]);
console.log(separado[3]);
