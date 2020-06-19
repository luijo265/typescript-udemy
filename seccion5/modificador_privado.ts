class Jugador {

    private position:string;

    constructor(position:string){

        this.position = position

    }

    public obtenerPosition():void{
        console.log(this.position)
    }

    private obtenerPositionPrivate():void{
        console.log(this.position)
    }

}

let ronaldo = new Jugador('Delantero')


// console.log(ronaldo.position)

ronaldo.obtenerPosition()
// ronaldo.obtenerPositionPrivate()


