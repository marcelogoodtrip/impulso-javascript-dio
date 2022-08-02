import React from "react";
import {useState, useEffect} from "react";
import '../Counter/counter.css';

function Counter() {
    //  RETORNA UM VETOR
    //  1. VARIÁVEL STATEFULL
    //  2. FUNÇÃO AMARRADA A ESSA VARIAVEL E ATUALIZA EM TODAS AS OCORRENCIAS
    const [count, setCounter] = useState(1)
    const [buttonStyle, setButtonStyle] = useState('counter-button-minus-active')

    useEffect(() => {
        document.getElementById('moeda').innerHTML = 2.00 * count;
    },[count]) 

    useEffect(() => {
        alert('Você não pode mais remover itens!');
        console.log(`o estilo do botao atual é: ${buttonStyle}`)
    },[buttonStyle]) 

    function increment() {
        setCounter(count + 1);
        setButtonStyle("counter-button-plus-active");
    }

    function decrement() {
        
        if(count <= 1) {
            setButtonStyle("counter-button-minus-desactive");
        }
        
        if(count > 0) {
            setCounter(count - 1);
        }
    }

    return (
        <div className="counter-wrapper">
            <button className={buttonStyle} onClick={decrement}>-</button>
            <p>{count}</p>
            <button className="counter-button-plus-active" onClick={increment}>+</button>
            
            <button id="moeda">'$'`${count}`</button>
        </div>
    )
}

export default Counter;