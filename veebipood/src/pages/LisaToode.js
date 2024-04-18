import React, { useState } from 'react'

function LisaToode() {
  const [sonum, muudaSonum] = useState("Lisa uus toode!");

  // veidi vanem, lihtsama ülesehitusega, kuna märke on vähem
  // nii              function NIMI() {}
  // kui ka           const NIMI = () => {}
  // on samaväärsed
  function lisa() {
      muudaSonum("Toode lisatud!");
      // funktsioonid on vajalikud:
      // 1. kui ma tahan nende sees saada inputi seest väärtuseid kätte
      // 2. teen 2 või rohkem rida (2 või rohkem operatsiooni - 2 usestate muutust)
  }

  // uuem, rohkem kasutatavam, raskem --> seetõttu pigem teen seda
  // const lisa = () => {

  // }

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br />
      <input type="text" /> <br />
      <button onClick={lisa}>Lisa</button>
    </div>
  )
}

export default LisaToode