// Crear un decorador es crear una funcion y utilizar su nombre como una etiqueta en otra parte

function imprimir(clase: Function) {

    clase.prototype.nombre = 'Dayanita'

    const getNombre = function():string {
        return clase.prototype.nombre
    }
    
    clase.prototype.getNombre = getNombre

    console.log(clase.prototype)

}

function overrideClass<T extends { new(...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        public nombre:string = 'Dayanita'
    };
}

@overrideClass
class Persona {

    mensaje: string = 'Hola a todos'

    saludar():void {
        console.log(this.mensaje)
    }

}

let yo:Persona = new Persona()

yo.saludar()

let tu: Persona = new Persona()

tu.saludar()

