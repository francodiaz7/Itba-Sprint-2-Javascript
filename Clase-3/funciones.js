// Recitar oldmacdonald
function creative(texto) {
  // crea el texto
  let sHeader = document.createTextNode("" + texto);
  // crea un elemento span para el texto y lo "append" it.
  let spanHeader = document.createElement("span");
  spanHeader.appendChild(sHeader);
  // crea un elemento "br".
  let brHeader = document.createElement("br");
  // Adquiere el id del div
  let divHeader = document.getElementById("escribir");
  // append el nuevo elemento y lo "append" it.
  divHeader.appendChild(spanHeader);
  divHeader.appendChild(brHeader);
}

function oldmacdonald() {
  const animales = "cow,pig,chicken";
  const animal = animales.split(",");
  const sonidos = "moo,oink,bawk";
  const sonido = sonidos.split(",");
  let numero = 0;
  while (numero != 3) {
    console.log("Old MACDONALD had a farm");
    console.log("E-I-E-I-O");
    console.log("And on his farm he had a " + animal[numero]);
    console.log("E-I-E-I-O");
    console.log("With a " + sonido[numero], "" + sonido[numero], "here");
    console.log("And a " + sonido[numero], "" + sonido[numero], "there");
    console.log("Here a " + sonido[numero] + ", there a", sonido[numero]);
    console.log("Everywhere a " + sonido[numero], "" + sonido[numero]);
    console.log("Old MacDonald had a farm");
    console.log("E-I-E-I-O");
    console.log("");
    numero = numero + 1;
  }
}

function oldmacdonald2() {
  const animal = "cow,pig,chicken".split(",");
  const sonido = "moo,oink,bawk".split(",");
  for (let i = 0; i != 3; i++) {
    creative("Old MACDONALD had a farm");
    creative("E-I-E-I-O");
    creative("And on his farm he had a " + animal[i]);
    creative("E-I-E-I-O");
    creative("With a " + sonido[i], "" + sonido[i], "here");
    creative("And a " + sonido[i], "" + sonido[i], "there");
    creative("Here a " + sonido[i] + ", there a", sonido[i]);
    creative("Everywhere a " + sonido[i], "" + sonido[i]);
    creative("Old MacDonald had a farm");
    creative("E-I-E-I-O");
    creative("");
  }
}
function oldmacdonald3() {
  const animal = "cow,pig,chicken".split(",");
  const sonido = "moo,oink,bawk".split(",");
  const numbers = [45, 4, 9, 16, 25];
  const cantos = [
    "Old MACDONALD had a farm",
    "E-I-E-I-O",
    "And on his farm he had a " + animal[i],
    "E-I-E-I-O",
    "With a " + sonido[i] + "" + sonido[i] + "here",
    "And a " + sonido[i] + "" + sonido[i] + "there",
    "Here a " + sonido[i] + ", there a" + sonido[i],
    "Everywhere a " + sonido[i] + "" + sonido[i],
    "Old MacDonald had a farm",
    "E-I-E-I-O",
    "",
  ];
  let txt = "";
  cantos.forEach(myFunction);
  document.getElementById("demo").innerHTML = txt;

  function myFunction(value, index, array) {
    txt += value + "<br>";
  }
}
// Comenta la temperatura

function temperatura(valor) {
  let output =
    0 >= valor
      ? "El arte es morirse de frío"
      : 16 >= valor
      ? "Está fresco para pasear en jaula"
      : 16 < valor
      ? "Maldición, va a ser un día hermoso"
      : "Error";

  return output;
}

function temperatura2(valor) {
  return 0 >= valor
    ? "El arte es morirse de frío"
    : 16 >= valor
    ? "Está fresco apra pasear en jaula"
    : 16 < valor
    ? "Maldición, va a ser un día hermoso"
    : "Error";
}

// Señala el signo

function signo(numero) {
  let output =
    numero > 0
      ? "El número ingresado es mayor que cero"
      : numero < 0
      ? "El número ingresado es menor que cero"
      : numero === 0
      ? "El número ingresado es igual a cero"
      : "Error";
  return output;
}

// Funcion login

function login(Perfil) {
  let cuenta =
    Perfil == "Empleado"
      ? "Hola"
      : Perfil == "Director"
      ? "Felicidades"
      : Perfil == ""
      ? "Sin sesión"
      : "Error";
  return cuenta;
}

// Funciones html
// element.addEventListener("click", funcion);

function mostrar(target) {
  document.getElementById(target).setAttribute("class", "visible");
}

function ocultar(target) {
  document.getElementById(target).setAttribute("class", "hidden");
}

function reset(target) {
  document.getElementById(target).innerHTML = "";
}

function escribir(donde) {
  let txt = "";
  for (let i = 0; i < 5; i++) {
    txt += +i + "<br>";
  }
  document.getElementById(donde).innerHTML = txt;
}
