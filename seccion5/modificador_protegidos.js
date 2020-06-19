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
var Instrumento = /** @class */ (function () {
    function Instrumento(nombre) {
        this.nombre = nombre;
    }
    return Instrumento;
}());
var Piano = /** @class */ (function (_super) {
    __extends(Piano, _super);
    function Piano(nombre) {
        var _this = _super.call(this, nombre) || this;
        _this.deCuerda = false;
        _this.getNombre = function () {
            console.log(_this.nombre);
        };
        return _this;
    }
    return Piano;
}(Instrumento));
var miPiano = new Piano('Mi pieano de cola');
miPiano.getNombre();
