"use strict";
let valorAny;
valorAny = 3;
valorAny = 'olá';
valorAny = true;
let valorString = 'teste';
valorString = valorAny;
let valorString2 = 'teste2';
valorString2 = valorAny;
function somaStrings(string1, string2) {
    console.log(string1 + string2);
}
somaStrings(valorString, valorString2);
somaStrings('Olá, ', 'como vai?');
