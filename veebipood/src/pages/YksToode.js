import React from 'react'
import { useParams } from 'react-router-dom'
import TootedJSON from "../data/tooted.json"
 
function YksToode() {
  const {index } = useParams();
  const  leitud = TootedJSON[index];
 
  if (leitud === undefined) {
    return <div>Toodet ei leitud</div>
  }
 
  return (
    <div>
      <div>Toode: {leitud.nimi} </div>
      <hr></hr>
      <div>Toote hind: {leitud.hind}</div>
      {leitud.aktiivne ? <i>Toode on aktiivne</i> : <i>Toode ei ole aktiivne</i> }
      <img src={leitud.pilt} alt="" />
    </div>
  )
}
 
export default YksToode