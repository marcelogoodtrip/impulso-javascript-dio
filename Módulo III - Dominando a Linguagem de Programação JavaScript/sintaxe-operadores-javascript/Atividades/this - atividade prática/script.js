function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa = {
    nome: "Marcelo",
    idade: 24
}

console.log(calculaIdade.call(pessoa, 15));
console.log(calculaIdade.apply(pessoa, [15]));