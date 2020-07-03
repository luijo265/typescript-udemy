"use strict";
exports.__esModule = true;
var _ = require("./exportar");
var default_1 = require("./default");
console.log(_.pi);
_.saludar();
var messi = new _.Jugador();
messi.nombre = 'Messi';
console.log(messi.nombre);
var zeus = { nombre: 'zues' };
console.log(zeus);
var exportar_1 = require("./exportar");
exportar_1.trabalenguasenrerdado();
// VIDEOS DEFAULT
default_1["default"].preguntar('Menor');
var nombre = default_1["default"].nombre, apellido = default_1["default"].apellido;
console.log(nombre, apellido);
