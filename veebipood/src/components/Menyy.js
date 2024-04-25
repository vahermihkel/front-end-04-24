import React from 'react'
import { Link } from 'react-router-dom'

function Menyy() {
  return (
    <div>
       <Link to="/avaleht">
        <img className="pilt" src="https://p.turbosquid.com/ts-thumb/Y3/Cuem5B/oz/frame/jpg/1655990894/1920x1080/turn_fit_q99/afb8f7c8f7f6cc99ce88d44010e88db8ec14f2fc/frame-1.jpg" alt="" />
      </Link>

      <Link to="/esindused">
        <button className="nupp">Esindused</button>
      </Link>

      <Link to="/arikliendile">
        <button className="nupp">Ärikliendile</button>
      </Link>

      <Link to="/osta-kinkekaart">
        <button className="nupp">Osta kinkekaart</button>
      </Link>

      <Link to="/ostukorv">
        <button className="nupp">Ostukorv</button>
      </Link>

      <Link to="/seaded">
        <button className="nupp">Seaded</button>
      </Link>

      <Link to="/lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>
    </div>
  )
}

export default Menyy