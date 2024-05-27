import React from 'react'
import { Link } from 'react-router-dom'

function NavigationBar() {
  return (
    <div>
        
        <Link to="">
       <button className="nupp">Avaleht</button>
     </Link>

      <Link to="cart">
       <button className="nupp-e">Ostukorv</button>
     </Link>


    </div>
  )
}

export default NavigationBar