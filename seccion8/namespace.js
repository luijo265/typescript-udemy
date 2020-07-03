// namespace = module interno
// module = module externo
var EspacioTrabajo;
(function (EspacioTrabajo) {
    var Persona = /** @class */ (function () {
        function Persona() {
        }
        return Persona;
    }());
    EspacioTrabajo.Persona = Persona;
    EspacioTrabajo.repetida = 2;
    console.log('Hello');
})(EspacioTrabajo || (EspacioTrabajo = {}));
var persona = new EspacioTrabajo.Persona();
persona.nombre = 'Dayana';
console.log(persona);
// let repetida:number = 5
console.log(EspacioTrabajo.repetida);
