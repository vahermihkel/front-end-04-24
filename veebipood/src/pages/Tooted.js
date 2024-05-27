import React, { useState } from 'react'
import tootedJSON from "../data/tooted.json"
 
 
function Tooted() {
  const [tooted, muudaTooted] = useState(tootedJSON.slice());     // array-s tooted
 
 
  const sorteeriAZ = ()  => { 
    tooted.sort();
    muudaTooted(tooted.slice());
  } 
  // .sort - sorteerib
  // useState annab käsu HTMLI uuendamiseks   / .slice uuendab array
 
  const sorteeriZA = ()  => { 
    tooted.sort();
    tooted.reverse();
    muudaTooted(tooted.slice());
  }
 
  const sorteeriTahedArv = ()  => { 
    tooted.sort((a, b) => a.length - b.length);
    muudaTooted(tooted.slice());
  } 
 // .sort() tähtsitku järjekorras
 // .sort() muu sorteerimine; (method) Array string seletus hiirega sulul
 
 const sorteeriTahedArvKah = ()  => { 
  tooted.sort((a, b) => b.length - a.length);
  muudaTooted(tooted.slice());
 }
 
  return (
    <div>
 
 
        <button onClick={() => muudaTooted (tootedJSON.slice())}>Reset</button>
        <br />
       {tooted.map(t => 
        <div key={t.nimi}>
          <img className="pilt" src={t.pilt} alt="" />
          <div>{t.nimi}</div>
          <div>{t.hind}</div>
          <div>{t.aktiivne}</div>
        </div>)}  
 
       <button onClick={sorteeriAZ}>SorteeriAZ</button>
       <button onClick={sorteeriZA}>SorteeriAZ</button>
       <button onClick={sorteeriTahedArv}>Sorteeri kasvavalt</button>
       <button onClick={sorteeriTahedArvKah}>Sorteeri kahanevalt</button>
 
 
 
    </div>
  )
}
 
export default Tooted