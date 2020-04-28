class Animal {

    caminar(distancia:number):void{

        console.log(`Se mueve ${distancia} metros`)

    }
    
}

class Gato extends Animal {

    maullar():void{
        
        console.log('Miauuuu')

    }

}

let gatito:Gato = new Gato()

gatito.caminar(15)
gatito.maullar()