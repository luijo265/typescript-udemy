// Una clase abstracta funciona como una plantilla
// la idea es qeu siempre funcione como una superclase
// este tipo de clase no puede ser instanciada directamente
// recordar sirve como plantilla de guia

abstract class SuperClase {

    abstract metodoSobreescribir(): void
    
    saludar(): void {

        console.log('hola')

    }

}

class ClaseDerivada extends SuperClase {

    constructor(){
        super()
    }

    metodoSobreescribir():void{

        console.log('metodo sobreescrito')

    }

}

let instancia = new ClaseDerivada()

instancia.saludar()

instancia.metodoSobreescribir()