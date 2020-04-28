interface Perro {
    //Atributo
    nombre:string; 
    // raza:string;
}

function adoptar( mascota: Perro): void{
    console.log(`Yo adopte a ${mascota.nombre}`)
}

// let miMascota:Perro = {
//     nombre: "Tobby",
//     raza: "pitbull"
// }
let miMascota = {
    nombre: "Tobby",
    raza: "pitbull"
}

let numero = 20

// adoptar(number)
adoptar(miMascota)