
class Estudiante {

    notas:number[]

    constructor(notas:number[]){

        this.notas = notas

    }

    @modificarMetodo(false)
    getNotas():number[]{

        for (const nota of this.notas) {
            
            console.log(nota)

        }

        return this.notas

    }

}

// fabrica de decorador
// decorador de metodo
function modificarMetodo(valor:boolean) {
    
    return function(objetivo:any, propiedad:string, descriptor:PropertyDescriptor){

        console.log('objetivo', objetivo)
        console.log('propiedad', propiedad)
        console.log('descriptor', descriptor)
        
        descriptor.value = valor
        
        console.log('descriptor', descriptor)

    }

}

let estudiante:Estudiante = new Estudiante([12,9,20,18]) 

estudiante.getNotas