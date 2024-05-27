import React, { useState } from 'react'
import hinnadFailist from "../data/hinnad.json";
import { Link } from 'react-router-dom';

function Hinnad() {
  const [hinnad, uuendaHinnad] = useState(hinnadFailist.slice());

  const reset = () => {
    uuendaHinnad(hinnadFailist.slice());
  }

  const sorteeriKasv = () => {
    hinnad.sort((a,b) => a.hind - b.hind);
    uuendaHinnad(hinnad.slice());
  }

  const sorteeriKah = () => {
    hinnad.sort((a,b) => b.hind - a.hind);
    uuendaHinnad(hinnad.slice());
  }

  const sorteeriAZ = () => {
    hinnad.sort((a,b) => a.hind.toString().localeCompare(b.hind.toString()));
    uuendaHinnad(hinnad.slice());
  }

  const sorteeriZA = () => {
    hinnad.sort((a,b) => a.hind.toString().localeCompare(b.hind.toString()));
    hinnad.reverse();
    uuendaHinnad(hinnad.slice());
  }

  const filtreeriSuuremKui50 = () => {
    const vastus = hinnad.filter(hind => hind.hind > 50);
    uuendaHinnad(vastus);
  }

  const filtreeriVaiksemKui20 = () => {
    const vastus = hinnad.filter(hind => hind.hind < 20);
    uuendaHinnad(vastus);
  }

  const filtreeriPaarisarvud = () => {
    const vastus = hinnad.filter(e => e.hind % 2 === 0);
    uuendaHinnad(vastus);
  }

  function kokku() {
    let summa = 0;
    hinnad.forEach(h => summa = summa + h.hind);
    return summa;
  }

  return (
    <div>
      <div>Hindade koguarv: {hinnad.length} tk</div>
      <div>Hindade summa: {kokku()}</div>
      {hinnad.length > 0 && <button onClick={() => uuendaHinnad([])}>Tühjenda</button>}
      <button onClick={reset}>Reset</button>
      <br /><br />

      <button onClick={sorteeriKasv}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriKah}>Sorteeri kahanevalt</button>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <br /><br />
      <button onClick={filtreeriSuuremKui50}>Jäta alles suuremad kui 50</button>
      <button onClick={filtreeriVaiksemKui20}>Jäta alles väiksemad kui 20</button>
      <button onClick={filtreeriPaarisarvud}>Jäta alles paarisarvud</button>

      {hinnad.map((h, index) => 
        <div key={index}>
          {h.hind}
          <Link to={"/hind/" + index}>Vt lähemalt</Link>
        </div>)}
    </div>
  )
}

export default Hinnad