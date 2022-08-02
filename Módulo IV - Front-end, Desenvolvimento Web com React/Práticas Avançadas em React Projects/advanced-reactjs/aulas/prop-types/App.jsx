import React from "react";
import PetShop from "./PetShop";

function App() {

  const handleClick = () => {
    console.log('Iniciando...')
  }

  return (
    <PetShop 
      dogs={2}
      customersName='Marcelo Moura'
      onClick={handleClick}
      status="done"
    />
  )
}

export default App