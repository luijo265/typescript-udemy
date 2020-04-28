class Vehiculo {

    //Atributos y propiedades
    marca:string;
    fecha_creacion:string;
    color:string;
    puertas:number;
    kilometraje:number = 0;

    constructor(marca_:string,fecha_creacion_:string,color_:string,puertas_:number, kilometraje_?:number){

        this.marca = marca_
        this.fecha_creacion = fecha_creacion_
        this.color = color_
        this.puertas = puertas_

        console.log('this', this)

    }

    avanzar( kilometros:number = 100 ):void {
        this.kilometraje += kilometros
    }

}

let carro:Vehiculo = new Vehiculo('optra', 'ayer', 'negro', 4)

// Accerder a un atributo
console.log('kilometraje',carro.kilometraje)

carro.avanzar(300)

console.log('kilometraje',carro.kilometraje)