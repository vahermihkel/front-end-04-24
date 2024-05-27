import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import esindusedFailist from "../data/esindused.json"

function MuudaEsindus() {
  const { index } = useParams();
  const leitud = esindusedFailist[index];
  const esindusRef = useRef();
  const telefonRef = useRef();
  const aadressRef = useRef();
  const navigate = useNavigate();

  function muuda(){
    const uusEsindus = {
      "nimi": esindusRef.current.value, 
      "tel": telefonRef.current.value, 
      "aadress": aadressRef.current.value
    };
    esindusedFailist[index] = uusEsindus;
    navigate("/halda-esindused");
  }

  if (leitud === undefined) {
    return <div>Esindust ei leitud</div>
  }

  return (
    <div>
      <label>Esindus</label> <br />
      <input type="text" ref={esindusRef} defaultValue={leitud.nimi} /> <br />
      <label>Esinduse telefon</label> <br />
      <input ref={telefonRef} type="text" defaultValue={leitud.tel} /> <br />
      <label>Esinduse aadress</label> <br />
      <input ref={aadressRef} type="text" defaultValue={leitud.aadress} /> <br />
      <button onClick={muuda}>Muuda</button> <br />
    </div>
  )
}

export default MuudaEsindus