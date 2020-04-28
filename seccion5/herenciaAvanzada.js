var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animales = /** @class */ (function () {
    function Animales(nombre) {
        this.nombre = nombre;
    }
    Animales.prototype.caminar = function (distancia) {
        console.log(this.nombre + " camino " + distancia + " metros");
    };
    return Animales;
}());
var Serpiente = /** @class */ (function (_super) {
    __extends(Serpiente, _super);
    function Serpiente(nombre, longitud) {
        var _this = _super.call(this, nombre) || this;
        _this.nombre = nombre;
        _this.longitud = longitud;
        return _this;
    }
    Serpiente.prototype.caminar = function (distancia) {
        if (distancia === void 0) { distancia = 5; }
        console.log("deslizando " + distancia + " metros");
        // super.caminar(distancia)
    };
    return Serpiente;
}(Animales));
var Caballo = /** @class */ (function (_super) {
    __extends(Caballo, _super);
    function Caballo(nombre) {
        return _super.call(this, nombre) || this;
    }
    return Caballo;
}(Animales));
var sam = new Serpiente('Randalf', 3);
var zeus = new Caballo('Zeus');
zeus.caminar(15);
sam.caminar();
