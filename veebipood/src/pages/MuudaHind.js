import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import hinnadJSON from "../data/hinnad.json"

function MuudaHind() {
  const {index} = useParams();
  const leitud = hinnadJSON[index];
  const hindRef = useRef();
  const navigate = useNavigate();

  function muuda() { // Number("88") --> 88     mitte "88"
    const uusHind = {"hind": Number(hindRef.current.value), "lisaja": "Pille"};
    hinnadJSON[index] = uusHind;
    navigate("/halda-hinnad");
  }

  if (leitud === undefined) {
    return <div>Hinda ei leitud</div>
  }

  return (
    <div>
      <label>Hind</label> <br />
      <input type="text" ref={hindRef} defaultValue={leitud.hind}/> <br />
      <button onClick={muuda}>Muuda</button> <br />
    </div>
  )
}

export default MuudaHind