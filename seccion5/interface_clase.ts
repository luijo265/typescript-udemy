interface DatosPersonales {
    nombre: string;
    apellido: string;
}

class Estudiante implements DatosPersonales{

    nombre:string;

    apellido:string;



}

let estudiante = new Estudiante()

estudiante.nombre = 'Dayana'
estudiante.apellido = 'Bonilla'

console.log(estudiante)