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

      <Link to="/hinnad">
        <button className="nupp">Hinnad</button>
      </Link>

      <Link to="/tootajad">
        <button className="nupp">Töötajad</button>
      </Link>

      <Link to="/tooted">
        <button className="nupp">Tooted</button>
      </Link>

      <br /><br />

      <Link to="/halda-esindused">
        <button className="nupp">Halda esindusi</button>
      </Link>

      <Link to="/halda-hinnad">
        <button className="nupp">Halda hindu</button>
      </Link>

      <Link to="/halda-tootajad">
        <button className="nupp">Halda töötajaid</button>
      </Link>

      <Link to="/halda-tooted">
        <button className="nupp">Halda tooteid</button>
      </Link>

      <Link to="/contact">
        <button className="nupp">Kontakteeru meiega</button>
      </Link>

    </div>
  )
}

export default Menyy