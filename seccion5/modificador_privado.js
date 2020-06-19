var Jugador = /** @class */ (function () {
    function Jugador(position) {
        this.position = position;
    }
    Jugador.prototype.obtenerPosition = function () {
        console.log(this.position);
    };
    Jugador.prototype.obtenerPositionPrivate = function () {
        console.log(this.position);
    };
    return Jugador;
}());
var ronaldo = new Jugador('Delantero');
// console.log(ronaldo.position)
ronaldo.obtenerPosition();
// ronaldo.obtenerPositionPrivate()
