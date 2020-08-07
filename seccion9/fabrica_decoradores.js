"use strict";
function miFabrica(valor) {
    console.log('esta es mi fábrica de decorador');
    return function (objetivo) {
        console.log("Este es mi decorador y hago algo con valor y con objetivo");
    };
}
