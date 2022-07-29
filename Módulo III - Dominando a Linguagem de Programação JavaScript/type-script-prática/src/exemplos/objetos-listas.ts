

const pessoa: {nome: string, idade: number, profissao: string} = {
    nome: 'Marcelo',
    idade: 24,
    profissao: 'desenvolvedor'
}

//  UTILIZANDO O enum
enum Profissao {
    Professor,
    Ator,
    Desenvolvedor,
    Jogador
}

//UTILIZANDO UMA interface
interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

const marcelo: Pessoa = {
    nome: 'Marcelo',
    idade: 24,
    profissao: Profissao.Desenvolvedor
}

//Trabalhando com uma nova interface

interface Estudante extends Pessoa {
    materias: string[]
}

const laryssa: Estudante = {
    nome: 'Laryssa',
    idade: 27,
    materias: ['Matemática', 'Português']
}

function listar(lista: string[]) {
    for(const item of lista) {
        console.log('- ', item);
    }
}

listar(laryssa.materias);