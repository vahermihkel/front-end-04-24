import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import tootajadJSON from "../data/tootajad.json"
 
function MuudaTootaja() {
  const {index} = useParams();
  const leitud = tootajadJSON[index]
  const tootajadRef = useRef();
  const navigate = useNavigate();
 
  function muuda(){
    tootajadJSON[index] = tootajadRef.current.value;
    navigate("/halda-tootajad")
  }
 
  if (leitud === undefined){
    return <div>Töötajat ei leitud</div>
  }
 
  return (
    <div>
      <label>Töötaja</label><br />
      <input type="text" ref={tootajadRef}  defaultValue={leitud}/> <br />
      <button onClick={muuda}>Muuda</button>
    </div>
  )
}
 
export default MuudaTootaja