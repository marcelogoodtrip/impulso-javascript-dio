let any: any;
any = 3;
any = 'teste';

let stringTeste: string = 'verificar';
stringTeste = any;

let unknowValor: unknown;
unknowValor = 3;
unknowValor = 'teste';

let stringTeste2: string = 'agora vai';
//stringTeste2 = unknowValor;

if(typeof unknowValor === 'string') {
    stringTeste2 = unknowValor;
}

function jogaError(erro: string, codigo: number):never {
    throw {
        error: erro, 
        code: codigo
    }
}

jogaError('deu erro', 500);