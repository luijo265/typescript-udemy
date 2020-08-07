"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Estudiante = /** @class */ (function () {
    function Estudiante(notas) {
        this.notas = notas;
    }
    Estudiante.prototype.getNotas = function () {
        for (var _i = 0, _a = this.notas; _i < _a.length; _i++) {
            var nota = _a[_i];
            console.log(nota);
        }
        return this.notas;
    };
    __decorate([
        modificarMetodo(false)
    ], Estudiante.prototype, "getNotas", null);
    return Estudiante;
}());
// fabrica de decorador
// decorador de metodo
function modificarMetodo(valor) {
    return function (objetivo, propiedad, descriptor) {
        console.log('objetivo', objetivo);
        console.log('propiedad', propiedad);
        console.log('descriptor', descriptor);
        descriptor.value = valor;
        console.log('descriptor', descriptor);
    };
}
var estudiante = new Estudiante([12, 9, 20, 18]);
estudiante.getNotas;
