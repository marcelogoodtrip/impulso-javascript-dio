//  ARROW FUNCTIONS

//      SINTAXE
const helloWorld = function() {
    return "Hello World!";
}

const helloWorld2 = () => {
    return "Hello World!";
}

const helloWorld3 = () => "Hello World";

//      SINTAXE UTILIZANDO PARAMETROS
const soma = (a, b) => a + b;

soma(4, 6); // 10

//  ou

const soma2 = a => a;

soma2(4); // 4