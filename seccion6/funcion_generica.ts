function elementoRandom<T>( lista:T[] ):T {

    let indice_random: number = Math.floor(Math.random() * lista.length)

    return lista[indice_random]

}

let numeros:number[] = [32,15,20,14] 

let miNumero:number = elementoRandom(numeros)

console.log(miNumero) 

let casasHP: string[] = ["griffindor", "hufflepuff", "Revanclaw", "sliferin"]

let nombreCasaHp: string = elementoRandom(casasHP)

console.log(`Bienvenido a ${nombreCasaHp}`)