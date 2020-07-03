class Unificador<T> {

    valor: T;

    sumar:(valor1:T, valor2:T) => T;

}

// La T simboliza un numero
let miUnificador = new Unificador<number>()

miUnificador.valor = 20

miUnificador.sumar = function (valor1, valor2) {
    return valor1 + valor2
}

console.log(miUnificador.sumar(2, 3))
console.log(miUnificador.valor)

// La T es un string
let unificador2 = new Unificador<string>()

unificador2.valor = 'Luis'

unificador2.sumar = function (valor1, valor2) {
    return valor1 + valor2
}

console.log(unificador2.sumar('Dayana ', 'Bonilla'))
console.log(unificador2.valor)