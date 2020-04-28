function deportes(persona) {
    var deportes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        deportes[_i - 1] = arguments[_i];
    }
    return "A " + persona + " le gusta los siguientes deportes: " + deportes.join(',');
}
var message = deportes('Luis', 'Futbol', 'Ping Pong', 'Ajedrez', 'Voleibol');
console.log(message);
