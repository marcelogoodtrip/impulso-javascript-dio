import React from "react";

const listCustomer = [
    {
        id: 1,
        name: 'Marcelo Moura',
        color: 'Blue'
    },
    {
        id: 2,
        name: 'Laryssa Moura',
        color: 'black'
    }
]

const App = () => {

    const renderCustomers = (customer, index) => {
        return (
            <div key={`customer-${customer.id}`}>
                <li>{customer.name}</li>
                {customer.color.map(renderFavoriteColor)}
            </div>
        )

    }

    const renderFavoriteColor = (color, index) => {
        return (
            <div style={{paddingleft: '30px'}} key={`customer-${index}`}>
                <li>{color}</li>
            </div>
        )
    }

    return (
        <div>
            <p>Seja Bem Vindo ao React!</p>
            <div>
                <ul>
                    {listCustomer.map(renderCustomers)}
                </ul>
            </div>
        </div>
    );
};

export default App;