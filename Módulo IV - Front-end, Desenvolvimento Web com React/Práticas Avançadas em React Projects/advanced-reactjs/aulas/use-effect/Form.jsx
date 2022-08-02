import React, { useContext } from "react";
import { ThemeContext } from "./Theme";

function Form() {

    const context = useContext(ThemeContext)

    const renderForm = (
        <form>
            <label>Nome:</label>
            <input /><br></br>
            <label>Email:</label>
            <input /><br></br>
            <label>Idade:</label>
            <input /><br></br>
            <label>Telefone:</label>
            <input />
        </form>
    )

    const renderNotLogged = (
        <h1>É necessário realizar o login!</h1>
    )

    return (
        <div>
            {!context.token ? renderNotLogged : renderForm}
        </div>
    )
}

export default Form