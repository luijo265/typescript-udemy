interface Datos<T=string> {

    nombre: T

}

let personaLibre: Datos = {
    nombre: 'Dayana'
}

let loteria: Datos<number> = {
    nombre: 15
}