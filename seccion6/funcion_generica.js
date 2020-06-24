function elementoRandom(lista) {
    var indice_random = Math.floor(Math.random() * lista.length);
    return lista[indice_random];
}
var numeros = [32, 15, 20, 14];
var miNumero = elementoRandom(numeros);
console.log(miNumero);
var casasHP = ["griffindor", "hufflepuff", "Revanclaw", "sliferin"];
var nombreCasaHp = elementoRandom(casasHP);
console.log("Bienvenido a " + nombreCasaHp);
