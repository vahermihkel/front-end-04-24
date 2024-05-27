import React, { useRef, useState } from 'react'
import esindusedFailist from "../data/esindused.json";
import { Link } from 'react-router-dom';

function HaldaEsindused() {
  const [esindused, muudaEsindused] = useState(esindusedFailist.slice());
  const esindusRef = useRef();
  const telefonRef = useRef();
  const aadressRef = useRef();

  function kustuta(jrknr) {
    esindusedFailist.splice(jrknr, 1);
    muudaEsindused(esindusedFailist.slice());
  }

  function lisaLoppu(esindus) {
    esindusedFailist.push(esindus);
    muudaEsindused(esindusedFailist.slice());
  }

  function lisaVormist() {
    const uusEsindus = {
      "nimi": esindusRef.current.value, 
      "tel": telefonRef.current.value, 
      "aadress": aadressRef.current.value
    };
    esindusedFailist.push(uusEsindus);
    muudaEsindused(esindusedFailist.slice());
  }

  return (
    <div>
      <label>Esinduse nimi</label> <br />
      <input ref={esindusRef} type="text" /> <br />
      <label>Esinduse telefon</label> <br />
      <input ref={telefonRef} type="text" /> <br />
      <label>Esinduse aadress</label> <br />
      <input ref={aadressRef} type="text" /> <br />
      <button onClick={lisaVormist}>Sisesta</button> <br />
      
      {esindused.map((esindus, jrknr) => 
        <div key={jrknr}>
          <div>{esindus.nimi}</div>
          <div>{esindus.tel}</div>
          <div>{esindus.aadress}</div>
          <button onClick={() => kustuta(jrknr)}>x</button>
          <button onClick={() => lisaLoppu(esindus)}>Lisa lõppu juurde</button>
          <Link to={"/muuda-esindus/" + jrknr}>
            <button>Muuda</button>
          </Link>
        </div>)}
    </div>
  )
}

export default HaldaEsindused