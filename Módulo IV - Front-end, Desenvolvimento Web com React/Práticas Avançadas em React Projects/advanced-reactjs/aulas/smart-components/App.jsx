import React, {useState} from "react";
import Gallery from "./components/Gallery";

function App() {

  const photos = [
    'http://placeimg.com/140/160/people',
    'http://placeimg.com/140/160/animals',
    'http://placeimg.com/140/160/tech',
    'http://placeimg.com/140/160/nature',
    'http://placeimg.com/140/160/any',
  ]

  return (
    <>
      <h1>Galeria de Fotos</h1>
      <div>
        <Gallery 
          photos={photos}
        />
      </div>
    </>
  )
}

export default App