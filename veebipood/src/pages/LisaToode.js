import React, { useRef, useState } from 'react'
import tootedFailist from "../data/tooted.json";

function LisaToode() {
  const [sonum, muudaSonum] = useState("Lisa uus toode!");
  const luger = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();

  const lisa = () => {
    if (luger.current.value === "") {
      muudaSonum("Toode lisamiseks pead nime andma!")
    } else {
      const uusToode = {
        nimi: luger.current.value,
        hind: hindRef.current.value,
        pilt: piltRef.current.value,
        aktiivne: aktiivneRef.current.value
      }
      tootedFailist.push(uusToode);
      muudaSonum("Toode lisatud: " + luger.current.value + "!");
    }
  }

  
  function kontrolli() {
    if (luger.current.value === "") {
      muudaSonum("Toote nimi on kohustuslik!");
      return;
    }

    // luger.current.value ---> Coca
    // luger.current.value[0] ---> C
    if (luger.current.value[0].toLowerCase() === luger.current.value[0]) {
      muudaSonum("Toote nimi peab algama suure algustähega!");
      return;
    }

    if (luger.current.value.length > 30) {
      muudaSonum("Toote nimi on liiga pikk!");
      return;
    }
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br />
      <input onChange={kontrolli} ref={luger} type="text" /> <br />
      <label>Toote hind</label> <br />
      <input ref={hindRef} type="text" /> <br />
      <label>Toote pilt</label> <br />
      <input ref={piltRef} type="text" /> <br />
      <label>Toote aktiivne</label> <br />
      <input ref={aktiivneRef} type="text" /> <br />
      <button onClick={lisa}>Lisa</button>
    </div>
  )
}

export default LisaToode


// veidi vanem, lihtsama ülesehitusega, kuna märke on vähem
  // nii              function NIMI() {}
  // kui ka           const NIMI = () => {}
  // on samaväärsed

  // funktsioonid on vajalikud:
      // 1. kui ma tahan nende sees saada inputi seest väärtuseid kätte
      // 2. teen 2 või rohkem rida (2 või rohkem operatsiooni - 2 usestate muutust)

  // uuem, rohkem kasutatavam, raskem --> seetõttu pigem teen seda
  // const lisa = () => {

  // }