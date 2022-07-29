"use strict";
function printValoresNumericos(numero1, numero2) {
    console.log(numero1 + numero2);
}
function tratarValoresNumericos(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(tratarValoresNumericos(1, 3, aoQuadrado));
console.log(tratarValoresNumericos(1, 3, dividirPorEleMesmo));
