var Unificador = /** @class */ (function () {
    function Unificador() {
    }
    return Unificador;
}());
// La T simboliza un numero
var miUnificador = new Unificador();
miUnificador.valor = 20;
miUnificador.sumar = function (valor1, valor2) {
    return valor1 + valor2;
};
console.log(miUnificador.sumar(2, 3));
console.log(miUnificador.valor);
// La T es un string
var unificador2 = new Unificador();
unificador2.valor = 'Luis';
unificador2.sumar = function (valor1, valor2) {
    return valor1 + valor2;
};
console.log(unificador2.sumar('Dayana ', 'Bonilla'));
console.log(unificador2.valor);
