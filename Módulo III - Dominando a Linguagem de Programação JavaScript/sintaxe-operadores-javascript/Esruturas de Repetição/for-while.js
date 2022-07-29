//  FOR / WHILE

//      FOR
function multiplicaPorDois(array) {
    let multiplicados = [];

    for(let i = 0; i < array.length; i++) {
        multiplicados.push(array[i] * 2);
    }

    return multiplicados;
}

const meusNumeros = [2, 33, 456, 356, 40];

multiplicaPorDois(meusNumeros); // [4, 66, 912, 712, 80]


//      FOR ... IN - retornando as chaves
function forInExemplo(obj) {
    for(prop in obj) {
        console.log(prop);
    }
}

const meuObjeto = {
    nome: "Marcelo",
    idade: "24",
    cidade: "Aracati"
}

forInExemplo(meuObjeto);
// nome
// idade
// cidade

multiplicaPorDois(meusNumeros); // [4, 66, 912, 712, 80]


//      FOR ... IN - retornando os valores
function forInExemplo(obj) {
    for(prop in obj) {
        console.log(obj[prop]);
    }
}

const meuObjetoLog = {
    nome: "Marcelo",
    idade: "24",
    cidade: "Aracati"
}

forInExemplo(meuObjetoLog);
// Marcelo
// 24
// Aracati


//      FOR ... OF
function logNumeros(num) {
    for(num of nums) {
        console.log(num);
    }
}

const nums = [30, 20, 233, 2];

logLetras(nums);
// 30
// 20
// 233
// 2


//      WHILE
function exemploWhile() {
    let num = 0;

    while(num <= 5) {
        console.log(num);
        num++;
    }
}

exemploWhile()
// 0
// 1
// 2
// 3
// 4
// 5


//      DO  ... WHILE
function exemploDoWhile() {
    let num = 0;

    do {
        console.log(num);
        num++;
    } while (num <= 5)
}

exemploDoWhile()
// 0
// 1
// 2
// 3
// 4
// 5