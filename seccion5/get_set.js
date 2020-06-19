let permiso = true;
class Trabajador {
    get getNombre() {
        return this.nombre;
    }
    set setNombre(nombre) {
        if (permiso) {
            this.nombre = nombre;
        }
        else {
            console.log('sin permiso');
        }
    }
}
let empleado = new Trabajador();
empleado.setNombre = 'Luijo';
console.log(empleado.getNombre);
