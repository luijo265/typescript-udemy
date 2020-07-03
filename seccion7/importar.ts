import * as _ from './exportar'
import periodista from './default'

console.log(_.pi)

_.saludar()

let messi = new _.Jugador()
messi.nombre = 'Messi'

console.log(messi.nombre)

let zeus: _.Mascota = {nombre:'zues'}

console.log(zeus)

import { trabalenguasenrerdado as tb } from "./exportar";

tb()

// VIDEOS DEFAULT



periodista.preguntar('Menor')
const { nombre, apellido } = periodista
console.log(nombre, apellido)