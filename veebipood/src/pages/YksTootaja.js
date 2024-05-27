import React from 'react'
import { useParams } from 'react-router-dom'
import TootajadJSON from "../data/tootajad.json"
 
function YksTootaja() {
  const {index} = useParams();
  const leitud = TootajadJSON[index];
 
  if (leitud === undefined) {
    return <div>Töötajat ei leitud</div>
  }
 
  return (
    <div>
       <div>Tootaja nimi {leitud}</div>
       <hr />
       <div>Tootaja kontakt:</div>
    </div>
  )
}
 
export default YksTootaja