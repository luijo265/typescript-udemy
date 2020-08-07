function miFabrica(valor:string) {
    
    console.log('esta es mi fábrica de decorador')

    return function(objetivo:any){

        console.log("Este es mi decorador y hago algo con valor y con objetivo")

    }

}

