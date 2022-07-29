"use strict";
const pessoa = {
    nome: 'Marcelo',
    idade: 24,
    profissao: 'desenvolvedor'
};
//  UTILIZANDO O enum
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professor"] = 0] = "Professor";
    Profissao[Profissao["Ator"] = 1] = "Ator";
    Profissao[Profissao["Desenvolvedor"] = 2] = "Desenvolvedor";
    Profissao[Profissao["Jogador"] = 3] = "Jogador";
})(Profissao || (Profissao = {}));
const marcelo = {
    nome: 'Marcelo',
    idade: 24,
    profissao: Profissao.Desenvolvedor
};
const laryssa = {
    nome: 'Laryssa',
    idade: 27,
    materias: ['Matemática', 'Português']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(laryssa.materias);
