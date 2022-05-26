function oldmacdonald() {
  const animal = "cow,pig,chicken";
  const animalito = animal.split(",");
  const sound = "moo,oink,bawk";
  const sonido = sound.split(",");
  let numero = 0;
  let say = console.log;
  while (numero != 3) {
    console.log("Old MACDONALD had a farm");
    console.log("E-I-E-I-O");
    console.log("And on his farm he had a " + animalito[numero]);
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
