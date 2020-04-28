class Animales {

    nombre:string;

    constructor(nombre:string) {
        
        this.nombre = nombre

    }

    caminar(distancia: number): void {

        console.log(`${this.nombre} camino ${distancia} metros`)

    }
}

class Serpiente extends Animales {

    longitud:number

    constructor(nombre: string, longitud:number) {

        super(nombre)

        this.nombre = nombre
        this.longitud = longitud

    }

    caminar(distancia: number = 5): void {

        console.log(`deslizando ${distancia} metros`)
        // super.caminar(distancia)

    }

}

class Caballo extends Animales{


    constructor(nombre:string){
        
        super(nombre)

    }

}

let sam = new Serpiente('Randalf', 3)
let zeus = new Caballo('Zeus')

zeus.caminar(15)
sam.caminar()