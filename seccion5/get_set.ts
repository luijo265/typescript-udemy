
let permiso:boolean = true

class Trabajador {

    private nombre:string

    get getNombre():string {

        return this.nombre

    } 
    
    set setNombre(nombre:string) {

        if (permiso) {

            this.nombre = nombre
            
        } else {

            console.log('sin permiso')

        }


    }

}

let empleado = new Trabajador()

empleado.setNombre = 'Luijo'

console.log(empleado.getNombre)