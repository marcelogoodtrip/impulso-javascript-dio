interface Pessoa {
    nome: string,
    idade: number,
    profissao: Trabalho
}

enum Trabalho {
    Atriz,
    Padeiro
}

let pessoa1: Pessoa = {
    nome: "maria",
    idade: 29,
    profissao: Trabalho.Atriz
}

let pessoa2: Pessoa = {
    nome: "roberto",
    idade: 19,
    profissao: Trabalho.Padeiro
}

let pessoa3: Pessoa = {
    nome: "laura",
    idade: 32,
    profissao: Trabalho.Atriz
};

let pessoa4: Pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Padeiro
}