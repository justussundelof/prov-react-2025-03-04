// 1. Popup (3p)
//
// Skapa en knapp "visa" på sidan. När man klickar på knappen ska en popup visas.
// Popup:en visar rubriken "En popup" och en stängknapp i en ruta.
// När man klickar på stängknappen ska popupen tas bort.

//state för om popup visas
// funktion för knapp

import React, { useState } from 'react'

const Popup = () => {


  return (
    <div>
      <button onClick={() => alert('en popup')}
       >visa</button>
    </div>
  )
}

export default Popup
