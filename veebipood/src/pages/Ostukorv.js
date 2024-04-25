import React from 'react'
import { Link } from 'react-router-dom'

function Ostukorv() {
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