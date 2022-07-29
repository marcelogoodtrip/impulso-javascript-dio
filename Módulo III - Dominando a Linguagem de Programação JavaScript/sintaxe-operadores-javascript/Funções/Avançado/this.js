//  THIS

//      THIS - FORA DE UMA FUNÇÃO
console.log(this);


// THIS DENTRO DE UM OBJETO FUNÇÃO
(
    function() {
        console.log(this);
    }
)();


//THIS ACESSANDO VALORES DE UM OBJETO
const pessoa = {
    firstName: "Marcelo",
    lastName: "Moura",
    id: 1,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    getId: function() {
        return this.id;
    }
};

pessoa.fullName(); //   "Marcelo Moura"
pessoa.getId(); //  1


//  MANIPULANDO O VALOR DE THIS

//      CALL
const pessoas = {
    nome: 'Marcelo',
};

const animal = {
    nome: 'Meggy',
};

function getSomething() {
    console.log(this.nome);
}

getSomething.call(pessoa);

//      CALL EM UMA FUNÇÃO COM ARGUMENTOS
const myObj = {
    num1: 2,
    num2: 4,
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 1, 5); //12


//      APPLY
const pessoass = {
    nome: 'Marcelo',
};
const animals = {
    nome: 'Queenie',
};

function getSomethings() {
    console.log(this.nome);
}

getSomethings.apply(pessoass);


//      APPLY EM UMA FUNÇÃO COM ARGUMENTOS
const myObjt = {
    num1: 2,
    num2: 4,
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.apply(myObj, [1, 5]); //12


//      BIND
const retornaNomes = function() {
    return this.nome;
};

let marcelo = retornaNomes.bind({nome: 'Marcelo'});

marcelo(); // Marcelo