function asignarPosicion ( nombre:string, numero:number, posicion:string = 'Defensa'):string {
    return `${nombre} jugará con el número ${numero} en la posición de ${posicion}`
}

let jugador1:string = asignarPosicion('Pedro', 10, 'Delantero')
let jugador2:string = asignarPosicion('Pique', 10)

console.log('jugador1',jugador1)
console.log('jugador2',jugador2)