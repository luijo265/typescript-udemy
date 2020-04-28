// Funciones en TS

// function multiplicar(x:number, y:number):number
// {
//     return x*y
// }

const multiplicar = (x: number, y: number): number => x*y

// let producto: string = multiplicar(7,10)
let producto: number = multiplicar(7,10)
console.log('producto', producto)

let sumatoria: number = 0
console.log('sumatoria', sumatoria)

const sumar = ():void => {sumatoria++}

sumar()
console.log('sumatoria', sumatoria)