// Recitar oldmacdonald

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
