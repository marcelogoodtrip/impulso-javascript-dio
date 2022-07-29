import React from "react";
import Button from "../components/Button";
import mock from '../mock'

const App = () => {

    const name = 'Marcelo'

    const handleClick = (e, id) => {
        console.log('Deletar Cliente')
        alert(`ID do cliente: ${id}`)
    }

    const renderCustomers = (customer, index) => {
        return (
            <div key={`customer-${customer.id}`}>
                <li>{customer.name} <Button onClick={() => handleClick(customer.id)}> Deletar Cliente X </Button></li>
                {customer.skills.map(renderSkills)}
            </div>
        )
    }

    const renderSkills = (skill, index) => {
        return (
            <div style={{ paddingLeft: '30px' }} key={`skill-${index}`}>
                <li>{skill}</li>
            </div>
        )
    }

    return (
        <div>
            <p>Seja Bem Vindo ao React!</p>
            <div>
                <ul>
                    {mock.map(renderCustomers)}
                </ul>
            </div>
        </div>
    );
};

export default App;