import React from 'react'
import { Link } from 'react-router-dom'

function Ostukorv() {
  // Coca, Fanta, Sprite, Vichy, Limpa
  // Kuvada välja üksteise all kõik tooted läbi useState ja array ehk []

  // Tühjendamine
  // Koguarv
  // Kui on 0 toodet, siis ära näita tühjenda nuppu
  // Kui on 0 toodet, siis näita "Ostukorv on tühi <Link>"

  return (
    <div>
      Ostukorv on tühi
      <Link to="/avaleht">
        Mine avalehele
      </Link>
    </div>
  )
}

export default Ostukorv