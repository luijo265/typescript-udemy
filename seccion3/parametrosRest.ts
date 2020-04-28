function deportes(persona:string, ...deportes:string[]):string {

    return `A ${persona} le gusta los siguientes deportes: ${deportes.join(',')}`

}

let message: string = deportes('Luis', 'Futbol', 'Ping Pong', 'Ajedrez', 'Voleibol')

console.log(message)