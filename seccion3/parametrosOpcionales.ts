function nombreCompleto(nombre:string, apellido:string) :string {

    return `${nombre} ${apellido}`

}


let resulta:string = nombreCompleto('Luis', 'Briceño')

console.log(resulta)

function nombreCompleto2(nombre: string, apellido?: string): string {

    if (apellido) {
        
        return `${nombre} ${apellido}`
        
    } else {
        
        return `${nombre}`
    }


}

let resulta2: string = nombreCompleto2('Dayana')

console.log(resulta2)