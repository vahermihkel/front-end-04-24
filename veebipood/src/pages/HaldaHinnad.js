import React, { useRef, useState } from 'react'
import hinnadJSON from "../data/hinnad.json";
import { Link } from 'react-router-dom';

function HaldaHinnad() {
  const [hinnad, muudaHinnad] = useState(hinnadJSON.slice());
  const hindRef = useRef();

  function kustuta(jrknr) {
    hinnadJSON.splice(jrknr,1);
    muudaHinnad(hinnadJSON.slice());
  }

  function lisaLoppu(hind) {
    hinnadJSON.push(hind);
    muudaHinnad(hinnadJSON.slice());
  }

  function lisa() {
    const uusHind = {"hind": Number(hindRef.current.value), "lisaja": "Kaarel"};
    hinnadJSON.push(uusHind);
    muudaHinnad(hinnadJSON.slice());
  }

  return (
    <div>
      <label>Uus hind</label> <br />
      <input ref={hindRef} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />
      
      {hinnad.map((hind, jrknr) => 
      <div key={jrknr}>
        {hind.hind}
        <button onClick={() => kustuta(jrknr)}>x</button>
        <button onClick={() => lisaLoppu(hind)}>Lisa üks lõppu juurde</button>
        <Link to={"/muuda-hind/" + jrknr}>
          <button>Muuda</button>
        </Link>
      </div>)}
    </div>
  )
}

export default HaldaHinnad