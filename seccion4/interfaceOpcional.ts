// Atributos opcionales

interface Casa {
    ancho: number;
    largo: number;
    //atributo opcional
    alto?:number
}

function dimensiones(medidas:Casa): string{
    let area: number = medidas.ancho * medidas.largo

    if (medidas.alto) {
        return `El area de tu casa es ${area} mts y de alto ${medidas.alto} mts`
    } else {
        return `El area de tu casa es ${area} mts`
    }
}

console.log(dimensiones({ancho:10, largo:12, alto:3}))
console.log(dimensiones({ancho:10, largo:12}))
// console.log(dimensiones({ancho:10}))