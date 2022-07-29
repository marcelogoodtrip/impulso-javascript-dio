//  DESAFIO 1:
let employee = {
    code: 10,
    name: 'Jhon'
};

//or

let employee2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'Jhon'
}

//or

interface Employee {
    codigo: number,
    nome: string
}

let employee3: Employee = {
    codigo: 10,
    nome: 'Jhon'
}