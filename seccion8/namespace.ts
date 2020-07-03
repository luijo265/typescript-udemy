// namespace = module interno
// module = module externo

namespace EspacioTrabajo {

    export class Persona{
        nombre:string
    }

    export let repetida:number = 2

    console.log('Hello')

}

let persona = new EspacioTrabajo.Persona()

persona.nombre = 'Dayana'

console.log(persona)

// let repetida:number = 5

console.log(EspacioTrabajo.repetida)