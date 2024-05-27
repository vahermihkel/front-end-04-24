import React, { useRef, useState } from 'react';
import TootajadJSON from "../data/tootajad.json";
import {Link} from 'react-router-dom'
 
function HaldaTootajad() {
  const [tootajad, muudaTootajad] = useState(TootajadJSON.slice());
  const tootajaRef = useRef();
 
  function kustuta(jrknr){
    TootajadJSON.splice(jrknr, 1);
    muudaTootajad(TootajadJSON.slice());
  }
 
  function lisaLoppu(tootaja) {
    TootajadJSON.push(tootaja);
    muudaTootajad(TootajadJSON.slice());
  }
 
  function lisa(){
    TootajadJSON.push(tootajaRef.current.value);
    muudaTootajad(TootajadJSON.slice());
  }
 
  return (
    <div>
      <label>Lisa tootaja</label>
      <input type="text" ref={tootajaRef}/>
      <button onClick={lisa}>Lisa</button>
 
      <br /><br />
 
      {tootajad.map((tootaja, jrknr) =>
      <div key={jrknr}>
        {tootaja}
        <button onClick={() => kustuta(jrknr)}>x</button>
        <button onClick={() => lisaLoppu(tootaja)}>Lisa töötaja</button>
        <Link to={"/muuda-tootaja/" + jrknr}>
          <button>Muuda</button>
        </Link>
      </div>)}
    </div>
  )
}
 
export default HaldaTootajad