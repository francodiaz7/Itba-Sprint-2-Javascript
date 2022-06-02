function mostrar(destino) {
  document.getElementById(destino).setAttribute("class", "visible");
}

function ocultar(destino) {
  document.getElementById(destino).setAttribute("class", "hidden");
}

function reset(destino) {
  document.getElementById(destino).innerHTML = "";
}

function botonMostrar() {
  mostrar("cerrar");
  mostrar("escribir");
  mostrar("reset");
  mostrar("botonDato");
  mostrar("botonImprimir");
}

function botonOcultar() {
  ocultar("cerrar");
  reset("escribir");
  ocultar("escribir");
  ocultar("reset");
  ocultar('botonDato');
  ocultar('botonImprimir');
}

// Clase 6

let arrayDatos = [];

function algoritmo() {
  let mensaje = window.prompt("Ingrese un dato para almacenar en un array: ");
  arrayDatos.push(mensaje);
}

function crearElementoSencillo(destino) {
  let txt = "";
  for (let elemento of arrayDatos) {
    txt += "<span>" + elemento + "</span>" + "<br>";
  }
  document.getElementById(destino).innerHTML = txt;
}

function crearElementoComplicado(destino) {
  // reset(destino);
  for (let elemento of arrayDatos) {
    // crea un texto.
    let txt = document.createTextNode(elemento);
    // crea un elemento span.
    let crearSpan = document.createElement("span");
    // enlaza el texto al elemento span.
    crearSpan.appendChild(txt);
    // crea un elemento br.
    let crearBr = document.createElement("br");
    // Adquiere el id del div "destino".
    let divHeader = document.getElementById(destino);
    // Ejecuta lo mencionado anteriormente y lo enlaza.
    divHeader.appendChild(crearSpan);
    divHeader.appendChild(crearBr);
  }
}