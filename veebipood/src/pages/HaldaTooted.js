import React, { useRef, useState } from 'react';
import tootedJSON from "../data/tooted.json";
import {Link} from 'react-router-dom'
 
function HaldaTooted() {
  const [tooted, muudaTooted] = useState(tootedJSON.slice());
  const tootedRef = useRef();
 
  function kustuta(jrknr) {
    tootedJSON.splice(jrknr, 1);
    muudaTooted(tootedJSON.slice());
  }
 
  function lisaloppu(toode) {
    tootedJSON.push(toode);
    muudaTooted(tootedJSON.slice())
  }
 
  function lisaIse() {
    tootedJSON.push(tootedRef.current.value);
    muudaTooted(tootedJSON.slice());
  }
 
  const sorteeriAZ = ()  => { 
    tooted.sort();
    muudaTooted(tooted.slice());
  } 
 
  const sorteeriZA = ()  => { 
    tooted.sort();
    tooted.reverse();
    muudaTooted(tooted.slice());
  }
 
  const sorteeriTahedArv = ()  => { 
    tooted.sort((a, b) => a.length - b.length);
    muudaTooted(tooted.slice());
  } 

  const sorteeriTahedArvKah = ()  => { 
    tooted.sort((a, b) => b.length - a.length);
    muudaTooted(tooted.slice());
  }
 
  return (
    <div>
      <label> Sisesta toode</label>
      <input type="text" ref={tootedRef} />
      <button onClick={lisaIse}>Sisesta</button><br /><br />
 
      {tooted.map((toode, jrknr) => 
      <div key={jrknr}>
        <img className="pilt" src={toode.pilt} alt="" />
        <div>{toode.nimi}</div>
        <div>{toode.hind}</div>
        <div>{toode.aktiivne}</div>
        <button onClick={() => kustuta(jrknr)}>x</button>
        <button onClick={() => lisaloppu(toode)}>Lisa lõppu</button>
        <Link to={"/muuda-toode/" + jrknr}><button>Muuda</button></Link>
      </div>)}
      <br /><br />
 
      <button onClick={sorteeriAZ}>SorteeriAZ</button>
      <button onClick={sorteeriZA}>SorteeriAZ</button>
      <button onClick={sorteeriTahedArv}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriTahedArvKah}>Sorteeri kahanevalt</button>
    </div>
  )
}
 
export default HaldaTooted