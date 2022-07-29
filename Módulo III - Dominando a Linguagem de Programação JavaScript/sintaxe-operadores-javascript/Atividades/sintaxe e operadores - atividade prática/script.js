//ATIVIDADE JAVASCRIPT - SINTAXE E OPERADORES

//Crie uma função que recebe dois números como parâmetros

//Confira se os números são iguais

//Confira se a soma dos números é maior que 10 ou menor que 20

//Retorne uma string dizendo 'Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior /menor que 20'

function funcao(num1, num2) {
    if(!num1 || !num2) return 'Defina os valores!';
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase}${segundaFrase}`;

    //return saoIguais ? `Os números ${num1} e ${num2} são iguais` : `Os números ${num1} e ${num2} não são iguais`;  
}

function criaPrimeiraFrase(num1, num2) {
    const saoIguais = num1 === num2;

    if(saoIguais) {
        return `Os números ${num1} e ${num2} são iguais.`;
    } else {
        return `Os números ${num1} e ${num2} não são iguais.`;
    }
}

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;
    const compara10 = soma > 10;
    const compara20 = soma > 20;
    let menor10 = 'menor';
    let menor20 = 'menor';

    if(compara10) {
        menor10 = 'maior';
    }

    if(compara20) {
        menor20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${menor10} que 10 e ${menor20} que 20`;
}

console.log(funcao());