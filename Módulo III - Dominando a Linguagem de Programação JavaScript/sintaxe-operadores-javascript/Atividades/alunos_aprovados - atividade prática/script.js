const alunos = [
    {
        nome: 'Marcelo',
        nota: 10,
        turma: '1B'
    },
    {
        nome: 'Laryssa',
        nota: 0,
        turma: '1B'
    },
    {
        nome: 'Mewtwo',
        nota: 5,
        turma: '2C'
    },
];

function alunosAprovados(array, media) {
    let aprovados = [];
    for(let i = 0; i < array.length; i++) {

        const {nota, nome} = array[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 5));