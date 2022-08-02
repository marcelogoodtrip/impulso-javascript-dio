import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import "./style.css";
import Button from "./Button"


/*  USANDO JSX

function sum(a, b) {
    return a + b
}

function firstJSX() {
    return (
        <div className="teste">
            Introdução ao React JS
            <h1>Soma: {sum(10, 20)}</h1>
        </div>
    )
} */


/*  ENTENDENDO SOBRE RENDERIZATION 

const element = 'Digital Innovation'
const element2 = <h1>Olá</h1>

function App() {
    return (
        <div>
            {element}
            {element2}
        </div>
    )
} */


/*  TRABALHANDO COMPONENTS

function soma(a, b) {
    alert(a + b);
}

const App = () => {

    return (
        <div className="App">
            <Button onClick={() => soma(5, 5)} name="Marcelo" />
        </div>
    )
}*/


//  ENTENDENDO LIFECILES

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            clock: 1000,
            copo: 'água'
        }
    }

    componentDidMount() {
        window.setTimeout(() => {
            this.setState({
                copo: 'suco'
            })
        }, 3000)
    }

    alterarCopo =  () =>  {
        this.setState({
            copo: 'refrigerante'
        })
    }

    render () {
        const {clock, copo} = this.state
        return (
            <div>
                <h1>{clock}</h1>
                <button onClick={() => this.alterarCopo()}><h1>{copo}</h1></button>
            </div>
        )
    }
}

/*const App = () => {
    return (
        <div className="App">
            {firstJSX()}
        </div>
    )
}*/

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);