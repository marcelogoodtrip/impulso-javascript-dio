//      ESTRUTURAS CONDICIONAIS

var jogador1 = 1;
var jogador2 = 0;
var placar;

//      UTILIZANDO A CONDICIONAL if():

if(jogador1 > 0) {
    console.log('Jogador 1  marcou ponto!');
}else if(jogador2 > 0) {
    console.log('Jogador 2 marcou ponto!');
} else {
    console.log('Ninguém marcou ponto!');
} 

//      NINHO DE IF'S

if(jogador1 != -1) {
    if(jogador1 > 0) {
        console.log('Jogador 1  marcou ponto!');
    }else if(jogador2 > 0) {
        console.log('Jogador 2 marcou ponto!');
    } else {
        console.log('Ninguém marcou ponto!');
    } 
}

//      TERNÁRIO

jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos!') : 
console.log('Os jogadores são inválidos')
if(jogador1 > 0) {
    console.log('Jogador 1  marcou ponto!');
}else if(jogador2 > 0) {
    console.log('Jogador 2 marcou ponto!');
} else {
    console.log('Ninguém marcou ponto!');
}

//      SWITCH / CASE

switch(placar) {
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou');
        break;
        case placar = jogador2 > jogador1:
            console.log('Jogador 2 ganhou');
            break;
            default:
            console.log('ninguém ganhou');
}

//      ESTRUTURAS DE REPETIÇÃO

//      for()

let array = ['valor1', 'valor2', 'valor3'];

let object = {prop1: 'valor', prop2: 'valor2', prop3: 'valor3'};

for(let i = 0; i < array.length; i++) {
    console.log(i);
}

//      for in

for(let i in  array) {
    console.log(i);
}

for(i in object) {
    console.log(i);
}

//      for of

for (i of array) {
    console.log(i);
}

for(i of object.prop1) {
    console.log(i);
}

//      while()

var a = 0;

while(a < 10) {
    a++;
    console.log(a);
}

//      do / while

do {
    a++;
    console.log(a);
} while(a < 10) {
    console.log(a);
}