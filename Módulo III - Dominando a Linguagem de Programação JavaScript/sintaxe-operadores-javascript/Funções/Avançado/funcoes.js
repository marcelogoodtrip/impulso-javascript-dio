//TIPOS DE FUNÇÃO


//      FUNÇÃO
function soma(a, b) {
    return a + b;
}
soma(1, 2) //3


//      FUNÇÃO ANÔNIMA
const soma = function(a, b) {
    return a + b;
}


soma(1, 2) //3

//      FUNÇÃO AUTOINVOCÁVEL
(
    function(a, b) {
        return a, b;
    }
)(1, 2); //3


//      CALLBACKS
const calc = function(operacao, num1, num2) {
    return operacao(num1 + num2);
}
const soma = function(num1, num2) {
    return num1 + num2;
}
const sub = function(num1, num2) {
    return num1 - num2;
}
const resultSoma = calc(resultSoma); //3
const resultSub = calc(sub, 1, 2); // -1
console.log(resultSoma);
console.log(resultSub);