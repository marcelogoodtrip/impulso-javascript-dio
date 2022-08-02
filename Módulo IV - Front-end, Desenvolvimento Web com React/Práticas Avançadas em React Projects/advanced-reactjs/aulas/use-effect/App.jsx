import React, { useState, useEffect } from "react";
import { ThemeContext, themes } from "./components/Theme";
import Card from './components/Card';

function App() {
  const [token, setToken] = useState()

  useEffect(() => {
    setTimeout(() => {
      setToken('34q4m4k43an4a');
    }, 4000)
  }, [setToken])

  return (
    <ThemeContext.Provider value={{ ...themes.primary, token }}>
      <Card />
    </ThemeContext.Provider>
  )
}

export default App