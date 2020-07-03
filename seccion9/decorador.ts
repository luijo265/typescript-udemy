// Crear un decorador es crear una funcion y utilizar su nombre como una etiqueta en otra parte

function imprimir(clase: Function) {

    clase.prototype.nombre = 'Dayanita'

    console.log(clase.prototype)

}

@imprimir
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