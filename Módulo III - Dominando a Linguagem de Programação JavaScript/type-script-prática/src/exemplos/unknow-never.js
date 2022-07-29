"use strict";
let any;
any = 3;
any = 'teste';
let stringTeste = 'verificar';
stringTeste = any;
let unknowValor;
unknowValor = 3;
unknowValor = 'teste';
let stringTeste2 = 'agora vai';
//stringTeste2 = unknowValor;
if (typeof unknowValor === 'string') {
    stringTeste2 = unknowValor;
}
function jogaError(erro, codigo) {
    throw {
        error: erro,
        code: codigo
    };
}
jogaError('deu erro', 500);
