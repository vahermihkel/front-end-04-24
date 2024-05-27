import React from 'react'
import { useParams } from 'react-router-dom'
import hinnadJSON from "../data/hinnad.json"

function YksHind() {
  const { index } = useParams();
  const leitud = hinnadJSON[index];

  if (leitud === undefined) {
    return <div>Hinda ei leitud</div>
  }

  return (
    <div>
      <div>Meie hind: {leitud.hind}</div>
      <div>Lisaja: {leitud.lisaja}</div>
      {leitud < 50 && <div>Soodushind!</div>}
    </div>
  )
}

export default YksHind