//      ARRAYS
//  DECLARANDO UM ARRAY E ATRIBUINDO DIFERENTES TIPOS:
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array[3]);

//  forEach()       --    Intera um array;
array.forEach(function(item, index) {
    console.log(item,index)
});

//  push()      --   Adiciona item no final do array;
array.push([]);
console.log(array);

//  pop()       --    Remove item no final do array;
array.pop();
console.log(array);

//  shift()     --      Remove item no inínio do array;
array.shift();
console.log(array);

//  unshift()       --      Adiciona item no início do array;
array.unshift();
console.log(array);

//  indexOf()       --      Retorna o índice de um valor;
console.log(array.indexOf);

//  splice()        --      Remove ou substitui um item pelo índice;
array.splice();
console.log(array);

//  slice()     --      Retorna uma parte de um array existente;
let novoArray = array.slice();
console.log(array);


//      OBJETOS

//Declarando um objeto:
let object = {  string: 'string', 
                number: 1, 
                boolean: true, 
                array: ['array'], 
                objectInterno: {
                    objectInterno: 'Objeto interno'
                }
            };

console.log(object);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var {string, boolean, objectInterno} = object;
console.log(string,boolean,objectInterno);