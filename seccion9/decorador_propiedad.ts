
class Planeta {

    @decoradorPropiedad
    nombre:string

    constructor(nombre:string){

        this.nombre = nombre

    }

}

function decoradorPropiedad(objetivo:Object, propiedad:string){

    // console.log('objetivo', objetivo)
    // console.log('propiedad', propiedad)

    const respaldo = 'respaldo'

    const getter = function (this:any){

        // console.log('valor propiedad', this[respaldo])

        return this[respaldo] + '...'

    }

    const setter = function(this:any, valor:any){

        this[respaldo] = valor

    }

    Object.defineProperty(objetivo, propiedad, {
        get:getter,
        set:setter
    })

}

let miPlaneta:Planeta = new Planeta('Tierra')
let miPlaneta2:Planeta = new Planeta('Martes')

console.log(miPlaneta.nombre)