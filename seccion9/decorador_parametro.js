"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var Profesor = /** @class */ (function () {
    function Profesor() {
    }
    Profesor.prototype.saludar = function (mensaje, mensaje2, mensaje3) {
        console.log(mensaje);
    };
    __decorate([
        __param(0, decoradorParametro), __param(1, decoradorParametro)
    ], Profesor.prototype, "saludar", null);
    return Profesor;
}());
var luis = new Profesor();
luis.saludar('hola menor', 'no se usa', 'no se usa 2');
console.log(Object.getPrototypeOf(luis));
function decoradorParametro(objetivo, metodo, indice) {
    var metadata = 'indices_decorador';
    if (Array.isArray(objetivo[metadata])) {
        objetivo[metadata].push(indice);
    }
    else {
        objetivo[metadata] = [indice];
    }
}
