function nombreCompleto(nombre, apellido) {
    return nombre + " " + apellido;
}
var resulta = nombreCompleto('Luis', 'Briceño');
console.log(resulta);
function nombreCompleto2(nombre, apellido) {
    if (apellido) {
        return nombre + " " + apellido;
    }
    else {
        return "" + nombre;
    }
}
var resulta2 = nombreCompleto2('Dayana');
console.log(resulta2);
