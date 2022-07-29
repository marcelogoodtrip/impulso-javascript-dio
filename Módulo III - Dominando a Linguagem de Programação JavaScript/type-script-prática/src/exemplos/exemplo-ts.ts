let button = document.getElementById('button');
let input1 = document.getElementById('input-one') as HTMLInputElement;
let input2 = document.getElementById('input-two') as HTMLInputElement;

function soma(num1: number, num2: number, printar: boolean, frase: string) {
    let resultado = num1 + num2;
    if(printar) {
        console.log(frase + resultado);
    }
    
    return num1 + num2;
}

let printar = true;
let frase:string 
frase = 'O valor é: ';

if(button) {
    button.addEventListener('click', () => {
        if(input1 && input2) {
            console.log(soma(Number(input1.value), Number(input2.value), printar, frase));
        }
    })
}