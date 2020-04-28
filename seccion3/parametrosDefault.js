function asignarPosicion(nombre, numero, posicion) {
    if (posicion === void 0) { posicion = 'Defensa'; }
    return nombre + " jugar\u00E1 con el n\u00FAmero " + numero + " en la posici\u00F3n de " + posicion;
}
var jugador1 = asignarPosicion('Pedro', 10, 'Delantero');
var jugador2 = asignarPosicion('Pique', 10);
console.log('jugador1', jugador1);
console.log('jugador2', jugador2);
