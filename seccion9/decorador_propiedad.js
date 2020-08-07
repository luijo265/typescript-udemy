"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Planeta = /** @class */ (function () {
    function Planeta(nombre) {
        this.nombre = nombre;
    }
    __decorate([
        decoradorPropiedad
    ], Planeta.prototype, "nombre", void 0);
    return Planeta;
}());
function decoradorPropiedad(objetivo, propiedad) {
    // console.log('objetivo', objetivo)
    // console.log('propiedad', propiedad)
    var respaldo = 'respaldo';
    var getter = function () {
        // console.log('valor propiedad', this[respaldo])
        return this[respaldo] + '...';
    };
    var setter = function (valor) {
        this[respaldo] = valor;
    };
    Object.defineProperty(objetivo, propiedad, {
        get: getter,
        set: setter
    });
}
var miPlaneta = new Planeta('Tierra');
var miPlaneta2 = new Planeta('Martes');
console.log(miPlaneta.nombre);
