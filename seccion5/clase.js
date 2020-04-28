var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca_, fecha_creacion_, color_, puertas_, kilometraje_) {
        this.kilometraje = 0;
        this.marca = marca_;
        this.fecha_creacion = fecha_creacion_;
        this.color = color_;
        this.puertas = puertas_;
        console.log('this', this);
    }
    Vehiculo.prototype.avanzar = function (kilometros) {
        if (kilometros === void 0) { kilometros = 100; }
        this.kilometraje += kilometros;
    };
    return Vehiculo;
}());
var carro = new Vehiculo('optra', 'ayer', 'negro', 4);
// Accerder a un atributo
console.log('kilometraje', carro.kilometraje);
carro.avanzar(300);
console.log('kilometraje', carro.kilometraje);
