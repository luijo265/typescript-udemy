
class Profesor {

    saludar(@decoradorParametro mensaje: string, @decoradorParametro mensaje2:string, mensaje3:string){

        console.log(mensaje)

    }

}

let luis = new Profesor()

luis.saludar('hola menor', 'no se usa', 'no se usa 2')

console.log(Object.getPrototypeOf(luis))

function decoradorParametro(objetivo: Object, metodo: string, indice:number){

    const metadata = 'indices_decorador'

    if (Array.isArray(objetivo[metadata])) {

        objetivo[metadata].push(indice)
        
    }else{

        objetivo[metadata] = [indice]

    }

}