//ATIVIDADE     -       VERIFICA PALINDROMO JS


//      SOLUÇÃO 1
function verificaPalindromo(string) {
    if(!string) return;

    return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("gato"));



//      SOLUÇÃO 2

function verificaPalindromo(string) {
    if(!string) return "STRING INEXISTENTE";

    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(verificaPalindromo("abba"));