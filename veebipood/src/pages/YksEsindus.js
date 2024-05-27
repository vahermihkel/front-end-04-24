import React from 'react'
import { useParams } from 'react-router-dom'
import esindusedFailist from "../data/esindused.json"

function YksEsindus() {
  // võtab URLi muutuja ja paneb selle väärtuse selle sõna sisse
  const { index } = useParams();
  // kandilised sulud tähistavad järjekorranumbri abil võtmist
  const leitud = esindusedFailist[index];

  if (leitud === undefined) {
    return <div>Esindust ei leitud</div>
  }

  return (
    <div>
      <div>Esinduse nimi: {leitud.nimi}</div>
      <hr />
      <div>Telefon: {leitud.tel}</div>
      <div>Aadress: {leitud.aadress}</div>
    </div>
  )
}

export default YksEsindus