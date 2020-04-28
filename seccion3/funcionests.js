// Funciones en TS
// function multiplicar(x:number, y:number):number
// {
//     return x*y
// }
var multiplicar = function (x, y) { return x * y; };
// let producto: string = multiplicar(7,10)
var producto = multiplicar(7, 10);
console.log('producto', producto);
var sumatoria = 0;
console.log('sumatoria', sumatoria);
var sumar = function () { sumatoria++; };
sumar();
console.log('sumatoria', sumatoria);
