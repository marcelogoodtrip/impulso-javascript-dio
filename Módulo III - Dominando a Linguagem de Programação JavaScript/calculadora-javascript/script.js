function calculadora() {
    const operacao = prompt('Escolha uma operação\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potencia (**)');
    
    if(!operacao || operacao >= 7) {
        alert('Operação inválida!');
        calculadora();
    } else {
        let n1 = Number(prompt('Insira o Valor 1:'));
        let n2 = Number(prompt('Insira o Valor 2:'));
        let result;

        if(!n1 || !n2) {
            alert('Valor inválido!');
            calculadora();
        } else {
            function soma() {
                result = n1 + n2;
                alert(`${n1} + ${n2} = ${result}`);
                novaOperacao();
                }
    
            function sub() {
                result = n1 - n2;
                alert(`${n1} - ${n2} = ${result}`);
                novaOperacao();
            }
            function mult() {
                result = n1 * n2;
                alert(`${n1} * ${n2} = ${result}`);
                novaOperacao();
            }
            function divR() {
                result = n1 / n2;
                alert(`${n1} / ${n2} = ${result}`);
                novaOperacao();
            }
            function divI() {
                result = n1 % n2;
                alert(`O resto da divisão entre ${n1} % ${n2} = ${result}`);
                novaOperacao();
            }
            function pot() {
                result = n1 ** n2;
                alert(`${n1} elevado a ${n2} = ${result}`);
                novaOperacao();
            }
    
            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
    
                if(opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Até mais!');
                } else {
                    alert('Digite uma opção válida!');
                    novaOperacao();
                }
            }
    
            if(operacao == 1) {
                soma();
            } else if(operacao == 2) {
                sub();
            } else if(operacao == 3) {
                mult();
            } else if(operacao == 4) {
                divR();
            } else if(operacao == 5) {
                divI();
            } else if(operacao == 6) {
                pot();
            }
        }
    }
}

calculadora();