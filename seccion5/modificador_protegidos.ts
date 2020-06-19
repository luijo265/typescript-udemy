class Instrumento {

    protected nombre:string

    constructor(nombre:string){

        this.nombre = nombre

    }

}

class Piano extends Instrumento {

    private deCuerda: boolean = false

    constructor(nombre:string) {

        super(nombre)

    }

    public getNombre = ():void => {

        console.log(this.nombre)

    }

}

let miPiano = new Piano('Mi pieano de cola')

miPiano.getNombre()

// console.log(miPiano.nombre)