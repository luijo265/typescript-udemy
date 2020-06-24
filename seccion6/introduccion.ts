let casas_HP: string[] = ["griffindor", "hufflepuff", "Revanclaw", "sliferin"]

const sombrero = ( todas_las_casas_hp: string[] ):string => {

    let indice_random: number = Math.floor( Math.random()*todas_las_casas_hp.length)

    console.log('indice',indice_random)

    return todas_las_casas_hp[indice_random]

}

let nombreCasa: string = sombrero(casas_HP)

console.log(`Bienvenido a ${nombreCasa}`)

let materias: number[] = [20, 13, 40, 30]

const materiasSemestre = ( materias: number[] ):number => {

    let indice_random: number = Math.floor(Math.random() * materias.length)

    return materias[indice_random]

}

let misMaterias:number = materiasSemestre(materias)

console.log(`Debes cursar ${misMaterias} materias`)
