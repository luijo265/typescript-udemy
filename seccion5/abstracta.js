// Una clase abstracta funciona como una plantilla
// la idea es qeu siempre funcione como una superclase
// este tipo de clase no puede ser instanciada directamente
// recordar sirve como plantilla de guia
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
var SuperClase = /** @class */ (function () {
    function SuperClase() {
    }
    SuperClase.prototype.saludar = function () {
        console.log('hola');
    };
    return SuperClase;
}());
var ClaseDerivada = /** @class */ (function (_super) {
    __extends(ClaseDerivada, _super);
    function ClaseDerivada() {
        return _super.call(this) || this;
    }
    ClaseDerivada.prototype.metodoSobreescribir = function () {
        console.log('metodo sobreescrito');
    };
    return ClaseDerivada;
}(SuperClase));
var instancia = new ClaseDerivada();
instancia.saludar();
instancia.metodoSobreescribir();
