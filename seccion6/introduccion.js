var casas_HP = ["griffindor", "hufflepuff", "Revanclaw", "sliferin"];
var sombrero = function (todas_las_casas_hp) {
    var indice_random = Math.floor(Math.random() * todas_las_casas_hp.length);
    console.log('indice', indice_random);
    return todas_las_casas_hp[indice_random];
};
var nombreCasa = sombrero(casas_HP);
console.log("Bienvenido a " + nombreCasa);
var materias = [20, 13, 40, 30];
var materiasSemestre = function (materias) {
    var indice_random = Math.floor(Math.random() * materias.length);
    return materias[indice_random];
};
var misMaterias = materiasSemestre(materias);
console.log("Debes cursar " + misMaterias + " materias");
