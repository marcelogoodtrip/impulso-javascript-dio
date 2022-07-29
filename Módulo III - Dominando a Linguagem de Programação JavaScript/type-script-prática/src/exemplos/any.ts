let valorAny: any;

valorAny = 3;
valorAny = 'olá';
valorAny = true;

let valorString: string = 'teste';
valorString = valorAny;
let valorString2: string = 'teste2';
valorString2 = valorAny;

function somaStrings(string1: string, string2: string) {
    console.log(string1 + string2);
}

somaStrings(valorString, valorString2);
somaStrings('Olá, ', 'como vai?');