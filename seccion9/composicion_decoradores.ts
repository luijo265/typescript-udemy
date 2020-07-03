function entrando(clase:Object){

    console.log('Primer decorador')
    
}

function imprimiendo (clase:Object){

    console.log('Segundo decorador')

}

@entrando 
@imprimiendo
class Animal {

    raza:string = 'Perro'

}

let miMarco: Animal = new Animal()

